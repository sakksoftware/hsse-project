import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
// import BaseHorizontal from './components/Layout/BaseHorizontal';

// import DashboardV1 from './components/Dashboard/DashboardV1';
import DashboardV2 from './components/Dashboard/DashboardV2';
import DashboardV3 from './components/Dashboard/DashboardV3';

import DashboardMain from './components/Dashboard/DashboardMain';

import Widgets from './components/Widgets/Widgets';

import Buttons from './components/Elements/Buttons';
import Notifications from './components/Elements/Notifications';
import SweetAlert from './components/Elements/SweetAlert';
import BsCarousel from './components/Elements/Carousel';
import Spinner from './components/Elements/Spinner';
import Animation from './components/Elements/Animation';
import DropdownAnimation from './components/Elements/DropdownAnimation';
import Nestable from './components/Elements/Nestable';
import Sortable from './components/Elements/Sortable';
import Cards from './components/Elements/Cards';
import Grid from './components/Elements/Grid';
import GridMasonry from './components/Elements/GridMasonry';
import Typography from './components/Elements/Typography';
import FontIcons from './components/Elements/FontIcons';
import WeatherIcons from './components/Elements/WeatherIcons';
import Colors from './components/Elements/Colors';

import ChartFlot from './components/Charts/ChartFlot';
import ChartRadial from './components/Charts/ChartRadial';
import ChartChartJS from './components/Charts/ChartChartJS';
import ChartMorris from './components/Charts/ChartMorris';
import ChartChartist from './components/Charts/ChartChartist';

import MapsGoogle from './components/Maps/MapsGoogle';
import MapsVector from './components/Maps/MapsVector';

import TableStandard from './components/Tables/TableStandard';
import TableExtended from './components/Tables/TableExtended';
import Datatable from './components/Tables/DatatableView';
import DataGrid from './components/Tables/DataGrid';

import FormStandard from './components/Forms/FormStandard';
import FormExtended from './components/Forms/FormExtended';
import FormValidation from './components/Forms/FormValidation';
import FormWizard from './components/Forms/FormWizard';
import FormUpload from './components/Forms/FormUpload';
import FormCropper from './components/Forms/FormCropper';

import Login from './components/Pages/Login';
import Signout from './components/Pages/Signout';
import Register from './components/Pages/Register';
import RegistrationConfirmed from './components/Pages/RegistrationConfirmed';
import Recover from './components/Pages/Recover';
import ConfirmRegistration from './components/Pages/ConfirmRegistration';
import ConfirmPasswordReset from './components/Pages/ConfirmPasswordReset';
import SuccessfulPasswordReset from './components/Pages/SuccessfulPasswordReset';
import ResetPassword from './components/Pages/ResetPassword';
import Landing from './components/Pages/Landing';
import Lock from './components/Pages/Lock';
import NotFound from './components/Pages/NotFound';
import Error500 from './components/Pages/Error500';
import Maintenance from './components/Pages/Maintenance';

import Mailbox from './components/Extras/Mailbox';
import Timeline from './components/Extras/Timeline';
import Calendar from './components/Extras/Calendar';
import Invoice from './components/Extras/Invoice';
import Search from './components/Extras/Search';
import Todo from './components/Extras/Todo';
import Profile from './components/Extras/Profile';
import BugTracker from './components/Extras/BugTracker';
import ContactDetails from './components/Extras/ContactDetails';
import Contacts from './components/Extras/Contacts';
import Faq from './components/Extras/Faq';
import FileManager from './components/Extras/FileManager';
import Followers from './components/Extras/Followers';
import HelpCenter from './components/Extras/HelpCenter';
import Plans from './components/Extras/Plans';
import ProjectDetails from './components/Extras/ProjectDetails';
import Projects from './components/Extras/Projects';
import Settings from './components/Extras/Settings';
import SocialBoard from './components/Extras/SocialBoard';
import TeamViewer from './components/Extras/TeamViewer';
import VoteLinks from './components/Extras/VoteLinks';

import EcommerceOrder from './components/Ecommerce/EcommerceOrders';
import EcommerceOrderView from './components/Ecommerce/EcommerceOrderView';
import EcommerceProduct from './components/Ecommerce/EcommerceProducts';
import EcommerceProductView from './components/Ecommerce/EcommerceProductView';
import EcommerceCheckout from './components/Ecommerce/EcommerceCheckout';

import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import BlogArticle from './components/Blog/BlogArticles';
import BlogArticleView from './components/Blog/BlogArticleView';

import ForumCategories from './components/Forum/ForumCategories';
import ForumTopic from './components/Forum/ForumTopics';
import ForumDiscussion from './components/Forum/ForumDiscussion';

import HSEAssignedEligibilityFilterArticleInput from './components/HSE/HSEAssignedEligibilityFilterArticleInput';
import HSEAssignedEligibilityFilterResolution from './components/HSE/HSEAssignedEligibilityFilterResolution';
import HSEAssignedEligibilityFiltersArticleQueue from './components/HSE/HSEAssignedEligibilityFiltersArticleQueue';
import HSEAssignedQualityAppraisalsArticleQueue from './components/HSE/HSEAssignedQualityAppraisalsArticleQueue';
import HSEAssignedQualityAppraisalsArticleInput from './components/HSE/HSEAssignedQualityAppraisalsArticleInput';
import HSEAssignedLinkingStudiesArticleInput from './components/HSE/HSEAssignedLinkingStudiesArticleInput';
import HSEAssignedLinkingStudiesArticleQueue from './components/HSE/HSEAssignedLinkingStudiesArticleQueue';

/*
import HSEAssignedPresentationDetailsQueue from './components/HSE/HSEAssignedPresentationDetailsQueue';
import HSEAssignedTranslatingTitlesQueue from './components/HSE/HSEAssignedTranslatingTitlesQueue';
import HSEAssignedTrackingPrioritizingQueue from './components/HSE/HSEAssignedTrackingPrioritizingQueue';
*/

import AddHSEArticle from './components/HSE/AddHSEArticle';
import HSEArticleEdit from './components/HSE/HSEArticleEdit';
import HSEBatchUpload from './components/HSE/HSEBatchUpload';
import HSEPendingEligibilityFiltersArticleQueue from './components/HSE/HSEPendingEligibilityFiltersArticleQueue';
import HSEPendingEligibilityFiltersBatchfileQueue from './components/HSE/HSEPendingEligibilityFiltersBatchfileQueue';
import HSEPendingQualityAppraisalsArticleQueue from './components/HSE/HSEPendingQualityAppraisalsArticleQueue';
import HSEPendingLinkingStudiesArticleQueue from './components/HSE/HSEPendingLinkingStudiesArticleQueue';

/*
import HSEPendingPresentationDetailsQueue from './components/HSE/HSEPendingPresentationDetailsQueue';
import HSEPendingTranslatingTitlesQueue from './components/HSE/HSEPendingTranslatingTitlesQueue';
import HSEPendingTrackingPrioritizingQueue from './components/HSE/HSEPendingTrackingPrioritizingQueue';
*/

import SSEAssignedEligibilityFilterResolution from './components/SSE/SSEAssignedEligibilityFilterResolution'
import SSEAssignedEligibilityFilterArticleInput from './components/SSE/SSEAssignedEligibilityFilterArticleInput';
import SSEAssignedEligibilityFiltersArticleQueue from './components/SSE/SSEAssignedEligibilityFiltersArticleQueue';

import SSEAssignedQualityAppraisalsArticleQueue from './components/SSE/SSEAssignedQualityAppraisalsArticleQueue';
import SSEAssignedQualityAppraisalsArticleInput from './components/SSE/SSEAssignedQualityAppraisalsArticleInput';

import SSEAssignedLinkingStudiesArticleInput from './components/SSE/SSEAssignedLinkingStudiesArticleInput';
import SSEAssignedLinkingStudiesArticleQueue from './components/SSE/SSEAssignedLinkingStudiesArticleQueue';

/*
import SSEAssignedPresentationDetailsQueue from './components/SSE/SSEAssignedPresentationDetailsQueue';
import SSEAssignedTranslatingTitlesQueue from './components/SSE/SSEAssignedTranslatingTitlesQueue';
import SSEAssignedTrackingPrioritizingQueue from './components/SSE/SSEAssignedTrackingPrioritizingQueue';
*/
import AddSSEArticle from './components/SSE/AddSSEArticle';
import SSEArticleEdit from './components/SSE/SSEArticleEdit';
import SSEBatchUpload from './components/SSE/SSEBatchUpload';
import SSEPendingEligibilityFiltersArticleQueue from './components/SSE/SSEPendingEligibilityFiltersArticleQueue';
import SSEPendingEligibilityFiltersBatchfileQueue from './components/SSE/SSEPendingEligibilityFiltersBatchfileQueue';
import SSEPendingQualityAppraisalsArticleQueue from './components/SSE/SSEPendingQualityAppraisalsArticleQueue';
import SSEPendingLinkingStudiesArticleQueue from './components/SSE/SSEPendingLinkingStudiesArticleQueue';

/*
import SSEPendingPresentationDetailsQueue from './components/SSE/SSEPendingPresentationDetailsQueue';
import SSEPendingTranslatingTitlesQueue from './components/SSE/SSEPendingTranslatingTitlesQueue';
import SSEPendingTrackingPrioritizingQueue from './components/SSE/SSEPendingTrackingPrioritizingQueue';
*/

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/',
    '/login',
    '/signout',
    '/register',
    '/recover',
    '/confirmregistration',
    '/registrationconfirmed',
    '/confirmpasswordreset',
    '/resetpassword/:token',
    '/successfulpasswordreset',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance'
];
/*
stringArrayContainers  = (array, str) => {
    contains = (el) => {
        return (el.indexOf(str) !== -1) ? true : false;
    }
    return array.some(contains);
}
*/
const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };
    
    //console.log( listofPages.indexOf(location.pathname) );

    const stringArrayContainers  = (array, str) => {
        const contains = (el) => {
            return (el.indexOf(str) !== -1) ? true : false;
        }
        return array.some(contains);
    }

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInUp'
    //      'rag-fadeInDown'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'
    //      'rag-fadeInUpBig'
    //      'rag-fadeInDownBig'
    //      'rag-fadeInRightBig'
    //      'rag-fadeInLeftBig'
    //      'rag-zoomBackDown'
    const animationName = 'rag-fadeIn'

    //if(listofPages.indexOf(location.pathname) > -1) {
    if(stringArrayContainers(listofPages, currentKey)) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Switch location={location}>
                    <Route path="/" exact component={Landing} />
                    <Route path="/login" component={Login}/>
                    <Route path="/registrationconfirmed" component={RegistrationConfirmed} />
                    <Route path="/register" component={Register}/>
                    <Route path="/signout" component={Signout}/>
                    <Route path="/recover" component={Recover}/>
                    <Route path="/confirmregistration" component={ConfirmRegistration}/>
                    <Route path="/confirmpasswordreset" component={ConfirmPasswordReset}/>
                    <Route path="/resetpassword/:token" component={ResetPassword}/>
                    <Route path="/successfulpasswordreset" component={SuccessfulPasswordReset}/>
                    <Route path="/lock" component={Lock}/>
                    <Route path="/notfound" component={NotFound}/>
                    <Route path="/error500" component={Error500}/>
                    <Route path="/maintenance" component={Maintenance}/>
                </Switch>
            </BasePage>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Switch location={location}>
                            {/*Dashboard*/}
                            
                            <Route path="/dashboardv2" component={DashboardV2}/>
                            <Route path="/dashboardv3" component={DashboardV3}/>

                            <Route path="/dashboardmain" component={DashboardMain}/>

                            {/*Widgets*/}
                            <Route path="/widgets" component={Widgets}/>

                            {/*Elements*/}
                            <Route path="/buttons" component={Buttons}/>
                            <Route path="/notifications" component={Notifications}/>
                            <Route path="/sweetalert" component={SweetAlert}/>
                            <Route path="/carousel" component={BsCarousel}/>
                            <Route path="/spinners" component={Spinner}/>
                            <Route path="/animations" component={Animation}/>
                            <Route path="/dropdown" component={DropdownAnimation}/>
                            <Route path="/nestable" component={Nestable}/>
                            <Route path="/sortable" component={Sortable}/>
                            <Route path="/cards" component={Cards}/>
                            <Route path="/grid" component={Grid}/>
                            <Route path="/grid-masonry" component={GridMasonry}/>
                            <Route path="/typography" component={Typography}/>
                            <Route path="/icons-font" component={FontIcons}/>
                            <Route path="/icons-weather" component={WeatherIcons}/>
                            <Route path="/colors" component={Colors}/>

                            {/*Forms*/}
                            <Route path="/form-standard" component={FormStandard}/>
                            <Route path="/form-extended" component={FormExtended}/>
                            <Route path="/form-validation" component={FormValidation}/>
                            <Route path="/form-wizard" component={FormWizard}/>
                            <Route path="/form-upload" component={FormUpload}/>
                            <Route path="/form-cropper" component={FormCropper}/>
                            
                            {/*Charts*/}
                            <Route path="/chart-flot" component={ChartFlot}/>
                            <Route path="/chart-radial" component={ChartRadial}/>
                            <Route path="/chart-chartjs" component={ChartChartJS}/>
                            <Route path="/chart-morris" component={ChartMorris}/>
                            <Route path="/chart-chartist" component={ChartChartist}/>
                            
                            {/*Table*/}
                            <Route path="/table-standard" component={TableStandard}/>
                            <Route path="/table-extended" component={TableExtended}/>
                            <Route path="/table-datatable" component={Datatable}/>
                            <Route path="/table-datagrid" component={DataGrid}/>

                            {/*Maps*/}
                            <Route path="/map-google" component={MapsGoogle}/>
                            <Route path="/map-vector" component={MapsVector}/>

                            {/*Extras*/}
                            <Route path="/mailbox" component={Mailbox}/>
                            <Route path="/timeline" component={Timeline}/>
                            <Route path="/calendar" component={Calendar}/>
                            <Route path="/invoice" component={Invoice}/>
                            <Route path="/search" component={Search}/>
                            <Route path="/todo" component={Todo}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/ecommerce-orders" component={EcommerceOrder}/>
                            <Route path="/ecommerce-order-view" component={EcommerceOrderView}/>
                            <Route path="/ecommerce-products" component={EcommerceProduct}/>
                            <Route path="/ecommerce-product-view" component={EcommerceProductView}/>
                            <Route path="/ecommerce-checkout" component={EcommerceCheckout}/>
                            <Route path="/blog-list" component={BlogList}/>
                            <Route path="/blog-post" component={BlogPost}/>
                            <Route path="/blog-articles" component={BlogArticle}/>
                            <Route path="/blog-article-view" component={BlogArticleView}/>
                            <Route path="/forum-categories" component={ForumCategories}/>
                            <Route path="/forum-topics" component={ForumTopic}/>
                            <Route path="/forum-discussion" component={ForumDiscussion}/>
                            <Route path="/bug-tracker" component={BugTracker}/>
                            <Route path="/contact-details" component={ContactDetails}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/faq" component={Faq}/>
                            <Route path="/file-manager" component={FileManager}/>
                            <Route path="/followers" component={Followers}/>
                            <Route path="/help-center" component={HelpCenter}/>
                            <Route path="/plans" component={Plans}/>
                            <Route path="/project-details" component={ProjectDetails}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/social-board" component={SocialBoard}/>
                            <Route path="/team-viewer" component={TeamViewer}/>
                            <Route path="/vote-links" component={VoteLinks}/>

                            {/* */}
                            <Route path="/hse/editarticle/:articleId" component={HSEArticleEdit} />

                            {/* Assigned HSE Queue */}
                            <Route path="/hse/assignedeligibilityfiltersarticleinput/:articleId" component={HSEAssignedEligibilityFilterArticleInput} />
                            <Route path="/hse/assignedeligibilityfiltersarticleresolution/:articleId" component={HSEAssignedEligibilityFilterResolution} />
                            <Route path="/hse/assignedeligibilityfiltersarticlequeue" component={HSEAssignedEligibilityFiltersArticleQueue} />

                            <Route path="/hse/assignedqualityappraisalsarticlequeue" component={HSEAssignedQualityAppraisalsArticleQueue} />
                            <Route path="/hse/assignedqualityappraisalsarticleinput/:articleId" component={HSEAssignedQualityAppraisalsArticleInput} />

                            <Route path="/hse/assignedlinkingstudiesarticlequeue" component={HSEAssignedLinkingStudiesArticleQueue} />
                            <Route path="/hse/assignedlinkingstudiesarticleinput/:articleId" component={HSEAssignedLinkingStudiesArticleInput} />
                            
                            {/*
                            <Route path="/hse/assignedpresentationdetailsqueue" component={HSEAssignedPresentationDetailsQueue} />
                            <Route path="/hse/assignedtranslatingtitlesqueue" component={HSEAssignedTranslatingTitlesQueue} />
                            <Route path="/hse/assignedtrackingprioritizingqueue" component={HSEAssignedTrackingPrioritizingQueue} />
                            */}

                            {/* Pending HSE Queue */}
                            <Route path="/hse/addarticle" component={AddHSEArticle} />
                            <Route path="/hse/batchfileupload" component={HSEBatchUpload} />
                            <Route path="/hse/pendingeligibilityfiltersarticlequeue" component={HSEPendingEligibilityFiltersArticleQueue} />
                            <Route path="/hse/pendingeligibilityfiltersbatchfilequeue" component={HSEPendingEligibilityFiltersBatchfileQueue} />
                            <Route path="/hse/pendingqualityappraisalsarticlequeue" component={HSEPendingQualityAppraisalsArticleQueue} />
                            <Route path="/hse/pendinglinkingstudiesarticlequeue" component={HSEPendingLinkingStudiesArticleQueue} />

                            {/*
                            <Route path="/hse/pendingpresentationdetailsqueue" component={HSEPendingPresentationDetailsQueue} />
                            <Route path="/hse/pendingtranslatingtitlesqueue" component={HSEPendingTranslatingTitlesQueue} />
                            <Route path="/hse/pendingtrackingprioritizingqueue" component={HSEPendingTrackingPrioritizingQueue} />
                            */}
                            {/* HSE Forms */}

                            <Route path="/sse/editarticle/:articleId" component={SSEArticleEdit} />

                            {/* Assigned SSE Queue */}
                            <Route path="/sse/assignedeligibilityfiltersarticleinput/:articleId" component={SSEAssignedEligibilityFilterArticleInput} />
                            <Route path="/sse/assignedeligibilityfiltersarticleresolution/:articleId" component={SSEAssignedEligibilityFilterResolution} />
                            <Route path="/sse/assignedeligibilityfiltersarticlequeue" component={SSEAssignedEligibilityFiltersArticleQueue} />
                            
                            <Route path="/sse/assignedqualityappraisalsarticlequeue" component={SSEAssignedQualityAppraisalsArticleQueue} />
                            <Route path="/sse/assignedqualityappraisalsarticleinput/:articleId" component={SSEAssignedQualityAppraisalsArticleInput} />
                            
                            <Route path="/sse/assignedlinkingstudiesarticleinput/:articleId" component={SSEAssignedLinkingStudiesArticleInput} />
                            <Route path="/sse/assignedlinkingstudiesarticlequeue" component={SSEAssignedLinkingStudiesArticleQueue} />
                            
                            {/*
                            <Route path="/sse/assignedpresentationdetailsqueue" component={SSEAssignedPresentationDetailsQueue} />
                            <Route path="/sse/assignedtranslatingtitlesqueue" component={SSEAssignedTranslatingTitlesQueue} />
                            <Route path="/sse/assignedtrackingprioritizingqueue" component={SSEAssignedTrackingPrioritizingQueue} />
                            */}

                            {/* Pending SSE Queue */}
                            <Route path="/sse/addarticle" component={AddSSEArticle} />
                            <Route path="/sse/batchfileupload" component={SSEBatchUpload} />
                            <Route path="/sse/pendingeligibilityfiltersarticlequeue" component={SSEPendingEligibilityFiltersArticleQueue} />
                            <Route path="/sse/pendingeligibilityfiltersbatchfilequeue" component={SSEPendingEligibilityFiltersBatchfileQueue} />
                            <Route path="/sse/pendingqualityappraisalsarticlequeue" component={SSEPendingQualityAppraisalsArticleQueue} />
                            <Route path="/sse/pendinglinkingstudiesarticlequeue" component={SSEPendingLinkingStudiesArticleQueue} />

                            {/*
                            <Route path="/sse/pendingpresentationdetailsqueue" component={SSEPendingPresentationDetailsQueue} />
                            <Route path="/sse/pendingtranslatingtitlesqueue" component={SSEPendingTranslatingTitlesQueue} />
                            <Route path="/sse/pendingtrackingprioritizingqueue" component={SSEPendingTrackingPrioritizingQueue} />
                            */}

                            <Redirect to="/notfound" />

                        </Switch>
                    </div>
                </CSSTransition>
              </TransitionGroup>
            </Base>
        )
    }
}

export default withRouter(Routes);