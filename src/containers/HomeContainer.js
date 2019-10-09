import React, { Component } from 'react';
import { Carousel, Row, Col } from 'antd';
import page1 from '../../src/phone-clipart-laptop-18.jpg';


class HomeContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <Carousel autoplay effect="fade" style={{ marginTop: 30 }}>
                <Row gutter={8}>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'10vh'}}>
                        <h1>Total Portabilidad</h1>
                        <p>Realice sus consultas, revise sus servicios, cargue sus reclamos
                Desde cualquier dispositivo</p>
                        <ul>
                            <li>Computadora</li>
                            <li>Tablet</li>
                            <li>Smartphone</li>
                        </ul>
                    </Col>
                    <Col span={10} style={{paddingTop:'5vh', paddingRight:'5vh'}}>
                        <img src={page1} alt="noimage" className="logo-home-page" />
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={10} style={{paddingTop:'5vh', paddingRight:'5vh'}}>
                        <img src={page1} alt="noimage" className="logo-home-page" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'10vh'}}>
                        <h1>Total Portabilidad</h1>
                        <p>Realice sus consultas, revise sus servicios, cargue sus reclamos
                Desde cualquier dispositivo</p>
                        <ul>
                            <li>Computadora</li>
                            <li>Tablet</li>
                            <li>Smartphone</li>
                        </ul>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'10vh'}}>
                        <h1>Total Portabilidad</h1>
                        <p>Realice sus consultas, revise sus servicios, cargue sus reclamos
                Desde cualquier dispositivo</p>
                        <ul>
                            <li>Computadora</li>
                            <li>Tablet</li>
                            <li>Smartphone</li>
                        </ul>
                    </Col>
                    <Col span={10} style={{paddingTop:'5vh', paddingRight:'5vh'}}>
                        <img src={page1} alt="noimage" className="logo-home-page" />
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={10} style={{paddingTop:'5vh', paddingRight:'5vh'}}>
                        <img src={page1} alt="noimage" className="logo-home-page" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'10vh'}}>
                        <h1>Total Portabilidad</h1>
                        <p>Realice sus consultas, revise sus servicios, cargue sus reclamos
                Desde cualquier dispositivo</p>
                        <ul>
                            <li>Computadora</li>
                            <li>Tablet</li>
                            <li>Smartphone</li>
                        </ul>
                    </Col>
                </Row>
            </Carousel>
        );
    }
}

export default HomeContainer;