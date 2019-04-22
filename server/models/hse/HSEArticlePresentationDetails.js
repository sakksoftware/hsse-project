const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticlePresentationDetailsSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    
});



mongoose.model('HSEArticlePresentationDetails', HSEArticlePresentationDetailsSchema);

HSEArticlePresentationDetailsSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(HSEArticlePresentationDetailsSchema.paths);