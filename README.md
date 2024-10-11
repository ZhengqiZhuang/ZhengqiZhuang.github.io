# 基于Hexo和Hexo中安知鱼主题的开源博客平台分享

## 项目介绍
项目是一个开源的博客平台，主要依托了两个开源项目，分别是Hexo和Hexo框架中的安知鱼主题。
下面展示我的博客系统的主要界面：
![img](https://i.ibb.co/3FtYGXL/2024-10-10-14-59-49.png)
下面是“我的”界面。
![img](https://i.ibb.co/Wvy9KQQ/2024-10-10-14-59-08.png)


## 项目文档
本项目主要依赖了两个开源项目，分别是Hexo和Hexo框架中的安知鱼主题。

Hexo 是一个快速、简洁且高效的博客框架，具备Node.js 所带来的超快生成速度。 上百个页面在几秒内完成渲染；支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件；只需一条指令即可部署到 GitHub Pages, Heroku 或其他平台。
；同时，强大的 API 带来无限的可能。 支持数种模板引擎（EJS，Pug，Nunjucks等）；可以与现有的NPM包 (Babel, PostCSS, Less/Sass 等) 轻松地集成。
[Hexo中文官网](https://hexo.io/zh-cn/)

## 安装和使用说明文档

欢迎使用今安在的开源博客，查看[文档](https://github.com/ZhengqiZhuang/ZhengqiZhuang.github.io/new/main?filename=README.md)以获取更多信息。如果你在使用时遇到任何问题，你可以在故障排除中找到答案，也可以在GitHub上问我。
下面有个快速开始的版本，可以参考。

### 快速开始

生成一个新博客MD文件
```bash
$ hexo new "My New Post"
```
启动服务
```bash
$ hexo server
```
生成静态文件
```bash
$ hexo generate
```
部署到远程站点
```bash
$ hexo deploy
```

### 完整部署

首先，你需要下载node.js，git和npm，通过下面的命令行代码可以检查。
```bash
node -v
npm -v
git -v
```
如果你对npm的高级应用不太熟悉，建议使用下面的Hexo的全局部署：
```bash
npm install hexo-cli -g
# 初始化Hexo博客系统
hexo init
hexo install
hexo g
hexo s
```
下面需要搭建GitHub存储静态页面的仓库，我们需要新建仓库“你的用户名”.github.io，注意，这个仓库需要公开，你需要完成git的配置，确保本地的Hexo博客仓库可以和远端的仓库连接。你可以通过下面的代码测试连接：、
```bash
ssh -T git@github.com
```
测试无误后，你可以发布部署
```bash
npm install hexo-deployer-git --save
hexo g
hexo d
```
你新建文件，安装主题可以通过下面的代码进行：
```bash
hexo new NAME
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
npm install hexo-renderer-pug hexo-renderer-stylus --save --registry=http://registry.npmmirror.com
cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
hexo cl
hexo g
hexo s
```
## 本文档会在课程结束后继续完善
