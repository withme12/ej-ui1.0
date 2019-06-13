import React from 'react';
import styles from './CustomerPage.css'
import {Modal,Button,Table,message} from 'antd'
import axios from  '../utils/axios'
import CustomerForm from './CustomerForm'


//组件类必须继承React.Component
class CustomerPage extends React.Component{
    constructor(){
        super();
        this.state={
            ids:[],
            list:[],
            loading:false,
            visible:false,
            customer:{}
        }
    }
    componentDidMount(){
        this.reloadData();
    }
    reloadData(){   //重载数据
        this.setState({loading:true});
        axios.get("/customer/findAll")
        .then((result)=>{
            this.setState({list:result.data})
        })
        .finally(()=>{
            this.setState({loading:false});
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
    // 取消按钮的事件处理函数
    handleCancel = () => {
        this.setState({ visible: false });
    };
    // 确认按钮的事件处理函数
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
        if (err) {
            return;
        }
        // 表单校验完成后与后台通信进行保存
        axios.post("/customer/insertOrUpdate",values)
        .then((result)=>{
            message.success(result.statusText)
            // 重置表单
            form.resetFields();
            // 关闭模态框
            this.setState({ visible: false });
            this.reloadData();
        })
        
        });
    };
        // 将子组件的引用在父组件中进行保存，方便后期调用
    saveFormRef = formRef => {
        this.formRef = formRef;
    };
    // 去添加
    toAdd(){
        this.setState({customer:{},visible:true})   // 将默认值置空,模态框打开
    }
    // 去更新
    toEdit(record){
        // 更前先先把要更新的数据设置到state中
        this.setState({customer:record})
        // 将record值绑定表单中
        this.setState({visible:true})
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
        },{
            title:'头像',
            dataIndex:'photo'
        },
        {
            title:'操作',
            width:120,
            align:"center",
            render:(text,record)=>{
                return (
                    <div>
                        <Button type ='link' size="small" onClick={this.handleDelete.bind(this,record.id)}>删除</Button>
                        <Button type ='link' size="small" onClick={this.toEdit.bind(this,record)}>修改</Button>
                    </div>
                )
            }
        }]
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
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
                    <Button onClick={this.toAdd.bind(this)}>添加</Button>&nbsp;
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

                <CustomerForm 
                    initData={this.state.customer}
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}/>
            </div>
        )
    }
}

export default CustomerPage;