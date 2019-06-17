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
import styles from './router.css'
import OrderLinePage from './routes/OrderLinePage';
import {Layout,Menu,Breadcrumb,Icon}from 'antd' 
import CustomerDetails from './routes/CustomerDetails'
import WaiterDetails from './routes/WaiterDetails'
import  OrderDetails from './routes/OrderDetails'
function RouterConfig({ history }) {
  const {Content,Sider,Header}=Layout;
  const {SubMenu}=Menu;
  return (
<Router history={history}>
        <Layout>
          <Header className="header">
            <div className="logo" style={{color:"#DCB5FF",fontWeight:"bold",fontSize:"18px"}}>
              e洁家政后台管理系统  
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
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>
                    <Link to="/customer">顾客管理</Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>
                    <Link to="/order">订单管理</Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="desktop" />
                  <span>
                    <Link to="/Category">种类管理</Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="desktop" />
                  <span>
                    <Link to="/waiter">服务者管理</Link>
                  </span>
                </Menu.Item>
                
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#D1E9E9',
                  margin: 0,
                  padding:'1em',
                  minHeight: 280,
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
                  
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>































    
    // <Router history={history}>
    //   <div className={styles.container}>
    //     <div className={styles["left-nav"]} >
    //      <div className={styles.title}>E洁家政管理系统
    //      </div>
    //     </div>
       
    //      <ul>
    //        <li className={styles["nav-list-item"]}>
    //        <Link to="/customer">顾客管理 </Link></li>
    //        <li className={styles["nav-list-item"]}>
    //        <Link to="/address">地址管理 </Link></li>
    //        <li className={styles["nav-list-item"]}>
    //        <Link to="/category">种类管理 </Link></li>
    //        <li className={styles["nav-list-item"]}>
    //        <Link to="/order">订单管理 </Link></li>
    //        <li className={styles["nav-list-item"]}>
    //        <Link to="/comment">评价管理 </Link></li>
    //        <li className={styles["nav-list-item"]}>
    //        <Link to="/product">产品管理 </Link></li>
    //        <li className={styles["nav-list-item"]}>
    //        <Link to="/waiter">服务人员管理 </Link></li>
    //      </ul>
       
    //      <div className={styles["right-content"]}>
    //      <Switch>
    //      <Route path="/" exact component={IndexPage} />
    //      <Route path="/customer" exact component={CustomerPage} />
    //      <Route path="/order" exact component={OrderPage} />
    //      <Route path="/comment" exact component={CommentPage} />
    //      <Route path="/product" exact component={ProductPage} />
    //      <Route path="/waiter" exact component={WaiterPage} />
    //      <Route path="/category" exact component={CategoryPage} />
    //      <Route path="/address" exact component={AddressPage} />
    //      </Switch>
    //     </div>
    //     </div>
    // </Router>
  );
}

export default RouterConfig;
