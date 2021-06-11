import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios'
// import instance from "./axios";


import { bindActionCreators } from "redux";
import { ActCreators } from "../redux/bindActionCreator";
import { connect } from "react-redux";

import CampaignList from './CampaignList'
import AddCampaign from './AddCampaign'
import GetBashPrice from './GetBashPrice'

// let userData = {};
let token = "";

const mapStateToProps = (state) => {
    // userData = state.userData;
    token = state.token;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActCreators, dispatch);
};

export class dashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            listData: [],
            LeadandQuality: [],
            openAddCampaignModal: false,
            openGetBashPriceModal: false,
            Modal: "",
        }
    }

    getCapaignList = async () => {

        this.setState({
            loader: true,
        })
        // const response = await instance.post("/getAllCampaignlist", {
        //     headers: {
        //         Authkey: "Lopiuy4vQ74#1jGNr",
        //         "Content-Type": "application/json",
        //         'session': `${token}`,
        //     },
        // }).catch((error) => {
        //     // let errorMessage = error.response.data.error.message;
        //     // errorToaster(errorMessage);
        // });
        // if (response && response.data) {
        // }

        fetch("http://staging.webmynehost.com/consumercoverage/api/getAllCampaignlist", {
            method: "POST",
            headers: {
                Authkey: "Lopiuy4vQ74#1jGNr",
                "Content-Type": "application/json",
                'session': `${token}`,
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    listData: data.responsedata.results,
                    loader: false,
                })
            });

    }

    componentDidMount() {
        this.getCapaignList()
    }

    componentDidUpdate(prevState) {
        if (prevState.reload === !this.state.reload) {
            this.getCapaignList()
        }
    }

    openAddCampaign = () => {
        fetch("http://staging.webmynehost.com/consumercoverage/api/getLeadtypeandQuality", {
            method: "POST",
            headers: {
                Authkey: "Lopiuy4vQ74#1jGNr",
                "Content-Type": "application/json",
                'session': `${token}`,
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    LeadandQuality: data.responsedata,
                }, () => {
                    if (this.state.Modal === "Add") {
                        this.setState({
                            openAddCampaignModal: true
                        })
                    } else {
                        this.setState({
                            openGetBashPriceModal: true
                        })
                    }
                })
            });
    }

    closeAddCampaign = (data) => {
        if (data === true) {
            this.setState({
                reload: !this.state.reload
            })
        } else {
            this.setState({
                openAddCampaignModal: false,
                Modal: "",
            })
        }
    }
    closeGetBashPrice = () => {
        this.setState({
            openGetBashPriceModal: false
        })
    }

    render() {
        const { loader, listData, openAddCampaignModal, openGetBashPriceModal, LeadandQuality } = this.state
        return (
            <>
                {token !== "" ? (
                    <>
                        <div >
                            <ul className="nav nav-tabs bg-primary">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#FFA500' }} >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#ffffff' }} onClick={() => {
                                        this.setState({
                                            Modal: "Add"
                                        }); this.openAddCampaign()
                                    }} >Add Campaign</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#ffffff' }} onClick={() => { this.openAddCampaign() }} >Get Bash Price</Link>
                                </li>
                            </ul>
                        </div >
                        {loader !== true && <CampaignList list={listData} />}
                        {openAddCampaignModal === true && <AddCampaign isOpenModal={openAddCampaignModal} data={LeadandQuality} closeModal={this.closeAddCampaign} />}
                        {openGetBashPriceModal === true && <GetBashPrice isOpenModal={openGetBashPriceModal} data={LeadandQuality} closeModal={this.closeGetBashPrice} />}
                    </>
                ) : (
                    this.redirecToLogin()
                )}
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dashBoard);