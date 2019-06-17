import React from 'react'
import {Button,Tabs} from 'antd'
import { Router, Route, Switch ,Link} from 'dva/router';
class OrderDetails extends React.Component {

  render(){
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

    return (
      <div>
          <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="订单详情" key="1">
        
          </TabPane>
        </Tabs>
        
      </div>
    )
  }
}

export default OrderDetails;


