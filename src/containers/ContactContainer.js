import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
const { TextArea } = Input;

class ContactContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Row>
                <Col lg={14} xl={14} sm={14}>
                    <Form layout="vertical" style={{ padding: 50 }}>
                        <Form.Item label="Nombre" >
                            <Input placeholder="Ingrese nombre completo..." />
                        </Form.Item>
                        <Form.Item label="Compania" >
                            <Input placeholder="Ingrese nombre de su compania..." />
                        </Form.Item>
                        <Form.Item label="Email" >
                            <Input placeholder="Ingrese email de contacto..." />
                        </Form.Item>
                        <Form.Item label="Descripcion" >
                            <TextArea rows={4} placeholder="Ingrese informacion sobre la consulta..." />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" icon="mail">Enivar</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col lg={10} xl={10} sm={10}>
                    <div style={{padding:50, paddingTop:60}} className="contact-info">
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