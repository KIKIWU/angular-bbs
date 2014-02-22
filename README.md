angular-bbs
===========
项目环境  
git：版本管理工具  
node：后台服务器语言（npm模块管理，jade模板引擎）  
express：后台mvc框架为  
supervisor：后台后台代码监听工具可进行及时更新重启服务  
bower：前端包管理工具  
grunt：项目构建工具（jshint语法检查，concat文件合并，uglify文件压缩，watch文件监听）  
bootstrap：css框架  
jquery：前端工具库  
angular：前端mvc框架   
webStorm：开发工具  
============
开发规范
1.用单独的文件定义模块，并取名a.js（应用的入口模块run.js除外）  
2.value和constants定义在模块文件（a.js）中，除此之外的组件单独保存在各自的文件中，并且文件名和组件名要一致  
3.组件名要能体现出组件的类型：控制器以'Controller'结尾，指令以'Directive'结尾，过滤器以'Filter'结尾... ...  
4.用数组的方式来声明组件的依赖  
5.模块的run函数在模块定义文件a.js中定义，模块的config函数在zzz.js中定义  


