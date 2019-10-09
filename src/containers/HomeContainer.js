import React, { Component } from 'react';
import { Carousel, Row, Col, Button } from 'antd';
import home from '../../src/phone-clipart-laptop-18.jpg';
import reclamos from '../../src/home-reclamos.png';
import seguimiento from '../../src/seguimiento.png';



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
                    <Col span={10} style={{paddingTop:'5vh', paddingRight:'5vh'}}>
                        <img src={home} alt="noimage" className="logo-home-page" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'10vh'}}>
                        <h1><b><i>Total Portabilidad</i></b></h1>
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
                    <Col span={10} style={{paddingTop:'5vh', paddingLeft:'10vh'}}>
                        <img src={reclamos} alt="noimage" className="logo-home-page" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'10vh'}}>
                        <h1><b><i>Consultas o problemas con nuestro servicios?</i></b></h1>
                        <p>Cargue su consulta desde nuestro portal.</p>
                        <p>Sera atendido por nuestros mejores profesionales.</p>
                        <Button icon="plus-circle" style={{marginTop:20}} type='primary'
                            onClick={()=>this.props.onSelect({key:'carga'})}>
                            Cargar Reclamo
                        </Button>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'10vh'}}>
                        <h1><b><i>Consultas o problemas con nuestro servicio?</i></b></h1>
                        <p>Realice sus consultas, revise sus servicios, cargue sus reclamos
                            Desde cualquier dispositivo</p>
                        <ul>
                            <li>Computadora</li>
                            <li>Tablet</li>
                            <li>Smartphone</li>
                        </ul>
                    </Col>
                    <Col span={10} style={{paddingTop:'5vh', paddingRight:'5vh'}}>
                        <img src={seguimiento} alt="noimage" className="logo-home-page" />
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={10} style={{paddingTop:'5vh', paddingRight:'5vh'}}>
                        <img src={home} alt="noimage" className="logo-home-page" />
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