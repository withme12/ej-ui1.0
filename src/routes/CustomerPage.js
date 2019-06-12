import React from 'react';
import styles from './CustomerPage.css'
import {Modal,Button,Table,message} from 'antd'
import axios from  '../utils/axios'



//组件类必须继承React.Component
class CustomerPage extends React.Component{
    constructor(){
        super();
        this.state={
            ids:[],
            list:[],
            loading:false
        }
    }
    componentDidMount(){
        this.reloadData();
    }
    reloadData(){
        this.setState({loading:true});
        axios.get("/customer/findAll")
        .then((result)=>{
            this.setState({list:result.data})
        })
        .finally(()=>{
            this.setState({loading:false})
        })
    }
    //批量删除
    handleBatchDelete(){
        Modal.confirm({
            title:'确定要删除这些记录吗？',
            content:'删除后数据将无法恢复',
            onOk:()=>{
                axios.post("/customer/batchDelete",{ids:this.state.ids})
                .then((result)=>{
                    message.success(result.statusText);
                    this.reloadData();
                })
            }
        });
    }
    //单个删除
    handleDelete(id){
        Modal.confirm({
            title:'确定要删除这条记录吗？',
            content:'删除后数据将无法修复',
            onOk:()=>{
                axios.get("/customer/deleteCustomerById",{
                    params:{
                        id:id
                    }
                })
                .then((result)=>{
                    message.success(result.statusText);
                    this.reloadData();
                })
            }
        });
    }


    render(){
        let columns=[{
            title:'id',
            dataIndex:'id'
        },{
            title:'姓名',
            dataIndex:'realname'
        },{
            title:'手机号',
            dataIndex:'telephone'
        },{
            title:'状态',
            dataIndex:'status'
        },
        {
            title:'操作',
            width:120,
            align:"center",
            render:(text,record)=>{
                return (
                    <div>
                        <Button type ='link' size="small" onClick={this.handleDelete.bind(this,record.id)}>删除</Button>
                        <Button type ='link' size="small">修改</Button>
                    </div>
                )
            }
        }]
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              this.setState({
                  ids:selectedRowKeys
              })
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
          };

        return (
            <div className={styles.customer}>
                <div className ={styles.title}> 顾客管理</div>
                <div className ={styles.btns}>
                    <Button>添加</Button>&nbsp;
                    <Button onClick={this.handleBatchDelete.bind(this)}>批量删除</Button>&nbsp;
                    <Button type="link">导出</Button>
                </div>
                <Table
                bordered
                rowKey="id"
                size="small"
                loading={this.state.loading }
                rowSelection={rowSelection}
                columns={columns}
                dataSource={this.state.list}/>
            </div>
        )
    }
}

export default CustomerPage;