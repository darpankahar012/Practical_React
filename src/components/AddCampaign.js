import React, { Component } from 'react'
import { Button, Modal, FormGroup, ModalBody, Form, Input, Label } from "reactstrap";

import { connect } from "react-redux";

let token = "";

const mapStateToProps = (state) => {
    token = state.token;
};


export class AddCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            base_price: "",
            bid_price: "",
            selectProduct: "",
            selectLeadType: "",
            selectQualityType: "",
            product: [],
            lead_type: [],
            quality_type: [],
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
            // "lead_type": parseInt(this.state.selectLeadType),
            "lead_type": this.state.selectLeadType,
            "quality_type": this.state.selectQualityType,
            "base_price": this.state.base_price,
            "bid_price": this.state.bid_price,
        }
        fetch("http://staging.webmynehost.com/consumercoverage/api/addCampaign", {
            method: "POST",
            headers: {
                Authkey: "Lopiuy4vQ74#1jGNr",
                "Content-Type": "application/json",
                'session': `${token}`,
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    base_price: "",
                    bid_price: "",
                    selectProduct: "",
                    selectLeadType: "",
                    selectQualityType: "",
                })
                this.closeModal(true)
            });
    }

    closeModal = (data) => {
        this.props.closeModal(data)
    };

    render() {
        const { base_price, bid_price, selectProduct, selectLeadType, selectQualityType } = this.state
        return (
            <>
                <Modal
                    isOpen={this.props.isOpenModal}
                    toggle={() => this.closeModal(false)}
                >
                    <ModalBody>
                        <Form className="login-form">
                            <h2 className="text-center">Add Campaign</h2>
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
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Base Price "}</Label>
                                <Input
                                    name="base_price"
                                    value={this.state.base_price}
                                    type="number"
                                    onChange={(e) =>
                                        this.handleChange(e)
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="mb-1">{"Bid Price "}</Label>
                                <Input
                                    name="bid_price"
                                    type="number"
                                    value={this.state.bid_price}
                                    onChange={(e) =>
                                        this.handleChange(e)
                                    }
                                />
                            </FormGroup>
                            <div className="text-center">
                                <Button
                                    className="btn-lg btn-dark btn-block mt-3 "
                                    type="button"
                                    disabled={!base_price || !bid_price || !selectProduct || !selectLeadType || !selectQualityType ? true : false}
                                    onClick={() => this.addCampaign()}
                                >
                                    {"Add Campaign"}
                                </Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default connect(mapStateToProps)(AddCampaign);
