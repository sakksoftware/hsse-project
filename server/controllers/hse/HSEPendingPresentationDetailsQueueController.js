const mongoose = require('mongoose');

const Authentication = require('../authentication');

const HSEArticleModelClass = mongoose.model('HSEArticles');

exports.listArticles = async (req, res) => {
    HSEArticleModelClass.find({ complicated: false })
       .and([ { _presentationDetailsJunior: null }/*, { eligibilityFiltersFullCompletion: true }*/ ])
       .exec(function(err, articles) {
           if(err) {
               return res.send(err);
           } else if(!articles) {
               return res.status(404).send({
                   message: 'No article in the Presentation Details Article Pending Queue'
               });
           }
           return res.status(200).send(articles);
       });
};

exports.listArticle = async (req, res) => {

    const id = req.param.id;

    return await HSEArticleModelClass.findById(id);

};

exports.create = (req, res) => {
    
}

exports.addArticleToJuniorPresentationDetailer = async (req, res) => {

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        } else if(article._presentationDetailsJunior !== null){
            return res.status(404).send({
                message: 'Junior presentation detailer has already been added'
            });
        } else {

            if( hasRole('juniordetailer', user) ) {

                article._presentationDetailsJunior = user._id;
                article._presentationDetailsJuniorEmail = user.email;

                await article.save();
                return res.status(200).send({
                    message: 'Junior presentation detailer added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }

        }

    });

};


const hasRole = (role, user) => {
    return user.roles.includes(role);
}
