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


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div className={styles.container}>
        <div className={styles["left-nav"]} >
         <div className={styles.title}>E洁家政管理系统
         </div>
        </div>
       
         <ul>
           <li className={styles["nav-list-item"]}>
           <Link to="/customer">顾客管理 </Link></li>
           <li className={styles["nav-list-item"]}>
           <Link to="/address">地址管理 </Link></li>
           <li className={styles["nav-list-item"]}>
           <Link to="/category">种类管理 </Link></li>
           <li className={styles["nav-list-item"]}>
           <Link to="/order">订单管理 </Link></li>
           <li className={styles["nav-list-item"]}>
           <Link to="/comment">评价管理 </Link></li>
           <li className={styles["nav-list-item"]}>
           <Link to="/product">产品管理 </Link></li>
           <li className={styles["nav-list-item"]}>
           <Link to="/waiter">服务人员管理 </Link></li>
         </ul>
       
         <div className={styles["right-content"]}>
         <Switch>
         <Route path="/" exact component={IndexPage} />
         <Route path="/customer" exact component={CustomerPage} />
         <Route path="/order" exact component={OrderPage} />
         <Route path="/comment" exact component={CommentPage} />
         <Route path="/product" exact component={ProductPage} />
         <Route path="/waiter" exact component={WaiterPage} />
         <Route path="/category" exact component={CategoryPage} />
         <Route path="/address" exact component={AddressPage} />
         </Switch>
        </div>
        </div>
    </Router>
  );
}

export default RouterConfig;
