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

### 功能特性
- **个人网站**：该项目提供了一个个人网站，展示个人信息、技能、项目经历和联系方式。
- **响应式设计**：网站在不同设备（如桌面、平板和手机）上均可良好显示，确保用户体验一致。
- **项目展示**：用户可以查看不同项目的详细信息，包括项目描述、技术栈和链接。
- **联系表单**：提供联系表单，用户可以直接通过网站与开发者联系。

### 项目结构
```
ZhengqiZhuang.github.io/
│
├── index.html          # 网站首页
├── about.html          # 关于我页面
├── projects.html       # 项目展示页面
├── contact.html        # 联系页面
├── styles/             # 存放样式文件的文件夹
│   └── style.css       # 主样式表
├── scripts/            # 存放JavaScript文件的文件夹
│   └── script.js       # 主脚本文件
└── images/             # 存放图片的文件夹
```
- `index.html`：网站的主页面，包含欢迎信息和导航菜单。
- `about.html`：介绍个人背景和专业技能。
- `projects.html`：展示各个项目的详细信息。
- `contact.html`：包含联系表单和开发者的联系方式。
- `styles/`：包含网站的 CSS 样式文件。
- `scripts/`：包含 JavaScript 代码，增加网站的交互性。
- `images/`：存放网站中使用的所有图片资源。

### 贡献指南
如果您想为该项目贡献代码，请遵循以下步骤：
1. Fork 该仓库。
2. 创建您自己的分支（`git checkout -b feature/YourFeature`）。
3. 提交您的更改（`git commit -m 'Add some feature'`）。
4. 推送到您的分支（`git push origin feature/YourFeature`）。
5. 提交拉取请求（Pull Request）。

我们欢迎任何形式的贡献，包括错误修复、功能改进和文档更新。

### 许可证信息
该项目使用 **MIT 许可证**。您可以自由使用、复制和修改代码，但请在使用本项目时保留原作者的信息和许可证声明。

### 联系方式
如果您对该项目有任何问题或建议，请随时联系我：
- **姓名**：庄正奇
- **电子邮件**：zzq18368326181@icloud.com

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
你需要修改文件_config.yaml，在最后添加下面的代码：
```yaml
deploy:
  type: git
  repository: git@github.com:Fomalhaut-Blog/Fomalhaut-Blog.github.io.git
  branch: main
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
