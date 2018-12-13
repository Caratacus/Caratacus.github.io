# 导入

> 现在我们开始IDE导入

## IntelliJ IDEA 导入

> 打开`IntelliJ IDEA`

![idea-install-1.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/idea/idea-install-1.png)

> 点击`Improt Project`

![idea-install-2.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/idea/idea-install-2.png)

> 选取`Crown`项目中的`build.gradle`，点击确定

![idea-install-3.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/idea/idea-install-3.png)

> 按照图中的选择，这里并不需要你自己去下载`gradle`

![idea-install-4.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/idea/idea-install-4.png)

> 导入后发现项目报错了，看看是什么原因

![idea-install-5.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/idea/idea-install-5.png)

> 去插件中心下载`lombok`插件重启`IntelliJ IDEA`，并按照图中操作

![idea-install-6.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/idea/idea-install-6.png)

> 恭喜你，项目`IntelliJ IDEA`导入完成

## Eclipse 导入

> 用Git下载代码，然后打开`Eclipse`，点击`import`

![eclipse-import-1.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-1.png)

> 选择`Gradle`

![eclipse-import-2.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-2.png)

> 选择`Existing Gradle Project`，点击`Next`

![eclipse-import-3.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-3.png)

> 选中`Crown`所在磁盘根目录，点击`Next`

![eclipse-import-4.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-4.png)

> 按图中选择`Gradle Wrapper`，设置`Gradle User Home`，点击`Next`

![eclipse-import-5.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-5.png)

> 点击`Finish`

![eclipse-import-6.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-6.png)

> 安装完`lombok`插件[eclipse安装lombok插件](develop/eclipse-lombok.md)，打开`Eclipse`

![eclipse-import-7.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-7.png)

> 启动`CrownApplication.java`，发现以下错误

```
 WARN 2018-12-13 14:58:09.955 11704 AbstractApplicationContext.java:554 - Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'resourceRestController': Unsatisfied dependency expressed through field 'scanMappings'; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'scanMappings': Invocation of init method failed; nested exception is org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.executor.result.ResultMapException: Error attempting to get column 'auth_type' from result set.  Cause: java.lang.IllegalArgumentException: No enum constant org.crown.emuns.AuthTypeEnum.3
```

> 去除`spring-boot-devtools`依赖，并且在配置文件删除对应属性

![eclipse-import-8.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-8.png)

> 刷新`gradle`依赖，并且`clean`之前编译的`class`

![eclipse-import-9.png](https://raw.githubusercontent.com/Caratacus/Resource/master/crown/import/eclipse/eclipse-import-9.png)

> 恭喜你，项目`Eclipse`导入完成

