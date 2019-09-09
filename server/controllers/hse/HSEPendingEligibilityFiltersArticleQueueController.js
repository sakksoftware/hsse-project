/**
 * @name HSEPendingEligibilityFiltersArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for listing articles in the pending queue
 * and assigning articles to junior and senior filterers
 */

const mongoose = require('mongoose');

const Authentication = require('../authentication');

const HSEArticleModelClass = mongoose.model('HSEArticles');

exports.listArticles = async (req, res) => {
    HSEArticleModelClass.find({ complicated: false })
       .or([ { _eligibilityFiltersJunior: null }, { _eligibilityFiltersSenior: null } ])
       .exec(function(err, articles) {
           if(err) {
               return res.send(err);
           } else if(!articles) {
               return res.status(404).send({
                   message: 'No article in the Eligibility Filters Article Pending Queue'
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

exports.addArticleToJuniorEligibilityFilterer= async (req, res) => {

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
        } else if(article._eligibilityFiltersJunior !== null) {
            return res.status(404).send({
                message: 'A junior filterer has already been added for this article'
            });
        } else {

            if(hasRole('juniorfilterer', user) || hasRole('seniorfilterer', user)) {
                
                article._eligibilityFiltersJunior = user._id;
                article._eligibilityFiltersJuniorEmail = user.email;

                await article.save();
                return res.status(200).send({
                    message: 'Junior eligibility and filterer user added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
            
        }
    });

};

exports.addAllArticlesToJuniorEligibilityFilterer= async (req, res) => {

    const { articleIds } = req.body;
    const { assignUser } = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    if(!hasRole('administrater'), user)
        return res.status(404).send({
            message: 'Permission denied'
        });

   
    articleIds.forEach( (articleId, index) => {

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
            } else if(article._eligibilityFiltersJunior !== null) {
                return res.status(404).send({
                    message: 'A junior filterer has already been added for this article'
                });
            } else {
    
                if(hasRole('juniorfilterer', assignUser) || hasRole('seniorfilterer', assignUser)) {
                    
                    article._eligibilityFiltersJunior = assignUser._id;
                    article._eligibilityFiltersJuniorEmail = assignUser.email;
    
                    await article.save();
                    return res.status(200).send({
                        message: 'Junior eligibility and filterer user added'
                    });
                } else {
                    return res.status(400).send({
                        message: 'User does not have persmission'
                    })
                }
                
            }
        });
    });
    
};

exports.addArticleToSeniorEligibilityFilterer = async (req, res) => {

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
        } else if(article._eligibilityFiltersSenior !== null) {
            return res.status(404).send({
                message: 'A senior filterer has already been added for this article'
            });
        } else {

            if(hasRole('seniorfilterer', user)) {
                    
                article._eligibilityFiltersSenior = user._id;
                article._eligibilityFiltersSeniorEmail = user.email;

                await article.save();

                return res.status(200).send({
                    message: 'Senior eligibility and filterer user added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
        }
    });

};

exports.addAllArticlesToSeniorEligibilityFilterer = async (req, res) => {

    const { articleIds } = req.body;
    const { assignUser } = req.body;

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    if(!hasRole('administrater'), user)
        return res.status(404).send({
            message: 'Permission denied'
        });

    articleIds.forEach((articleId, index) => {

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
            } else if(article._eligibilityFiltersSenior !== null) {
                return res.status(404).send({
                    message: 'A senior filterer has already been added for this article'
                });
            } else {
    
                if(hasRole('seniorfilterer', assignUser)) {
    
                    articleIds.forEach( async (article) => {
                        
                        article._eligibilityFiltersSenior = assignUser._id;
                        article._eligibilityFiltersSeniorEmail = assignUser.email;
    
                        await article.save();
    
                    });
    
                    return res.status(200).send({
                        message: 'Senior eligibility and filterer user added'
                    });
                } else {
                    return res.status(400).send({
                        message: 'User does not have persmission'
                    })
                }
            }
        });
    });

};


const hasRole = (role, user) => {
    return user.roles.includes(role);
}
