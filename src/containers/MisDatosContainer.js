import React, {Component} from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';

class MisDatosContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        inEdition: false,
        loading:false,
        nombre: "Fernando Matias",
        apellido:"Gutierrez",
        compania:"Solicitante SRL",
        email:"fernandoGutierrez@gmail.com",
        direccion:"Av Corrientes 560, CABA, Argentina",
        telefono:"4657-2312"
    }
    this.changeEdit = this.changeEdit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.modifyEdit = this.modifyEdit.bind(this);
  }

  modifyEdit(value){
    this.setState({
      inEdition:value,
      loading:false
    })
  }

  changeEdit(){
    if(this.state.inEdition){
      this.setState({loading:true})
      const modifyEdit = () => this.modifyEdit(!this.state.inEdition);
      message.loading("Guardando los cambios", 3);
      setTimeout(function() { 
          modifyEdit(); 
          message.success("Cambios guardados correctamente", 3);
      }, 4000);
    }else{
      this.modifyEdit(!this.state.inEdition);
    }
   
  }

  onChangeInput(attr, e){
    this.setState({
        [attr]: e.target.value
    })
  }

  render(){
    return (
      <Row gutter={48}>
          <Col lg={8} xl={8} sm={12}>
              <Form layout="vertical" style={{ paddingLeft: 50, paddingTop:50 }}>
                  <Form.Item label="Nombre: " >
                      <Input placeholder="Ingrese nombre completo..." disabled={!this.state.inEdition} value={this.state.nombre} 
                              onChange={(e)=>this.onChangeInput('nombre',e)}/>
                  </Form.Item>
                  <Form.Item label="Compania:" >
                      <Input placeholder="Ingrese nombre de su compania..." disabled={!this.state.inEdition} value={this.state.compania} 
                              onChange={(e)=>this.onChangeInput('compania',e)}/>
                  </Form.Item>
                  <Form.Item label="Email:" >
                      <Input placeholder="Ingrese email de contacto..." disabled={!this.state.inEdition} value={this.state.email}
                            onChange={(e)=>this.onChangeInput('email',e)}/>
                  </Form.Item>
                  <Form.Item >
                      <Button type="primary" icon={this.state.inEdition?"save":"edit"} onClick={this.changeEdit} loading={this.state.loading}>
                          {this.state.inEdition?"Guardar Cambios":"Editar"}
                      </Button>
                  </Form.Item>
              </Form>
          </Col>
          <Col lg={8} xl={8} sm={12}>
               <Form layout="vertical" style={{ paddingTop:50}}>
                    <Form.Item label="Apellido:" >
                        <Input placeholder="Ingrese nombre completo..." disabled={!this.state.inEdition} value={this.state.apellido}
                              onChange={(e)=>this.onChangeInput('apellido',e)}/>
                    </Form.Item>
                    <Form.Item label="Direccion:" >
                        <Input placeholder="Ingrese nombre de su compania..." disabled={!this.state.inEdition} value={this.state.direccion} 
                                onChange={(e)=>this.onChangeInput('direccion',e)}/>
                    </Form.Item>
                    <Form.Item label="Telefono:" >
                        <Input placeholder="Ingrese email de contacto..." disabled={!this.state.inEdition} value={this.state.telefono}
                                onChange={(e)=>this.onChangeInput('telefono',e)}/>
                    </Form.Item>
                </Form>
          </Col>
      </Row>
  );
 }
}

export default MisDatosContainer;