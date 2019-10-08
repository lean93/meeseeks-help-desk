import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

class CargaContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Row>
                <Col lg={14} xl={14} sm={14}>
                    <Form layout="vertical" style={{ padding: 60 }}>
                        <Form.Item label="Resumen" >
                            <Input placeholder="Ingrese resumen del problema..." />
                        </Form.Item>
                        <Form.Item label="Moitvo" >
                            <Select
                                style={{ width: '100dv' }}
                                allowClear={true}
                                placeholder="Seleccione un motivo"
                            >
                                <Option value="service">Fallas en el Servicio</Option>
                                <Option value="change">Reemplazo de equipamiento</Option>
                                <Option value="cap">Solicitar Capacitacion</Option>
                                <Option value="other">Otro...</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Descripcion" >
                            <TextArea rows={4} placeholder="Ingrese informacion sobre la consulta..." />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" icon="mail">Enviar Solicitud</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col lg={10} xl={10} sm={10}>
                </Col>
            </Row>
        );
    }
}

export default CargaContainer;
