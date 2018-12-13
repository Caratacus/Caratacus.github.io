# Gradle

![gradle-org-hero.png](https://gradle.org/images/homepage/gradle-org-hero.png)

> 现在我们开始简单介绍Gradle

## 简介

Gradle是一个基于Apache Ant和Apache Maven概念的项目自动化建构工具。它使用一种基于Groovy的特定领域语言来声明项目设置，而不是传统的XML。

## Gradle vs Maven

![image](https://gradle.org/images/gradle-vs-maven.gif)

## Maven项目转为Gradle

```gradle init --type pom```

### 我们在Crown项目中会用到的命令

> 在`Crown`中我们不需要了解太多`gradle`相关命令

```gradle build --refresh-dependencies```

> gradle刷新依赖命令

```gradle clean build -x test```

> gradle打包命令

- 知道上述两个命令即可玩转`Crown`，so easy