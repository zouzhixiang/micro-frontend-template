(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-552bf020"],{"76b6":function(e,r,o){},dd7b:function(e,r,o){"use strict";o.r(r);var s=function(){var e=this,r=e._self._c;return r("el-container",[r("el-form",{ref:"loginForm",attrs:{model:e.form,"label-position":"top",rules:e.rules,size:"medium"}},[r("h3",[e._v("vue2模块自定义登录")]),r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password","show-password":"",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleLogin}},[e._v("登 录")])],1)],1)],1)},a=[],t={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loading:!1}},methods:{handleLogin(){this.$refs.loginForm.validate(async e=>{var r;e&&(this.loading=!0,null===(r=window.$wujie)||void 0===r||r.props.login(this.form).then(()=>{this.loading=!1,this.$router.replace({path:"/"})}).catch(()=>{this.loading=!1}))})}}},l=t,n=(o("f86e"),o("2272")),i=Object(n["a"])(l,s,a,!1,null,"c912425a",null);r["default"]=i.exports},f86e:function(e,r,o){"use strict";o("76b6")}}]);