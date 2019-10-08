import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
const { TextArea } = Input;

class ContactContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading:false
        }
        this.onSendData = this.onSendData.bind(this);
        this.changeLoading = this.changeLoading.bind(this);
    }

    changeLoading(value){
        this.setState({
            loading: value
        });
    }

    onSendData(){
        const changeValue = this.changeLoading;
        changeValue(true)
        message.loading("Enviando Solicitud", 4);
        setTimeout(function() { 
            changeValue(false); 
            message.success("Solicitud enviada correctamente. Nos comunicaremos a la brevedad", 3);
        }, 4000);

    }

    render() {
        return (
            <Row gutter={48}>
                <Col lg={14} xl={14} sm={14}>
                    <Form layout="vertical" style={{ paddingTop:50, paddingLeft:50}}>
                        <Form.Item label="Nombre" >
                            <Input placeholder="Ingrese nombre completo..." disabled={this.state.loading}/>
                        </Form.Item>
                        <Form.Item label="Compania" >
                            <Input placeholder="Ingrese nombre de su compania..." disabled={this.state.loading}/>
                        </Form.Item>
                        <Form.Item label="Email" >
                            <Input placeholder="Ingrese email de contacto..." disabled={this.state.loading}/>
                        </Form.Item>
                        <Form.Item label="Descripcion" >
                            <TextArea rows={4} placeholder="Ingrese informacion sobre la consulta..." disabled={this.state.loading}/>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" icon="mail" onClick={this.onSendData} loading={this.state.loading}>Enivar</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col lg={10} xl={10} sm={10}>
                    <div style={{paddingTop:50}} className="contact-info">
                        <p><b> Messeeks S.A.</b></p>
                        <p>Mozart 2300, C1407 CABA</p>
                        <p>Argentina</p>
                        <p>administracion@meeseeks.com.ar</p>
                        <p>4647-0371</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ContactContainer;