const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const shortid = require('shortid');

const { Schema } = mongoose;

const HSEArticleSchema = new Schema({

    // Field to store article id from the old system
    articleId: { type: String },

    // Field for short id generation
    articleIdShort: { type: String, default: shortid.generate() },

    // Fields from EndNote
    referenceType: { type: String },
    rating: { type: String },
    authors: { type: String },
    year: { type: String },
    title: { type: String },
    journal: { type: String },
    volume: { type: String },
    issue: { type: String },
    pages: { type: String },
    startPage: { type: String },
    ePubDate: { type: String },
    date: { type: String },
    typeOfArticle: { type: String },
    shortTitle: { type: String },
    alternateJournal: { type: String },
    ISSN: { type: String },
    DOI: { type: String },
    originalPublication: { type: String },
    rePrintEdition: { type: String },
    reviewedItem: { type: String },
    legalNote: { type: String },
    PMCID: { type: String },
    NIHMSID: { type: String },
    articleNumber: { type: String },
    accessionNumber: { type: String },
    callNumber: { type: String },
    label: { type: String },
    keywords: { type: String },
    abstract: { type: String },
    notes: { type: String },
    researchNotes: { type: String },
    URL: { type: String },
    fileAttachments: { type: String },
    authorAddress: { type: String },
    figure: { type: String },
    caption: { type: String },
    accessDate: { type: String },
    translatedAuthor: { type: String },
    translatedTitle: { type: String },
    nameOfDatabase: { type: String },
    databaseProvider: { type: String },
    language: { type: String, default: 'English' },
    priority: {type: String, enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'LOW' },
    source: { type: String },

    articleSource: { type: String, default: 'Hand Searches' },
    harvestDate: { type: Date, default: Date.now },

    questionType: { type: String },
    documentType: { type: String },
    
    publishedDate: { type: Date },


    // Stage completions

    // Eligibility and Filter Input
    _eligibilityFiltersJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _eligibilityFiltersJuniorEmail: { type: String, default: null },

    _eligibilityFiltersSenior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _eligibilityFiltersSeniorEmail: { type: String, default: null },

    eligibilityFiltersJuniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleEligibilityFilters', default: null },
    eligibilityFiltersSeniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleEligibilityFilters', default: null },


    // Quality Appraisals Input
    _qualityAppraisalsJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _qualityAppraisalsJuniorEmail: { type: String, default: null },

    _qualityAppraisalsSenior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _qualityAppraisalsSeniorEmail: { type: String, default: null },

    qualityAppraisalsJuniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleQualityAppraisals', default: null },
    qualityAppraisalsSeniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleQualityAppraisals', default: null },

    // Linking Studies Input
    _linkingStudiesJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _linkingStudiesJuniorEmail: { type: String, default: null },

    linkingStudiesJuniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleLinkingStudies', default: null },
    
    // Linking Studies Input
    _presentationDetailsJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _presentationDetailsJuniorEmail: { type: String, default: null },

    presentationDetailsJuniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleLinkingStudies', default: null },



    // Final inputs for articles
    eligibilityFiltersFinalInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleEligibilityFilters', default: null },
    qualityAppraisalsFinalInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleQualityAppraisals', default: null },
    linkingStudiesFinalInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleLinkingStudies', default: null },
    presentationDetailsFinalInput: { type: Schema.Types.ObjectId, ref: 'HSEArticlePresentationDetails', default: null },
    

    // Junior and Senior Input Completed
    eligibilityFiltersJuniorCompleted: { type: Boolean, default: false },
    eligibilityFiltersSeniorCompleted: { type: Boolean, default: false },

    qualityAppraisalsJuniorCompleted: { type: Boolean, default: false },
    qualityAppraisalsSeniorCompleted: { type: Boolean, default: false },

    linkingStudiesJuniorCompleted: { type: Boolean, default: false },

    presentationDetailsJuniorCompleted: { type: Boolean, default: false },

    // Set to true if an article needs to be resolved
    eligibilityFiltersResolve: { type: Boolean, default: false },
    qualityAppraisalsResolve: { type: Boolean, default: false },

    // Set to true if Eligibility and Filter state is complete
    eligibilityFiltersFullCompletion: { type: Boolean, default: false },

    // Set to true if Quality Appraisals state is complete
    qualityAppraisalsFullCompletion: { type: Boolean, default: false },

    // Set to true if Linking Studies state is complete
    linkingStudiesFullCompletion: { type: Boolean, default: false },

    // Set to true if Quality Appraisals state is complete
    presentationDetailsFullCompletion: { type: Boolean, default: false },



    // Complicated tag
    complicated: { type: Boolean, default: false },

    // Lost tag
    lostArticle: { type: Boolean, default: false },

    // Translators
    _translatorsFrench: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorsSpanish: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorsPortugese: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorsRussian: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorsArabic: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorsChinese: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorsEnglish: { type: Schema.Types.ObjectId, ref: 'User' },
    
    // Article relation to Batchfile
    _batchFile: { type: Schema.Types.ObjectId, ref: 'HSEArticleBatchFiles' },

    //articleName: { type: String },
/*
    system: { type: String },
    eligible: { type: Boolean, default: false },
    


    // General Article Information
    // refId: { type: String },
    updateDate: { type: Date },
    liveDate: { type: Date },
    referenceType: { type: String },
    documentType: { type: String },
    questionType: { type: String },
    title: { type: String },
    authors: { type: String },
    authorEmail: { type: String },
    publishedDate: { type: Date },
    citationEnglish: { type: [String] },
    citationFrench: { type: [String] },
    keywords: { type: [String] },
    customKeywords: { type: [String] },
    journalEdition: { type: String },
    volume: { type: String },
    issue: { type: String },
    startPage: { type: String },
    endPage: { type: String },
    editors: { type: [String] },
    publishedPlace: { type: String },
    publisher: { type: String }, 
    abstract: { type: String },
    uniqueIdDOI: { type: String },
    amstar: { type: String },
    amstartScore: { type: Number },
    amstartScoreTotal: { type: Number },
    meshTerms: { type: [String] },
    lastYearLitSearch: { type: Date },
    cochrane: { type: Boolean, default: false },
    cochraneIssueDate: { type: Date },
    epocReview: { type: Boolean, default: false },
    general: { type: Boolean, default: false },
    hotDocs: { type: Boolean, default: false },

    // PDF Text
    pdfFileSource: { type: String },
    pdfText: { type: String },

    // HyperLinks
    freeFullTextLink: { type: String },

    // Scientific Abstracts
    pubMed: { type: String },
    cochraneLibrary: { type: String },
    publisher: { type: String },

    // User Friendly Summaries
    // TODO

    // Countries / Included Studies
    countriesReportedDetail: { type: Boolean, default: false },
    documentSpecifiesCountryFocus: { type: Boolean, default: false },
    // TODO
    // Array of dictionary { country: urlLink }

    // Health System Topics
    // TODO
    

    // Canadian Areas
    // TODO


    // Domains
    // TODO



    // LMIC Focus
    targetOfDocument: { type: Boolean, default: false },
    atLeastOneLMICAuthor: { type: Boolean: default: false },
    atLeastOneLMICStudyIncluded: { type: Boolean, default: false },


    // Theme
    optimalAging: { type: Boolean, default: false },
    healthPromotionPrimaryPrevension: { type: Boolean, default: false },

    // Age
    neonates: { type: Boolean, default: false },
    pediatrics: { type: Boolean, default: false },
    adults: { type: Boolean, default: false },
    geriatrics: { type: Boolean, default: false },

    // Information for evidence briefs
    focusOfDocument: { type: String },
    keyFindings: { type: String },


    // Target
    individual: { type: Boolean, default: false },
    community: { type: Boolean, default: false },
    healthSystem: { type: Boolean, default: false },

    // Ontario Priority Areas

    communityBasedCare: { type: Boolean, default: false },
    healthSystemPerformanceSystainability: { type: Boolean, default: false },
    healthyLivingWithFocusOnTobacoControl: { type: Boolean, default: false },
    mentalHealthAddictions: { type: Boolean, default: false },
    nursingResearch: { type: Boolean, default: false },
    primaryCareReform: { type: Boolean, default: false },
    qualityImprovementSafety: { type: Boolean, default: false },
    seniorsCare: { type: Boolean, default: false },
    vulnerableSpecialHealthNeedsPopulations: { type: Boolean, default: false },
    womensHealth: { type: Boolean, default: false },

    // Article Status
    articleStatus: { type: String },
    removalReason: { type: String },
    
*/

    // Steps for Eligibility Filter Stage
    showGeneralArticleInformation: { type: Boolean, default: false },
    stepRelevance: { type: Boolean, default: true },
    stepEligibility: { type: Boolean, default: false },
    stepDocumentType: { type: Boolean, default: false },
    stepIntergovermentalDocument: { type: Boolean, default: false },
    stepOntarioDocument: { type: Boolean, default: false },
    stepCanadianDocument: { type: Boolean, default: false },

});

HSEArticleSchema.plugin(mongoosastic);

mongoose.model('HSEArticles', HSEArticleSchema);