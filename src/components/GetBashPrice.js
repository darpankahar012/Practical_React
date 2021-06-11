import React, { Component } from 'react'
import { Button, Modal, FormGroup, ModalBody, Form, Input, Label } from "reactstrap";

import { bindActionCreators } from "redux";
import { ActCreators } from "../redux/bindActionCreator";
import { connect } from "react-redux";

let token = "";

const mapStateToProps = (state) => {
    token = state.token;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActCreators, dispatch);
};


export class GetBashPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            base_price: "",
            selectProduct: "",
            selectLeadType: "",
            selectQualityType: "",
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    addCampaign = async () => {

        let data = {
            "product": this.state.selectProduct,
            "lead_type": parseInt(this.state.selectLeadType),
            "quality_type": this.state.selectQualityType,
        }
        fetch("http://staging.webmynehost.com/consumercoverage/api/checkcampaignstatus", {
            method: "POST",
            headers: {
                Authkey: "Lopiuy4vQ74#1jGNr",
                "Content-Type": "application/json",
                'session': `${token}`,
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(data => {
                console.log("🚀 ~ file: GetBashPrice.js ~ line 61 ~ GetBashPrice ~ addCampaign= ~ data", data.responsedata.base_price)
                this.setState({
                    base_price: data.responsedata.base_price
                })
            });
    }
    closeModal = () => {
        this.setState({
            base_price: ""
        })
        this.props.closeModal()
    };
    clearData = () => {
        this.setState({
            base_price: "",
            selectProduct: "",
            selectLeadType: "",
            selectQualityType: "",
        })
    };

    render() {
        const { selectProduct, selectLeadType, selectQualityType, base_price } = this.state
        return (
            <>
                <Modal
                    isOpen={this.props.isOpenModal}
                    toggle={this.closeModal}
                >
                    <ModalBody>
                        <Form className="login-form">
                            <h2 className="text-center">Get Base Price</h2>
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Product"}</Label>
                                <Input
                                    type="select"
                                    name="selectProduct"
                                    value={this.state.selectProduct}
                                    onChange={(e) =>
                                        this.handleChange(e)
                                    }
                                >
                                    {this.props.data.product_results.map((productList) => {
                                        return (
                                            <option >{productList.name}</option>
                                        )
                                    })}
                                </Input>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Lead Id"}</Label>
                                <Input
                                    type="select"
                                    name="selectLeadType"
                                    value={this.state.selectLeadType}
                                    onChange={(e) =>
                                        this.handleChange(e)
                                    }
                                >
                                    {this.props.data.lead_results.map((lead, index) => {
                                        return (
                                            <option >{lead.lead_type_id}</option>
                                        )
                                    })}
                                </Input>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Quality ID "}</Label>
                                <Input
                                    type="select"
                                    name="selectQualityType"
                                    value={this.state.selectQualityType}
                                    onChange={(e) =>
                                        this.handleChange(e)
                                    }
                                >
                                    {this.props.data.quality_results.map((quality, index) => {
                                        return (
                                            <option >{quality.quality_id}</option>
                                        )
                                    })}
                                </Input>
                            </FormGroup>
                            {base_price === "" ? (
                                <div className="text-center">
                                    <Button
                                        className="btn-lg btn-dark btn-block mt-3 "
                                        type="button"
                                        disabled={!selectProduct || !selectLeadType || !selectQualityType ? true : false}
                                        onClick={() => this.addCampaign()}
                                    >
                                        {"Get Base Price"}
                                    </Button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <h3 className="text-center">Base Price Value : {base_price}</h3>

                                    <Button
                                        className="btn-lg btn-dark btn-block mt-3 "
                                        type="button"
                                        onClick={() => this.clearData()}
                                    >
                                        {"Clear"}
                                    </Button>
                                </div>
                            )}
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetBashPrice);
