import React, { Component } from 'react'

import {
    CardHeader,
    CardBody,
    Card,
    Form,
    Row,
    Col,
    Container,
} from "reactstrap";

export class CampaignList extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="col">
                        <Card>
                            <CardHeader className="bg-transparent">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h3 className=" mb-0" style={{ cursor: "pointer" }} >{"Campaign List"}</h3>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody >
                                <Form >
                                    <Row className="p-3 title d-flex align-items-center bg-white" >
                                        {this.props.list.map((listData) => {
                                            return (
                                                <>
                                                    <Col className="order-xl-2 mt-2 mb-2" xl="3" >
                                                        <Card className="order-card shadow">
                                                            <CardBody>
                                                                <div>
                                                                    <small>
                                                                        {"Product Name : "}{listData.product}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    <small>
                                                                        {"Lead Type : "}{listData.lead_type_name}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    <small>
                                                                        {"Min Price : "}{listData.min_price_asked}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    <small>
                                                                        {"Status : "}{listData.status}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    <small>
                                                                        {"Buyer LeadId : "}{listData.buyer_lead_type_id}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    <small>
                                                                        {"Base Price : "}{listData.base_price}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    <small>
                                                                        {"Lead Quality Type : "}{listData.Sys_lead_quality_type}
                                                                    </small>
                                                                </div>

                                                            </CardBody>
                                                        </Card>
                                                    </Col>
                                                </>
                                            )
                                        })}
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default CampaignList;