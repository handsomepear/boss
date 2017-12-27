


## 项目布局

.  
├── build                                       // webpack配置文件<br>
├── config                                      // 项目打包路径<br>
├── src                                         // 源码目录<br>
│   ├── components                              // 组件<br>
│   ├── config                                  // 基本配置<br>
│   │   ├── http.js                             // 获取数据  
│   │   ├── mUtils.js                           // 常用的js方法<br>
│   ├── images                                  // 公共图片   <br>
│   ├── router  
│   │   └── router.js                           // 路由配置   <br>
│   ├── service                                 // 数据交互统一调配   <br>
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理   <br>
│   │   └── tempdata                            // 开发阶段的临时数据 <br>
│   ├── App.vue                                 // 页面入口文件 <br>
│   ├── main.js                                 // 程序入口文件，加载各种公共组件 <br>
├── favicon.ico                                 // 图标 <br>
├── index.html                                  // 入口html文件 <br>
.