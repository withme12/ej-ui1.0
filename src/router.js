import React from 'react';
import { Router, Route, Switch ,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage';
import OrderPage from './routes/OrderPage';
import CommentPage from './routes/CommentPage';
import ProductPage from './routes/ProductPage';
import WaiterPage from './routes/WaiterPage';
import CategoryPage from './routes/CategoryPage';
import AddressPage from './routes/AddressPage';
import styles from './router.css';
import OrderLinePage from './routes/OrderLinePage';
import {Layout,Menu,Breadcrumb,Icon}from 'antd' 
import CustomerDetails from './routes/CustomerDetails'
import WaiterDetails from './routes/WaiterDetails'
import  OrderDetails from './routes/OrderDetails'
import  CategoryDetails from './routes/CategoryDetails'
import { Avatar } from 'antd';
function RouterConfig({ history }) {
  const {Content,Sider,Header}=Layout;
  const {SubMenu}=Menu;
  return (
<Router history={history}>
        <Layout>
          <Header className="header">
            <div className="logo" style={{color:"#DCB5FF",fontWeight:"bold",fontSize:"30px",fontFamily:"华文彩云"}}>
            <Avatar src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1854786735,1316474756&fm=26&gp=0.jpg" />&nbsp;e洁家政后台管理系统  
            </div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#C7C7E2' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0,background: '#FFCBB3',color:'#00EC00' }}
              >
                <Menu.Item key="1" >
                  <Link to="/customer">
                    <Icon type="user" />
                    <span>
                      顾客管理
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Link to="/product">
                    <Icon type="skin" />
                    <span>
                      产品管理
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/order">
                    <Icon type="desktop" />
                    <span>
                      订单管理
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/Category">
                  <Icon type="apartment" />
                    <span>
                      种类管理
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/waiter">
                    <Icon type="pie-chart" />
                    <span>
                      服务员管理
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/address">
                    <Icon type="compass" />
                    <span>
                      地址管理
                    </span>
                  </Link>
                </Menu.Item>
                
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '10px 0',color:"#00DB00" }}></Breadcrumb>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/#/">主页</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="#/customer">顾客管理</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="#/product">产品管理</a>
                </Breadcrumb.Item>
             
              </Breadcrumb>






              {/*  */}
                    {/* <div class="crumbs">
                  <el-breadcrumb separator="/">
                {/* <el-breadcrumb-item :to="{path:'/main/home'}">首页</el-breadcrumb-item> */}
                {/* <el-breadcrumb-item><a href="/#/">首页/</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/#/customer">人员管理/</a></el-breadcrumb-item>

                </el-breadcrumb> */}

                    {/* </div> */} 
          


                {/* // <Breadcrumb.Item>Home</Breadcrumb.Item>
                // <Breadcrumb.Item>List</Breadcrumb.Item>
                // <Breadcrumb.Item>App</Breadcrumb.Item> */}
                
              {/* </Breadcrumb> */}
              <Content
                style={{
                  background: '#D1E9E9',
                  margin: 0,
                  padding:'1em',
                  minHeight: 580,
                }}
              >
                <Switch>
                  <Route path="/" exact component={IndexPage} />
                  <Route path="/orderLine" exact component={OrderLinePage} />
                  <Route path="/customer" exact component={CustomerPage} />
                  <Route path="/order" exact component={OrderPage} />
                  <Route path="/customerDetails" exact component={CustomerDetails} /> 
                  <Route path="/Category" exact component={CategoryPage}/>
                  <Route path="/waiter" exact component={WaiterPage}/>
                  <Route path="/waiterDetails" exact component={WaiterDetails}/>
                  <Route path="/orderDetails"  exact component={OrderDetails}/>
                  <Route path="/categoryDetails"  exact component={CategoryDetails}/>
                  <Route path="/product"  exact component={ProductPage}/>
                  <Route path="/address"  exact component={AddressPage}/>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>

  );
}

export default RouterConfig;
