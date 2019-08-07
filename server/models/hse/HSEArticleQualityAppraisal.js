const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleQualityAppraisalSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    // Quality
    questionOne: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"] },
    questionTwo: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"]},
    questionThree: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"]},
    questionFour: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"]},
    questionFive: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"] },
    questionSix: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"]},
    questionSeven: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"],},
    questionEight: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"],},
    questionNine: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"],},
    questionTen: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"],},
    questionEleven: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"],},
    
    amstarStatus: { type: String, enum: ['In progress', 'Completed'], default: 'In progress'},
    amstarNumerator: { type: Number },
    amstarDenominator: { type: Number },

    hseState: { type: Schema.Types.Mixed, default: null },

});

HSEArticleQualityAppraisalSchema.methods.isEqualTo = function (otherInput) {
    //console.log(otherInput);
    currentModel = this;

    var unEqualFields = 0;

    const props = Object.keys(HSEArticleQualityAppraisalSchema.paths);

    console.log(props.length);

    HSEArticleQualityAppraisalSchema.eachPath(function(path) {
        console.log(`-------------------The path: ${path}`)
        if( currentModel[path] !== otherInput[path] && path != '_article' && path != '_id' && path !== 'hseState'/*path != '__v'*/) {
            console.log(`${path}: ${currentModel[path]}, ${path}: ${otherInput[path]}`);
            unEqualFields++;
            console.log(path);
        }
    
    });
    console.log(`This is the unEqualFields: ${unEqualFields}`);
    return unEqualFields === 0;

};

mongoose.model('HSEArticleQualityAppraisals', HSEArticleQualityAppraisalSchema);

HSEArticleQualityAppraisalSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(HSEArticleQualityAppraisalSchema.paths);
//console.log(props.length);