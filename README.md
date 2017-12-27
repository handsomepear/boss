


## 项目布局


├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── components                              // 组件
│   ├── config                                  // 基本配置
│   │   ├── http.js                             // 获取数据
│   │   ├── mUtils.js                           // 常用的js方法
│   ├── images                                  // 公共图片
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   │   └── tempdata                            // 开发阶段的临时数据
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件