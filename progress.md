# ClassPlay Guide 项目进度记录

更新时间：2026-10-23

## 项目背景

这是一个面向不会使用 Blooket 学生的英文练习网站。网站帮助学生加入老师的游戏、排查加入问题，或了解独自练习方式。目标是完成：功能可用、部署 Vercel、绑定域名、通过域名访问、验证 Google Search Console、提交站点地图。收录和排名不属于当前完成条件。

## 已确认范围

- 网站内容英文；需求和部署文档中文。
- 技术：静态 HTML、CSS、原生 JavaScript。
- 不做账号、数据库、密码输入、游戏房间、成绩、广告、统计、AI 接口。
- 发布目录：site/。
- 当前公开地址：https://blooketpractice-site.vercel.app/。自购域名尚未绑定，以后更换主地址时需同步更新 canonical、sitemap 和 robots。
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
- 初始网站提交已推送到 GitHub 的 main 分支：117ff47bae2dc8540861769f846c8432f39debd4；随后进度说明更新提交为 04e8a145db5fff61b7a9b232d47ca7566823a1fd。
- 推送过程没有要求网页登录、验证码或额外授权。

## 上传后待办

1. 本次修改提交并推送后，检查 Vercel 自动部署和线上首页验证标记。
2. 在 Google Search Console 的 HTML tag 验证方式中点击 Verify，等待明确显示所有权已验证。
3. 提交 https://blooketpractice-site.vercel.app/sitemap.xml，并记录提交状态。
4. 购买并绑定自己的域名仍是原练习的未完成项；更换主地址后同步更新网站地址，并为新地址重新验证和提交站点地图。

## Google Search Console 配置（2026-10-23）

- 用户已在 Vercel 部署网站，提供公开地址 https://blooketpractice-site.vercel.app/。
- 最初选择网域验证得到 DNS TXT；Vercel 免费子域名没有可供用户管理的 DNS，因此改用 URL prefix / 网址前缀。
- 当前要验证的资源：https://blooketpractice-site.vercel.app/。
- 用户提供 HTML tag，已加入 site/index.html 的 head，content 为 IyDOPsGvb1YDGFn4wCDl2Y3a9_xPfkji77vBAiMre4w。验证成功后仍需保留标记。
- 未把之前的 DNS TXT 内容写成网站文件，也不需要下载 HTML 验证文件。
- 六个页面 canonical、六条 sitemap 地址和 robots 的 Sitemap 地址共 13 处已由 example.com 换成当前 Vercel 地址。
- 已补充部署文档中的免费 Vercel 地址验证路线。
- 本次检查：现有 5/5 测试通过，帮助脚本和预览脚本语法检查通过；首页 head 中仅有一个 Google 验证标记且内容一致，发布目录不再包含 https://example.com；git diff --check 通过。
- 线上检查：Vercel 首页已公开返回相同的 Google 验证标记和 canonical；线上 sitemap.xml 已公开返回当前 Vercel 地址下的 6 个页面。
- 当前尚未确认 Google 所有权验证成功，也未确认站点地图已提交；不能把本次添加代码视为 Google 已验证。

## 重要信息

不要把密码、登录验证码、恢复码或付款信息写进仓库或进度文件。Google 网站验证 meta 标记是公开网页的一部分，不是账号密码。GitHub 登录或授权若被要求，停止并告知用户自行登录。
