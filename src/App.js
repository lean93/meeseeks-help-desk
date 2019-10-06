import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(collapsed){
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(){
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Cargar Reclamos</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Seguimiento</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file" />
              <span>Mis datos</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="file" />
              <span>Contactenos</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
     
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
