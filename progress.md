# ClassPlay Guide 项目进度记录

更新时间：2026-10-23

## 项目背景

这是一个面向不会使用 Blooket 学生的英文练习网站。网站帮助学生加入老师的游戏、排查加入问题，或了解独自练习方式。目标是完成：功能可用、部署 Vercel、绑定域名、通过域名访问、验证 Google Search Console、提交站点地图。收录和排名不属于当前完成条件。

## 已确认范围

- 网站内容英文；需求和部署文档中文。
- 技术：静态 HTML、CSS、原生 JavaScript。
- 不做账号、数据库、密码输入、游戏房间、成绩、广告、统计、AI 接口。
- 发布目录：site/。
- 临时域名：example.com；购买真实域名后必须替换正式地址。
- Vercel 设置：Other；Root Directory 为 site；Build Command 留空；Output Directory 为 .

## 已完成

- site/index.html：首页和三个入口。
- site/join.html：游戏号码、老师链接、二维码加入指南。
- site/help.html：四类问题助手。
- site/solo.html：课堂、作业、个人练习指南。
- site/about.html、site/privacy.html、site/404.html。
- site/assets/styles.css、site/assets/help.js、site/favicon.svg。
- site/robots.txt、site/sitemap.xml。
- scripts/preview.mjs：本地 HTTP 预览服务器。
- tests/site.test.mjs：自动验收检查。
- README.md、需求文档、部署文档、实现验证记录和实施计划。

## 验证结果

- node --test tests/site.test.mjs：5/5 通过。
- node --check site/assets/help.js：通过。
- node --check scripts/preview.mjs：通过。
- 本地 HTTP：首页、六个正常页和资源返回 200。
- 深层未知地址返回 404，并显示自定义 404 页面。
- docs 文件不会被预览服务器公开。
- 浏览器实际验证四个帮助分支、返回、刷新、首页入口和常见问题展开。
- 360px 手机宽度无横向溢出。

## GitHub 上传任务

用户授权将当前代码上传到：

https://github.com/xinyaoliao93/blooket_practice.git

已执行：

- 本地初始化 Git 仓库，分支为 main。
- 创建 .gitignore。

已完成：

- 本地 Git 首次提交：117ff47 feat: add ClassPlay Blooket student guide。
- 添加 GitHub remote。
- 推送到 GitHub 的 main 分支，远程提交：117ff47bae2dc8540861769f846c8432f39debd4。
- 推送过程没有要求网页登录、验证码或额外授权。

## 上传后待办

1. 按部署文档从 GitHub 仓库导入 Vercel。
2. 购买并绑定真实域名。
3. 用真实域名替换 6 个 HTML canonical、sitemap.xml 六条地址、robots.txt 一条 Sitemap 地址，共 13 处。
4. 验证 Google Search Console。
5. 提交真实域名的 sitemap.xml。

## 重要信息

不要把密码、验证码、恢复码或付款信息写进仓库或进度文件。当前没有真实域名、Vercel 项目地址或 Search Console 验证记录。
