import React from 'react'
import {Button,Tabs,Table,Icon} from 'antd';
import axios from '../utils/axios';

class WaiterDetails extends React.Component {
  constructor(props){
    super(props);
    this.state={
      waiter:{},
      orders:[]
    }
  }
  componentDidMount(){
    let payload=this.props.location.payload;
    if(payload){
      this.setState({waiter:payload})
      this.loadOrders();
    }else{
      this.props.history.push("/waiter")
    }
  }
  loadOrders(){
    axios.post("/order/queryBasic",
      {waiterId:this.props.location.payload.id}
    )
    .then((result)=>{
      this.setState({
        orders:result.data
      })
    })
  }




  render(){
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

        let columnsOrders=[{
          title:'订单号',
          dataIndex:'orderId'
      },{
          title:'顾客姓名',
          dataIndex:'customerName'
      },{
          title:'服务员姓名',
          dataIndex:'waiterName'
      },{
          title:'地址',
          dataIndex:'address'
      },{
          title:'总价',
          dataIndex:'total'
      },{
          title:'订单时间',
          dataIndex:'orderTime'
      }  ]

    return (
      <div>
          <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="基本信息" key="1">
            <p>姓&nbsp;&nbsp;名：&nbsp;{this.state.waiter.realname}</p>
            <p>电&nbsp;&nbsp;话：&nbsp;{this.state.waiter.telephone}</p>
            <img alt="图片找不到..." src={this.state.waiter.photo}/>
          </TabPane>
          <TabPane tab="历史订单" key="2">
              <div>
                    <Table
                    rowKey="orderId"
                    size="small"
                    loading={this.state.loading }
                    // rowSelection={rowSelection}
                    columns={columnsOrders}
                    dataSource={this.state.orders}/>
                </div>
          </TabPane>
          
        </Tabs>
        
      </div>
    )
  }
}

export default WaiterDetails;


