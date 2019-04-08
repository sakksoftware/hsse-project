const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleLinkingStudiesModelClass = mongoose.model('HSEArticleLinkingStudies');
const Authentication = require('../authentication');

exports.listArticles = async (req, res) => {

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.find({ _linkingStudiesJunior: user._id })
    .exec(function(err, articles) {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article in your Assigned Linking Studies Queue'
            });
        }
        return res.status(200).send(articles);
    });
};

exports.fetchArticle = async (req, res) => {

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
        }
        return res.status(200).send(article);
    })
    .populate('linkingStudiesJuniorInput')

};

exports.setLinkingStudiesValues = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._linkingStudiesJunior.equals(user._id) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for Linking Studies for article'
            });

        } else if ( article._linkingStudiesJunior.equals(user._id) ) {

            const newlinkingStudies = new HSEArticleLinkingStudiesModelClass(inputValues);
            linkingStudies._article = articleId;
            linkingStudies.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Linking Studies for article, err: ${err}`
                    });
                }
        
            });
            
            article.linkingStudiesJuniorInput = newlinkingStudies;

            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior Linking Studies added for article'
            });

        } else if( article._elibilityFilterJunior.equals(user._id) ) {

            const newLinkingStudies = new HSEArticleLinkingStudiesModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Linking Studies for article, err: ${err}`
                    });
                }
        
            });
            
            article.linkingStudiesJuniorInput = newLinkingStudies;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior filter added for article'
            });
            
        } else if( article._elibilityFilterSenior.equals(user._id) ) {

            const newQualityAppraisal = new HSEArticleQualityAppraisalModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Quality Appraisal for article, err: ${err}`
                    });
                }
        
            });

            article.elibilityFilterSeniorInput = inputValues;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Senior filter added for article'
            });
            
        } 
        
    });

};

exports.setQualityAppraisalComplete = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._elibilityFilterJunior.equals(user._id) || article._elibilityFilterSenior.equals(user._id)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        } else if ( article._elibilityFilterJunior.equals(user._id) && article._elibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter._article = articleId;
            newEligibilityFilter.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Quality Appraisal for article, err: ${err}`
                    });
                }
        
            });
            
            article.elibilityFilterJuniorInput = newEligibilityFilter;
            article.elibilityFilterSeniorInput = newEligibilityFilter;
            
            article.elibilityFilterJuniorCompleted = true;
            article.elibilityFilterSeniorCompleted = true;

            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior and Senior filter added for article'
            });

        } else if( article._elibilityFilterJunior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Quality Appraisal for article, err: ${err}`
                    });
                }
        
            });
            
            article.elibilityFilterJuniorInput = newEligibilityFilter;
            article.elibilityFilterJuniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior appraisal added for article'
            });
            
        } else if( article._elibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Quality Appraisal for article, err: ${err}`
                    });
                }
        
            });

            article.elibilityFilterSeniorInput = inputValues;
            article.elibilityFilterSeniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Senior appraisals added for article'
            });
            
        } 
        
    });

};

/*
exports.setEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }

        if(article._elibilityFilterJunior === user._id) {

            article.elibilityFilterJuniorInput = inputValues;
            article.elibilityFilterJuniorCompleted = true;

            await article.save();
            return res.status(200).send({
                message: 'Junior eligibility and filter completed for article'
            });

        }

        if(article._elibilityFilterSenior === user._id) {

            article.elibilityFilterSeniorInput = inputValues;
            article.elibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior eligibility and filter completed for article'
            });

        }
        
        if( (article._elibilityFilterJunior !== user._id) && (article._elibilityFilterSenior !== user._id) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        }

        setFullEligibilityFilterCompleteOrResolve(articleId);

    });

};

*/

exports.setJuniorEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterJunior !== user._id) {
            return res.status(404).send({
                message: 'You are not the junior appraisal for this article'
            });
        } else {

            article.elibilityFilterJuniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Junior quality appraisal completed for article'
            });
        
        }
    });

};

exports.setSeniorEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;
    
     const user = await Authentication.getUserFromToken(req.headers.authorization);

/*
    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }
*/

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterSenior !== user._id) {
            return res.status(404).send({
                message: 'You are not the senior appraisal for this article'
            });
        } else {

            article.elibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior quality appraisal completed for article'
            });
        
        }
    });

};

const setFullEligibilityFilterCompleteOrResolve = async (articleId) => {

    HSEArticleModelClass.findById(articleId, async (err, article) => {

        if(err) {

            //return res.send(err);
            console.log(err);

        } else if(!article) {
            /*
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
            */
           console.log('No article with that identifier has been found');
        }

        let newEligibilityFilterJuniorInput = null;
        let newEligibilityFilterSeniorInput = null;

        await HSEArticleEligibilityFilterModelClass.findById(article.elibilityFilterJuniorInput, (err, eligibilityFilterJuniorInput) => {
            
            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterJuniorInput) {
                throw new Error('Quality Appraisal for Junior Appraisal does not exist');
            } else {
                newEligibilityFilterJuniorInput = eligibilityFilterJuniorInput;
            }

        });

        await HSEArticleEligibilityFilterModelClass.findById(article.elibilityFilterSeniorInput, (err, eligibilityFilterSeniorInput) => {

            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterSeniorInput) {
                throw new Error('Quality Appraisal for Senior Filter does not exist');
            } else {
                newEligibilityFilterSeniorInput = eligibilityFilterSeniorInput;
            }

        });

        if(article.qualityAppraisalJuniorCompleted && article.qualityAppraisalSeniorCompleted) {
            
            // Call instance method to check if all fields on article's eligibilityFilter are equal
            if( newQualityAppraisalJuniorInput.isEqualTo(newEligibilityFilterSeniorInput) ) {

                article.eligibilityFilterFullCompletion = true;
                await article.save();
                console.log(`Full completion set`);
                /*
                return res.status(201).send({
                    message: 'Eligibility and Filter stage passed for this article'
                });
                */
            } else {

                article.eligibilityFilterResolve = true;
                article.elibilityFilterFinalInput = newEligibilityFilterSeniorInput;
                await article.save();
                console.log(`resolve completion set`);
                /*
                return res.status(201).send({
                    message: 'Resolve Eligibility and Filter values for this article'
                });
                */
            }

        } else {
            /*
            return res.status(200).send({
                message: 'Senior and Junior Eligibility and filter are not completed for article'
            });
            */
           console.log('Senior and Junior Quality Appraisal are not completed for article');
        }
    });

};

exports.setFullCompletion = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
       .and([ { elibilityFilterJuniorCompleted: true }, { elibilityFilterSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
           }

           // Check to make sure all fields are the same
           if(isElibigilityFilterJuniorSeniorInputEqual(articleId)) {
               article.eligibilityFilterFullCompletion = true;
           } 
           
       });
};

const isElibigilityFilterJuniorSeniorInputEqual = (articleId) => {

    const isEqual = false;

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }

    });

    return isEqual;
    
};

exports.setQualityAppraisalInputs = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
       .and([ { qualityAppraisalJuniorCompleted: true }, { qualityAppraisalSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Quality Appraisal'
               });
           }

           // Check to make sure all fields are the same
           if(isQualityAppraisalJuniorSeniorInputEqual(articleId)) {
               article.qualityAppraisalFullCompletion = true;
           } 
           
       });
};


