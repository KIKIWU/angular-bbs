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


开发规范  
1.用单独的文件定义模块，文件名和模块名要一致  
2.value和constants定义在模块文件中，除此之外的组件单独保存在各自的文件中，并且文件名和组件名要一致  
3.组件名要能体现出组件的类型：控制器以'Controller'结尾，指令以'Directive'结尾，过滤器以'Filter'结尾... ...  
4.用数组的方式来声明组件的依赖  
5.模块的run函数在模块定义文件中定义  
6.所有用到的template都用jade编写，由构建脚本统一构建在public/tpl/下  
7.禁止在控制器中进行dom操作  
项目目录结构  
1.顶级目录app，public，vendor  
2.app：前端源码所在目录包括html,css,js  
3.public：源码输出目录  
4.vendor：放置第三方css和js库  
5.app/source/：前端js开发目录  
6.app/source/controller/：控制器目录，按业务模块来划分控制器  
7.app/source/directive/：指令目录  
8.app/source/filter/：过滤器目录 
9.app/source/module/: 模块定义目录
10.app/source/server/：除控制器，指令，过滤器之外的组件定义在该目录中  
11.app/source/server/RESTful：保存访问服务器的resource实例，以factory公开出来  




