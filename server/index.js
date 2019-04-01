const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

require('./models/User');

require('./models/hse/HSEArticleBatchFile');
require('./models/hse/HSEArticle');
require('./models/hse/HSEArticleEligibilityFilter');
require('./models/hse/HSEArticleQualityAppraisal');

require('./models/sse/SSEArticleBatchFile');
require('./models/sse/SSEArticle');
require('./models/sse/SSEArticleEligibilityFilter');
require('./models/sse/SSEArticleQualityAppraisal');

require('./models/Stage');

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true },
    
    err => {
        if (err) throw err;
        console.log(`Successfully connected to database.`);
    }
);
mongoose.set('useCreateIndex', true);

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*', limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Auth Routes
require('./routes/authRoutes')(app);

// Common Routes
require('./routes/stageRoutes')(app);
require('./routes/uploadRoutes')(app);

// SSE Routes
require('./routes/sse/SSEArticleRoutes')(app);
require('./routes/sse/SSEArticleBatchfileRoutes')(app);
require('./routes/sse/SSEPendingEligibilityFiltersArticleQueueRoutes')(app);
require('./routes/sse/SSEPendingEligibilityFiltersBatchfileQueueRoutes')(app);
require('./routes/sse/SSEAssignedEligibilityFiltersArticleQueueRoutes')(app);

require('./routes/sse/SSEPendingQualityAppraisalsArticleQueueRoutes')(app);
require('./routes/sse/SSEAssignedQualityAppraisalsArticleQueueRoutes')(app);
/*
require('./routes/sse/SSEPendingLinkingStudiesQueueRoutes')(app);
require('./routes/sse/SSEPendingPresentationDetailsQueueRoutes')(app);

*/

// HSE Routes
require('./routes/hse/HSEArticleRoutes')(app);
require('./routes/hse/HSEArticleBatchfileRoutes')(app);
require('./routes/hse/HSEPendingEligibilityFiltersArticleQueueRoutes')(app);
require('./routes/hse/HSEPendingEligibilityFiltersBatchfileQueueRoutes')(app);
require('./routes/hse/HSEAssignedEligibilityFiltersArticleQueueRoutes')(app);

require('./routes/hse/HSEPendingQualityAppraisalsArticleQueueRoutes')(app);
require('./routes/hse/HSEAssignedQualityAppraisalsArticleQueueRoutes')(app);

/*
require('./routes/hse/HSEPendingLinkingStudiesQueueRoutes')(app);
require('./routes/hse/HSEPendingPresentationDetailsQueueRoutes')(app);

*/
app.get('/', (req, res) => {
    res.send({ message: 'Welcome McMaster HSSE API!'});
}); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
