import React, { Component } from "react";
import "./login.less";
import { Form, Icon, Input, Button } from "antd";
import loge from "./image/logo192.png";
//登陆的路由组件

//React node是一种轻量的，无状态的，不可变的，真实DOM节点的一种虚拟代表。它是React创建的基本元素。简言之，React使用React nodes创建虚拟DOM，一个完整的React组件最终可用来创建真实的DOM
//onSubmit 所以用提交按钮 不然不会触发
const Item = Form.Item //不能写在import之前
 class Login extends Component {
    handleSubmit= (event) =>{

      //阻止事件的默认行为
      event.preventDefault()
      
      this.props.form.validateFields((err, values) => {
        if (err) {
          console.log('失败');
        }  else{
          console.log('提交登陆的ajax请求', values)
        }
      });

      //得到form对象
      // const form = this.props.form
      
      // //获取表单项的输入数据
      // const values = form.getFieldsValue()
      // console.log(' handleSubmit()',values)
    }


    validatorPed = (rule,value,callback)=>{
      if(!value){
        callback('写输入密码')
      }
      else if(value.length>12){
        callback('长度超标了')
      }
      else if(value.length<4){
        callback('你有点短了')
      }
      else if(!/^[a-zA-Z0-9_]+$/.test(value)){
        callback('请输入数字，字母+下划线')
      } 
      else {
        callback()
      }
      // callback()  成功没有值传回
      // callback('')  有值自己写验证
    }
  render() {
    //得到强大功能的form对象
    const form = this.props.form
    const { getFieldDecorator } = form;
    return (
      <div className="login">
        <header className="login_header">
          <img src={loge} alt="" />
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login_contain">
          <h2>用户登陆</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {
                getFieldDecorator('username',{
                  //声明式验证（别人定义好的规则验证）
                  rules:[{required:true,message:'用户名必须输入',whitespace:true}, 
                  {min:4 ,message:'用户名最小为4'},
                  {max:12 ,message:'用户名最长为12'},
                {pattern:/^[a-zA-Z0-9_]+$/,message:'数字字母加下划线组合'}
                ]
                })(
                    <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名"/>
                )
              }
            
            </Form.Item>
            <Form.Item>
              {
                  getFieldDecorator('password',{
                   rules:[
                     {
                      validator:this.validatorPed
                     }
                   ]
                  })(
               <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"/>
            )


              }
          
             
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

//高阶函数返回的是一个函数   hanshu('',{})()写法
//在html中写函数要+{}，高级函数的写法解析：函数+（）+（）第二个括号传入的是内容；
//包装 Form组件生成一个新的组件:Form(Login) ;新组建会向Form组件传递一个强大的对象属性:form



//高阶函数：
//1.是一个特别的函数 a:接收函数类型的参数 b：返回值是函数   满足一个就是高阶函数  
//2.常见：a:定时器：setTimeout() srtInterval() ; b:promise:promise(()=>{})   then(value=>{},reason=>{})    c:数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()
//d:函数对象的bind()   3.高阶函数更新动态，更加具有扩展性


// 高阶组件：1.本质就是一个函数 2.接收一个组件（被包装组件），返回一个新的组件(包装组件)，（新组件内部渲染被包装）  包装组件会向被包装组件传入特定属性   3.作用：扩展组件的功能
//  4.也是一个高阶函数：接收一个组件函数，返回一个新的组件函数（类也是一个函数）
const wrappedlogin = Form.create()(Login);
export default  wrappedlogin
