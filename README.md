# ClassPlay Guide

面向学生的英文 Blooket 入门网站。使用 HTML、CSS 和原生 JavaScript，部署时不需要安装依赖或运行构建命令。

## 先看网站

直接用浏览器打开 `site/index.html`，即可查看首页和问题助手。普通页面支持本地文件打开；404 页的资源和返回链接按正式网站根目录设计，应通过下面的 HTTP 预览检查。

如果电脑装了 Node.js，可在本项目文件夹中运行：

```powershell
node scripts/preview.mjs
```

然后打开：<http://127.0.0.1:4173/>。按 Ctrl+C 停止。这个地址只能供本机预览，不是公开网站。

端口被占用时，可以在 PowerShell 中指定其他端口：

```powershell
$env:CLASSPLAY_PREVIEW_PORT = '4174'
node scripts/preview.mjs
```

## 已实现

- 首页：加入游戏、加入遇到问题、个人练习三个入口。
- 加入指南：游戏号码、老师链接、二维码三种方式。
- 问题助手：缺少号码、号码不被接受、加载失败、作业链接打不开四种分支。
- 个人练习指南、关于网站、隐私说明和自定义 404 页。
- 手机布局、键盘操作、帮助结果焦点反馈。
- 即使 JavaScript 没加载，帮助页也保留四类文字建议和官方链接。
- 六个页面的标题、简介、canonical，以及 robots.txt 和站点地图。

网站不需要登录、不收集游戏号码或账号密码、不使用数据库或外部脚本。问题选择只控制当前页面显示。

## 在 Vercel 上线

按 [新手部署文档](docs/blooket-deployment-guide.md) 操作。关键设置：

| 设置 | 值 |
| --- | --- |
| Root Directory | `site` |
| Framework Preset | `Other` |
| Build Command | Override 打开，留空 |
| Output Directory | `.` |
| Install Command | 如出现该选项，Override 打开并留空 |
| Environment Variables | 不需要 |

只发布 `site`，不发布 docs、scripts、tests 或本说明文件。不添加把所有路径改成首页的规则，保留静态托管的 404 行为。

## 购买域名后的必做步骤

目前使用 https://blooketpractice-site.vercel.app/，以下 **8 个文件中的 13 处** 已统一使用该地址；购买并绑定自己的域名后，需要再次更新：

1. `site/index.html`、`join.html`、`help.html`、`solo.html`、`about.html`、`privacy.html`：每页一处 canonical，共 6 处。
2. `site/sitemap.xml`：六个页面地址，共 6 处。
3. `site/robots.txt`：Sitemap 地址，共 1 处。

全部换成实际的 HTTPS 主域名，保留各页面的 `.html` 路径，再上传并重新部署。不需要替换 Blooket 官方链接。文档中的演示域名可以保留。

在 PowerShell 中可运行下面的检查，列出尚未替换的位置：

```powershell
Get-ChildItem site -Recurse -File | Select-String 'https://blooketpractice-site.vercel.app'
```

当前 Vercel 地址可先用 Google Search Console 的 URL prefix 和 HTML tag 验证，再提交站点地图。首页已加入用户提供的验证标记，需保留。收录和排名留作后续观察。

## 开发验证

这些命令仅供开发检查，网站本身不依赖 Node.js：

```powershell
node --test tests/site.test.mjs
node --check site/assets/help.js
node --check scripts/preview.mjs
```

自动检查覆盖页面信息、导航和资源链接、六页站点地图、无脚本建议内容与深层 404 返回链接。浏览器中的人工检查记录见 [实现与验证记录](docs/implementation-verification.md)。

## 项目文档

- [需求和验收标准](docs/blooket-project-requirements.md)
- [Vercel、域名和 Google 提交步骤](docs/blooket-deployment-guide.md)
- [实现与验证记录](docs/implementation-verification.md)

代码仓库：https://github.com/xinyaoliao93/blooket_practice。网站已部署到 https://blooketpractice-site.vercel.app/。自购域名绑定、Google 所有权验证成功和站点地图提交仍待确认，详见 progress.md。
