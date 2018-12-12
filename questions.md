# 常见问题

## 项目实体没有`set`、`get`方法？

框架使用了`lombok`，编译期间会自动生成`set`、`get`方法

## 安装了`lombok`IDE还是无法找到`set`、`get`方法？

> 不要怀疑，正视自己，还是自己的原因……

![idea-annotation-compile.png](https://raw.githubusercontent.com/Caratacus/Resource/master/idea-annotation-compile.png)

上图所示，IDEA下载`lombok`插件并开启注解编译支持

## 代码编译各种不通过，是什么问题？![Travis Build标签](https://travis-ci.org/Caratacus/Crown.svg?branch=master)

查看问题上`travis`标签，`passing`代表代码测试用例通过，不存在编译问题；`failing`表示代码测试不通过，请联系作者处理

## 项目启动后`127.0.0.1`无法访问项目，`localhost`却可以？

项目是前后端分离的需要`127.0.0.1`访问方式，修改`config.js`中`serverUrl`路径即可

## 为什么`eclipse`的环境执行时，枚举类型就不会变成数值，`idea`却可以？

原因是`eclipse`没有识别`spring-boot-devtools`配置文件的配置，所以在`eclipse`运行该项目时，务必去除`devtools`依赖包以及`application.yml`中`devtolls`属性。