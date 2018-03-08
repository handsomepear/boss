


## 项目布局
```
.  
├── build                           // webpack配置文件
├── config                          // 项目打包路径
├── src                             // 源码目录
│   ├── components                  // 组件
│   ├── pages                       // 页面
│   ├── util                        // 基本配置
│   │   ├── http.js                 // 获取数据  
│   │   ├── mUtils.js               // 常用的js方法
│   ├── images                      // 公共图片   
│   ├── router                      // 路由  
│   │   ├── index.js                // 路由入口
│   │   └── router.js               // 路由配置   
│   ├── service                     // 数据交互统一调配   
│   ├── store                       // vuex   
│   │   ├── getData.js              // 获取数据的统一调配文件，对接口进行统一管理   
│   │   └── tempdata                // 开发阶段的临时数据 
│   ├── App.vue                     // 页面入口文件 
│   ├── main.js                     // 程序入口文件，加载各种公共组件 
├── favicon.ico                     // 图标 
├── index.html                      // 入口html文件 
.
```

### 路由设计(初稿)

```
├── App       
├── ├── Login                       登录         
│   ├── Main                        主页面        
│   │   ├── otherRouter             不在左侧菜单的路由  
│   │   |   ├── home                首页
│   │   |   ├── changePwd           修改密码 
│   │   |   ├── ownspace            个人中心                  
│   │   ├── appRouer                在左侧菜单的路由           
│   │   |   ├──  authority          权限管理           
│   │   |   ├──  contract           合同管理   
│   │   |   ├──  Merchant           商户管理   
│   │   |   ├──         .   
│   │   |   ├──         .  
│   │   |   ├──         .  
│   │   |   ├──         .  
├── ├── Page 403                    权限不够
├── ├── Page 404                    路径错误
├── ├── Page 500                    服务器错误
```

改改
改改改
nihao