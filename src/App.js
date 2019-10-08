import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import CargaContainer from './containers/CargaContainer';
import SeguimientoContainer from './containers/SeguimientoContainer';
import MisDatosContainer from './containers/MisDatosContainer';
import ContactContainer from './containers/ContactContainer';
import logo from './meeseeks-logo.png';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      actualTab: "home",
      carga : <CargaContainer/>,
      seguimiento: <SeguimientoContainer/>,
      data: <MisDatosContainer/>,
      contact: <ContactContainer/>
    }
    this.onCollapse = this.onCollapse.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onCollapse(collapsed){
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onSelect(data){
    this.setState({
      actualTab: data.key
    })
  }
  render(){
    const toShow = this.state[this.state.actualTab];
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" mode="inline" onSelect={this.onSelect}>
            <Menu.Item key="home" disabled={true}>
            </Menu.Item>
            <Menu.Item key="carga">
              <Icon type="plus-circle"/>
              <span>Cargar Reclamos</span>
            </Menu.Item>
            <Menu.Item key="seguimiento">
              <Icon type="desktop" />
              <span>Seguimiento</span>
            </Menu.Item>
            <Menu.Item key="stat">
              <Icon type="dashboard" />
              <span>Estado del Servicio</span>
            </Menu.Item>
            <Menu.Item key="data">
              <Icon type="user" />
              <span>Mis datos</span>
            </Menu.Item>
            <Menu.Item key="contact">
              <Icon type="customer-service" />
              <span>Contactenos</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#f0f2f5', padding: 0, paddingLeft:30 }}>
           <img src={logo} alt="noimage" className="logo" /> <b className="logo-text" style={{marginLeft:20}}>  Meeseeks S.A. Centro de Ayuda</b>          
          </Header>
          <Content style={{ margin: '0 16px', overflowY: 'scroll', height: '80vh'}}>
            {toShow}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <b>Meeseeks S.A. Help Desk ©2019 Created by Grupo 1 : Team Meeseeks</b>
          </Footer>
        </Layout>
      </Layout>
  );
 }
}

export default App;
