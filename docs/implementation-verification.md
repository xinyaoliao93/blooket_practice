# 实现与验证记录

日期：2026-10-23

## 已完成

- 已创建 `site/` 下的 6 个正常页面、1 个自定义 404 页面、共享 CSS、帮助助手脚本、favicon、robots.txt 和 sitemap.xml。
- 首页三个入口、加入指南、独自练习指南、关于和隐私页面均使用英文。
- 帮助助手包含四个需求分支：缺少游戏号码、号码不被接受、页面无法加载、作业链接打不开。
- 帮助页没有脚本时仍显示四个问题的文字建议和相关官方链接。
- 问题结果只显示当前分支；选择结果后标题获得焦点；返回选择后焦点回到原按钮；刷新会回到第一步。
- 没有加入账号、数据库、密码输入、统计、广告、外部脚本或 Blooket 数据请求。
- `example.com` 仍是临时域名示例；购买真实域名后按部署文档替换 13 处正式站点地址。

## 自动检查

执行命令：

```text
node --test tests/site.test.mjs
node --check site/assets/help.js
node --check scripts/preview.mjs
```

结果：

- 5/5 测试通过。
- JavaScript 语法检查通过。
- 预览脚本语法检查通过。

自动测试覆盖：6 个正常页面的标题、简介、英文语言标记、单一主标题、导航、隐私限制；所有页面资源和片段链接；站点地图与 canonical 对应关系；robots 站点地图引用；四类无脚本帮助答案；自定义 404 入口和不进入站点地图。

## HTTP 预览检查

通过 `node scripts/preview.mjs` 启动 `http://127.0.0.1:4173/` 后检查：

| 地址 | 结果 |
| --- | --- |
| `/`、6 个正常页面 | HTTP 200 |
| CSS、JavaScript、sitemap.xml、robots.txt | HTTP 200 |
| `/missing/deep/page` | HTTP 404，并返回 404 页面 |
| `/docs/blooket-project-requirements.md` | HTTP 404，不暴露文档文件 |

## 浏览器人工检查

- 首页三个主要入口分别到 `join.html`、`help.html`、`solo.html`。
- 问题助手四个分支逐一选择后，只显示对应答案；答案标题获得焦点。
- `Choose another problem` 返回选择状态，并把焦点还给原问题按钮。
- 刷新问题助手后恢复第一步。
- 首页常见问题可以展开和收起。
- 深层 404 页的返回首页按钮能回到首页。
- 360px 宽度检查通过：各正常页面 `scrollWidth` 等于文档宽度，没有横向溢出；问题助手的选择页和结果页按钮可见。
- 浏览器控制台没有 error 或 warn。

## 尚未执行

- GitHub 仓库创建或上传。
- Vercel 正式部署。
- 购买和绑定真实域名。
- 用真实域名验证 Google Search Console。
- 向 Google 提交真实站点地图。

这些步骤需要用户自己的账号、域名和 DNS 权限，按 [新手部署文档](blooket-deployment-guide.md) 继续执行。收录和排名不在本次实现验证范围。
