# 快速开始

<sup>1</sup> JDK1.8+ <br/>
<sup>2</sup> MySQL5.7+ <br/>
<sup>3</sup> Git1.7+ <br/>

准备好上述环境，什么？没有要求安装Gradle？项目已经集成好了`gradlew`不用安装

-```git clone git@github.com:Caratacus/Crown.git```

-```导入crown.sql文件（项目根路径下src/test/resources/sql/crown.sql）至数据库```

-```./gradlew clean build -x test```（windows系统把`./gradlew`替换成`gradlew.bat`）

-```java -jar build/libs/crown.jar```

-```访问http://localhost:8088```

完成上面五步，项目已经运行起来了

