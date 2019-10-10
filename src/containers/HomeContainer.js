import React, { Component } from 'react';
import { Carousel, Row, Col, Button } from 'antd';
import home from '../../src/home-page.png';
import reclamos from '../../src/home-reclamos.png';
import seguimiento from '../../src/seguimiento.png';
import profile from '../../src/profile-home-image.png';
import question from '../../src/question-home.png';

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <Carousel effect="fade" autoplay style={{ marginTop: 30 }}>
                <Row gutter={8}>
                    <Col span={10} style={{paddingTop:'5vh', paddingLeft:'7vh'}} >
                        <img src={home} alt="noimage" className="logo-home-page" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'15vh', paddingTop:'7vh', paddingRight:'5vh'}} >
                        <h1 className="header-home"><b><i>Meeseeks en todos lados!</i></b></h1>
                        <p >Mediante nuestro portal de <b>Meeseeks S.A.</b> le permitira realizar sus consultas, revisar sus servicios, cargar sus reclamos
                            desde cualquier dispositivo</p>
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
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingLeft:'10vh', paddingTop:'7vh', paddingRight:'5vh'}}>
                        <h1 className="header-home"><b><i>Consultas o problemas con nuestro servicios?</i></b></h1>
                        <p>Cargue su consulta desde nuestro portal. Sera atendido por nuestros mejores profesionales.</p>
                        <Button icon="plus-circle" style={{marginTop:20}} type='primary'
                            onClick={()=>this.props.onSelect({key:'carga'})}>
                            Cargar Reclamo
                        </Button>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={10} style={{paddingLeft:'15vh', paddingTop:"10vh"}}>
                        <img src={seguimiento} alt="noimage" className="logo-home-seg" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify', paddingTop:'7vh', paddingLeft:'10vh',paddingRight:'5vh'}}>
                        <h1 className="header-home"><b><i>Actualizado en todo momento!</i></b></h1>
                        <p>Si ya realizaste una consulta, o queres revisar los antiguos reclamos, desde nuestra pantalla de seguimiento
                            podras ver el estado actual e historico de cualquiera de sus pedidos anteriores.
                        </p>
                        <Button icon="desktop" style={{marginTop:20}} type='primary'
                            onClick={()=>this.props.onSelect({key:'seguimiento'})}>
                            Ir a Seguimiento
                        </Button>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={10} style={{paddingLeft:'15vh', paddingTop:"10vh"}} >
                        <img src={profile} alt="noimage" className="logo-home-profile" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingTop:'7vh',paddingLeft:'10vh', paddingRight:'5vh'}}>
                        <h1 className="header-home"><b><i>Manten tus datos al dia!</i></b></h1>
                        <p>Es importante para nosotros que tus datos de contactos se mantengan actualizados. 
                            Asi podremos comunicarnos con usted ante cualquier novedad. </p>
                        <Button icon="user" style={{marginTop:20}} type='primary'
                            onClick={()=>this.props.onSelect({key:'data'})}>
                            Actualiza tus datos
                        </Button>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={10} style={{paddingLeft:'15vh', paddingTop:"10vh"}} >
                        <img src={question} alt="noimage" className="logo-home-profile" />
                    </Col>
                    <Col span={14} style={{ lineHeight: 2, textAlign:'justify',paddingTop:'7vh',paddingLeft:'10vh', paddingRight:'5vh'}}>
                        <h1 className="header-home"><b><i>Tenes mas consultas?</i></b></h1>
                        <p>Contactenos mediante nuestro formulario para realizar cualquier consultas, reclamos, adherirse a servicios, lo que necesite. 
                            Y nos comunicaremos con usted a la brevedad </p>
                        <Button icon="customer-service" style={{marginTop:20}} type='primary'
                            onClick={()=>this.props.onSelect({key:'contact'})}>
                            Contactenos
                        </Button>
                    </Col>
                </Row>
            </Carousel>
        );
    }
}

export default HomeContainer;