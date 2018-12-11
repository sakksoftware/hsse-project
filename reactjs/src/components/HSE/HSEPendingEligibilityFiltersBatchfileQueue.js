import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


import * as actions from '../../actions';

import Datatable from '../Tables/Datatable';

const dtOptions = {
    'paging': true, // Table pagination
    'ordering': true, // Column ordering
    'info': true, // Bottom left status text
    responsive: true,
    // Text translation options
    // Note the required keywords between underscores (e.g _MENU_)
    oLanguage: {
        sSearch: '<em class="fa fa-search"></em>',
        sLengthMenu: '_MENU_ records per page',
        info: 'Showing page _PAGE_ of _PAGES_',
        zeroRecords: 'Nothing found - sorry',
        infoEmpty: 'No records available',
        infoFiltered: '(filtered from _MAX_ total records)',
        oPaginate: {
            sNext: '<em class="fa fa-caret-right"></em>',
            sPrevious: '<em class="fa fa-caret-left"></em>'
        }
    }
}

class HSEPendingEligibilityFiltersBatchfileQueue extends Component {

    componentDidMount() {
        this.props.listHSEPendingEligibilityFiltersBatchfilesQueue();
    }

    renderPriority(priority) {
        
        switch (priority) {
            case 'LOW':
                return <td className="text-center"><span className="badge badge-success">{ priority }</span></td>
            case 'MODERATE':
                return <td className="text-center"><span className="badge badge-warning">{ priority }</span></td>
            case 'HIGH':
                return <td className="text-center"><span className="badge badge-danger">{ priority }</span></td>
            default:
                return <td className="text-center"><span className="badge badge-success">LOW</span></td>
        }

    }

    renderArticles() {
        
        if(this.props.pendingArticles != null ) {
            const rows = Object.entries(this.props.pendingBatchfiles).map(batchfiles => {
                return (
                    <tr key='1'>
                        {/*
                        <td className="text-center">
                            <span className="badge badge-success">{ batchfiles[1].priority }</span>
                        </td>
                        */}
                        one
                        <td>
                            two
                        </td>
                        <td>
                            three
                        </td>
                        <td>
                            <a className="mr-1 badge badge-primary" href="">Four</a>
                        </td>
                        <td><a className="mr-1 badge badge-primary" href="">Five</a></td>
                        <td>Six</td>
                        <td>Seven</td>
                        
                            
                        <td className="text-right">
                            <button type="button" className="btn btn-sm btn-secondary">
                                <em className="fas fa-pencil-alt"></em>
                            </button>
                            <button type="button" className="btn btn-sm btn-danger">
                                <em className="fas fa-trash-alt"></em>
                            </button>
                            <button type="button" className="btn btn-sm btn-success">
                                <em className="fa fa-check"></em>
                            </button>
                        </td>
                        
                    </tr>
                )
            });
        // <a className="mr-1 badge badge-success" href="">{ batchfiles[1].language }</a>
            return (
                <Datatable options={dtOptions}>
                    <table className="table table-striped my-4 w-100">
                        <thead>
                            <tr>
                                <th data-priority="1">Priority</th>
                                <th>Source</th>
                                <th>Date</th>
                                <th>Other Filterer</th>
                                <th>Batchfile Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th style={{width:"130px"}} className="text-right" data-priority="2">Language</th>
                            </tr>
                        </thead>
                        <tbody>
                            { rows }
                        </tbody>
                    </table>
                </Datatable>
            );
        }    
    };

    render() {
        console.log(this.props.pendingArticles);
        return (
            <ContentWrapper>
                <div className="content-heading">
                        <div>Assessing Eligibility and Assigning Filters Batchfiles
                            <small>Health Systems Evidence - Main Queue</small>
                        </div>
                        </div>
                <Card className="card-default">
                    <CardHeader>List of pending Batchfiles</CardHeader>
                    <CardBody>
                        { this.renderArticles() }
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

function mapStateToProps({ hsePendingEligibilityFiltersBatchfileQueue }) {
    return { 
        errorMessage: hsePendingEligibilityFiltersBatchfileQueue.hsePendingEligibilityFiltersBatchfileErrorMessage,
        pendingBatchfiles: hsePendingEligibilityFiltersBatchfileQueue.hsePendingEligibilityFiltersBatchfiles 
    }
}

export default connect(mapStateToProps, actions)(HSEPendingEligibilityFiltersBatchfileQueue);


