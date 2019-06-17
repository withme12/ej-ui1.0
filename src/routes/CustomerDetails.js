import React from 'react'
import {Button,Tabs} from 'antd'

class CustomerDetails extends React.Component {

  render(){
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

    return (
      <div>
        <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="基本信息" key="1">
            <p>张三</p>
            <p>18896821234</p>
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3914950518,3569645197&fm=27&gp=0.jpg"/>
          </TabPane>
          <TabPane tab="服务地址" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="订单" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        
      </div>
    )
  }
}

export default CustomerDetails;


