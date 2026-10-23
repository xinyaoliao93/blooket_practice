# Blooket 学生入门助手：新手部署文档

日期：2026-10-23 · 配套文件：[项目需求文档](blooket-project-requirements.md)

目标：功能可用 → 部署 Vercel → 绑定域名 → 域名可访问 → 验证 Google Search Console → 提交站点地图。

本文件是一份操作指南。配套网站第一版代码已在本项目 `site` 文件夹完成，可以直接检查现有文件，不需要重复让 AI 开发。尚未执行账号注册、域名购买和正式上线；从下面的检查和上传步骤继续即可。

## 0. 先看懂这几个名字

| 名字 | 你可以怎样理解 |
| --- | --- |
| GitHub | 存放和保存网站文件历史的地方 |
| Repository / 仓库 | GitHub 上的一个项目文件夹 |
| Vercel | 把网站文件变成公开网站的平台 |
| Deploy / 部署 | 把当前文件发布到网上 |
| Production / 正式环境 | 访客通过你的域名看到的版本 |
| Domain / 域名 | 你购买的网址，例如 example.com |
| DNS / 域名解析 | 告诉网络“这个域名的网站放在哪里”的设置 |
| HTTPS | 带加密连接的网址，以 https:// 开头 |
| Google Search Console | 证明网站归你管理，并向 Google 提交网址的工具 |
| Sitemap / 站点地图 | 一份告诉 Google“本站有哪些页面”的清单 |

本文中的 `example.com` 是演示域名，不是给你购买的建议，也不是你的实际网站。执行涉及域名的步骤时，必须换成自己买到的域名。

使用路线固定为：**原生 HTML/CSS/JavaScript → GitHub 网页上传 → Vercel → 自购域名 → Search Console**。不要求你先安装 Node.js 或学习命令行。

## 1. 准备账号和网站文件

### 1.1 准备三个账号

1. 在 [GitHub](https://github.com/) 注册个人账号并完成邮件验证。
2. 在 [Vercel](https://vercel.com/) 用自己的 GitHub 账号登录或注册。
3. 准备一个可以登录 [Google Search Console](https://search.google.com/search-console/) 的 Google 账号。

域名平台的账号在第 5 步购买域名时注册。所有账号均由你自己持有，密码不需要发给 AI 或写进文档。

Vercel 选择个人非商业练习适用的 **Hobby**。本项目默认不做广告、收费或商业推广；以后改变用途时再检查是否需要升级。不要为了本练习主动开通 Pro 试用或付费附加服务。[官方计划说明](https://vercel.com/docs/plans/hobby)

### 1.2 拿到网站文件

本项目已经提供 `site` 文件夹。先按下列结构检查文件；如果你只有文档而没有代码，才需要把配套需求文档第 13 节的开发指令交给 AI 或开发者。

拿到文件后，确认有以下内容：

```text
项目文件夹/
├─ docs/
│  ├─ blooket-project-requirements.md
│  └─ blooket-deployment-guide.md
└─ site/
   ├─ index.html
   ├─ join.html
   ├─ help.html
   ├─ solo.html
   ├─ about.html
   ├─ privacy.html
   ├─ 404.html
   ├─ robots.txt
   ├─ sitemap.xml
   ├─ favicon.svg
   └─ assets/
      ├─ styles.css
      └─ help.js
```

如果只拿到两份文档，或一个只展示外观的截图，说明还没有可部署的网站，先完成开发。不要把需求文档当作网站文件上传后就期望得到网站。

### 1.3 在自己电脑上检查

1. 用 Edge 或 Chrome 打开 `site/index.html`。
2. 点击首页的三个按钮，确认都能进入相应页面。
3. 在帮助页依次点击四个问题，每个结果都检查一次。
4. 点击 Choose another problem，确认能返回重新选择。
5. 刷新帮助页，确认恢复初始状态。
6. 阅读英文内容，确认没有“这里放教程”等临时文字。
7. 检查 About、Privacy 和所有官方链接。
8. 按配套需求文档的功能验收表检查其余项目，让开发者提供技术项的检查记录。

本地直接打开文件可以检查主要页面和互动，正式网址、404 状态、手机联网访问要到 Vercel 上线后检查。

**本步通过标准：** 网站功能可操作，文件齐全，内容完整。只有域名相关信息可以暂用明确标记的 `example.com`，正式发布前会统一替换。

## 2. 把文件保存到 GitHub

### 2.1 创建项目

1. 登录 GitHub。
2. 点击右上角加号，选择 **New repository**。
3. 项目名填写 `classplay-guide`。
4. 选择 **Private**，表示文件默认只给有权限的人看；不影响 Vercel 发布网站。
5. 勾选添加 README，方便进入项目文件页。
6. 点击 **Create repository**。

### 2.2 上传文件

1. 进入刚创建的项目。
2. 点击 **Add file → Upload files**。
3. 从电脑中把 `site` 和 `docs` 两个文件夹拖进去。拖的是这两个文件夹，不是包住它们的最外层文件夹，也不是 ZIP 压缩包。
4. 确认上传路径出现 `site/index.html`、`site/assets/styles.css` 和 `docs/…`。
5. 提交说明填写 `Add first website version`。
6. 对本个人练习项目，选择保存到 `main`，点击 **Commit changes**。
7. 如果界面只提供 **Propose changes**，完成后打开新建的 Pull request，点击 **Merge pull request** 并确认合并，让文件最终出现在 `main` 中。

不上传账号密码、付款资料或无关文件。本项目没有需要填写的 API 密钥。

**本步通过标准：** GitHub 项目切换到 `main` 后，第一层能看到 `site` 文件夹，点进去能看到 `index.html`。如果第一层是另一个项目文件夹，先调整上传层级。

参考：[GitHub 网页上传文件说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)。

## 3. 部署到 Vercel

### 3.1 导入 GitHub 项目

1. 登录 Vercel，在自己的 Hobby 空间中点击 **Add New → Project**，或 **New Project**。
2. 连接 GitHub；授权时选择刚创建的 `classplay-guide` 项目即可。
3. 找到该项目并点击 **Import**。
4. 如果列表没有项目，点击配置 GitHub 权限的入口，给 Vercel 访问这个项目的权限，再刷新。

### 3.2 按以下内容填写

| Vercel 设置名称 | 填什么 |
| --- | --- |
| Project Name | `classplay-guide`，如果被占用可增加自己的后缀 |
| Framework Preset | **Other** |
| Root Directory | 点击 Edit，选择 **site**，不要保留为整个项目 |
| Build Command | 打开 Override，内容留空；意思是不需要额外加工网站文件 |
| Output Directory | 打开 Override，填写一个英文句点 **`.`**；表示发布 site 文件夹里的文件 |
| Install Command | 如显示该设置，打开 Override 并留空；本项目无依赖需要安装 |
| Environment Variables | 不添加 |

这里的 `.` 是相对于上面选中的 `site` 而言。不要填 `site/site`，也不要填 Next.js、`npm run build` 或 `dist`。

上述设置以需求文档规定的文件结构为前提。如果开发者交付的是 React/Next.js 项目，让对方先按本需求调整，或明确重写配套部署步骤，不要混用两套设置。

Vercel 官方支持直接发布 HTML/CSS/JS，并通过 Other＋空 Build Command 跳过构建。[官方配置说明](https://vercel.com/docs/builds/configure-a-build)

### 3.3 开始部署

1. 点击 **Deploy**。
2. 等待部署结果。看到 **Ready** 或成功提示后，打开生成的网址。
3. 生成的网址通常以 `.vercel.app` 结尾，具体以你项目实际显示的地址为准。
4. 在项目 Settings 中核对正式发布分支为 `main`；位置通常在 Git 或 Environments 的 Production 设置中。
5. 保留这个地址，之后可以用它区分“网站本身出问题”还是“域名设置出问题”。

**本步通过标准：** Vercel 部署成功，`.vercel.app` 地址能看到英文网站，首页按钮和四类问题建议均正常。域名还没购买时，这一步不等于整个练习已完成。

参考：[Vercel 从 GitHub 部署](https://vercel.com/docs/git)。

## 4. 检查网上的第一版

在 Vercel 的网站地址上逐项操作：

- [ ] 首页、join.html、help.html、solo.html、about.html、privacy.html 都能直接打开。
- [ ] 每个页面刷新后仍然正常。
- [ ] 四个帮助分支的建议正确，返回按钮可用。
- [ ] 官方加入按钮确实前往 `https://play.blooket.com/`。
- [ ] 新开无痕窗口、退出 Vercel 登录后仍能访问。
- [ ] 用手机打开，文字和按钮不挤在一起。
- [ ] 输入 `/this-page-does-not-exist`，显示页面不存在提示；让开发者确认返回的是 404 状态。

如果访客打开正式网站必须先登录 Vercel，在项目 **Settings → Deployment Protection** 检查正式网站的访问限制。目标是让正式域名和正式网站公开访问，预览版本可以继续保留原有保护。设置变化后重新检查无痕窗口。[Vercel 访问保护说明](https://vercel.com/docs/deployment-protection)

当前 `sitemap.xml` 即使能打开，也不能把临时 `example.com` 地址提交给 Google。

## 5. 购买自己的域名

### 5.1 怎么选

1. 选择你能正常注册、付款，并能自行管理 DNS 设置的正规域名平台。
2. 按本站自己的名称找一个简短、易拼写的普通域名，优先考虑常见后缀。
3. 可以围绕 ClassPlay Guide 自己组合名称，但不能假定某个具体名字目前可购买。
4. 在付款页分别查看 **首年注册价** 和 **下一年续费价**。
5. 购买一个就够，不需要同时购买多个后缀。
6. 本练习不需要额外购买虚拟主机、网站制作套餐、企业邮箱或 SSL 证书。

本文不写固定域名价格，实际费用以你购买时的首年价、续费价及结算币种为准。

### 5.2 买完后做什么

1. 完成购买平台要求的邮箱或身份确认。
2. 确认域名状态正常，并能打开它的管理页。
3. 找到 **DNS / Manage DNS / 域名解析**。
4. 新域名先保留购买平台默认的 Nameservers，也就是“由谁管理域名记录”的设置。本教程采用保留 DNS 管理平台、添加网站记录的路线。
5. 在自己的日历中设置到期前提醒，并了解自动续费开关和扣费方式。

**本步通过标准：** 域名归你的账号管理，且你能新增 DNS 记录。

## 6. 把域名连接到 Vercel

本文默认选择 **不带 www 的地址作为主地址**，例如 `https://example.com`。

### 6.1 在 Vercel 添加域名

1. 进入 `classplay-guide` 项目。
2. 打开 **Settings → Domains**。
3. 点击 **Add Domain** 或相似的添加按钮。
4. 输入实际购买的域名，例如 `example.com`。这里不要加 `https://` 或页面路径。
5. 将它关联到 **Production**。
6. 如果 Vercel建议同时添加 `www.example.com`，可以添加；将 www 版本设置为跳转到不带 www 的版本。
7. 如果界面推荐相反的跳转方向，改成我们选定的方向，不要让两个域名互相跳转。

### 6.2 在域名平台新增记录

Vercel 会显示需要添加的 DNS 记录。**照你当前项目界面给出的值填写，不使用网上教程中的固定 IP 或别人的 CNAME 地址。**

| 字段 | 是什么 | 怎么填 |
| --- | --- | --- |
| Type / 类型 | 记录的种类 | 按 Vercel 当前提示，主域名通常为 A，www 通常为 CNAME |
| Host / Name / 主机记录 | 记录对应哪一部分网址 | 主域名一般填 `@` 或留空，按购买平台规则；www 一般填 `www` |
| Value / Target / 值 | 网址要指向的位置 | 完整复制 Vercel 给出的值 |
| TTL | 网络缓存这条记录的时间 | 先用平台默认或 Auto |

具体操作：

1. 登录域名平台，找到该域名的 DNS 管理页。
2. 按 Vercel 显示的记录逐条新增并保存。
3. 如果同一个主机名已有用于域名停放的 A、AAAA 或 CNAME 记录，按平台提示替换冲突的旧网站记录，不要重复指向两个网站。
4. 如果 Vercel 提示需要 TXT 验证，再按它给出的名称和值添加对应记录；不是每个新域名都会遇到这一步。
5. 返回 Vercel 的 Domains 页面，刷新或点击检查按钮。

DNS 记录要加在**真正管理解析的平台**。如果你已经把 Nameservers 改到其他服务，购买域名的平台可能已不再管理解析，应到当前 Nameservers 对应的平台修改。

### 6.3 验证连接

1. 等 Vercel 显示域名配置有效，例如 **Valid Configuration**。
2. 打开 `https://你的实际域名`。
3. 确认显示你的英文网站，没有证书错误。
4. 如果添加了 www，检查它会跳到你选定的主域名。
5. 用手机网络再试一次，并用无痕窗口访问一次。

DNS 生效时间不固定，可能很快，也可能需要更久。没立即生效时先检查字段和冲突记录，不要连续更换不同目标值。配置有效后，Vercel 会处理 HTTPS 证书；本项目不另行购买证书。

**本步通过标准：** 自购域名通过 HTTPS 直接打开网站，陌生访客无需登录，www 的跳转方向正确。

参考：[Vercel 添加域名](https://vercel.com/docs/domains/working-with-domains/add-a-domain)、[域名连接排查](https://vercel.com/docs/domains/troubleshooting)。

## 7. 把页面里的临时域名换成正式域名

绑定域名不会自动修改 HTML 和站点地图中的地址，必须再完成这一项。

1. 把实际主域名告诉开发者或 AI，例如“正式主地址是 https://我买到的域名，不带 www”。
2. 要求对方统一更新六个正常页面的 canonical、`sitemap.xml` 的六条地址、`robots.txt` 的 Sitemap 地址，以及其他临时站点地址。
3. 要求检查网站文件中不再残留 `example.com`、`localhost` 或作为正式地址使用的 `.vercel.app`。
4. 文档中的演示域名可以保留，不要把教程里的示例误当成网站配置。
5. 把修改后的 `site` 文件夹按原有路径上传到同一个 GitHub 项目的 `main`。同路径文件应被替换，不能额外套一层文件夹。
6. 提交说明填写 `Set production domain`，完成保存；如创建了 Pull request，合并到 `main`。
7. Vercel 会自动部署这次更新；等新部署 Ready 后再验证。

可以把这段话直接交给 AI：

> 我已经购买并绑定了正式域名，主地址是我提供的 HTTPS 地址。请检查并替换 site 文件夹内所有正式站点地址，保持六个正常页面的网址与需求文档一致。更新 canonical、robots.txt 和 sitemap.xml，确保没有临时域名、错误的 www 版本、noindex 或禁止全站抓取的规则；不要修改 Blooket 官方链接。交付修改后的文件和检查结果。

### 7.1 检查站点地图

在浏览器打开：

```text
https://你的实际域名/sitemap.xml
```

看见 XML 文字或树状结构是正常的，不需要做成漂亮页面。里面应只有这六个地址，全部替换成你的正式域名：

```text
https://example.com/
https://example.com/join.html
https://example.com/help.html
https://example.com/solo.html
https://example.com/about.html
https://example.com/privacy.html
```

逐个打开六个地址，确认都能正常访问。404 页面、Blooket 官方页面、Vercel 临时地址和需求文档不应出现在站点地图里。

### 7.2 检查抓取说明

打开：

```text
https://你的实际域名/robots.txt
```

应允许抓取正常页面，并列出你自己的完整站点地图地址。不能出现 `Disallow: /` 这样的禁止抓取全站规则。

此外请开发者确认：正常页面和服务器响应中没有阻止搜索收录的 `noindex`；仅仅允许 robots 抓取并不能抵消 noindex。

**本步通过标准：** 正式域名下的六页、站点地图和抓取说明均可公开读取，站点地图地址全部正确，页面主地址一致。

## 8. 验证 Google Search Console

### 当前 Vercel 免费地址的操作路线

当前网站是 https://blooketpractice-site.vercel.app/。可以先完成此地址的 Google 验证；自购域名绑定仍需另行完成。

1. 添加资源时，选择右边的 **URL prefix / 网址前缀**，完整输入 `https://blooketpractice-site.vercel.app/`，包含 `https://`。
2. 点击继续，在其他验证方式里展开 **HTML tag / HTML 标记**。
3. 首页 head 已加入用户提供的 meta 标记。将更新推送 GitHub 后，等待 Vercel 自动部署完成并确认线上标记存在。
4. 回到 **HTML tag** 这一栏点击 **Verify / 验证**，以 Google 明确显示所有权已验证为准。验证后保留首页标记。
5. 按第 9 节提交 `https://blooketpractice-site.vercel.app/sitemap.xml`。如果输入框已显示网站前半段，只填 `sitemap.xml`。

免费 Vercel 子域名不能由用户添加 Google 要求的 DNS TXT。不要将 DNS TXT 内容保存为网站文件代替验证。下方 8.1、8.2 是以后购买自己的域名、能够管理 DNS 时使用的路线。

### 8.1 添加域名

1. 打开 [Google Search Console](https://search.google.com/search-console/)，登录自己的 Google 账号。
2. 点击左上角网站选择区域，选择 **Add property / 添加资源**。首次使用时会直接看到添加界面。
3. 选择 **Domain / 网域** 这一类。
4. 只输入实际域名，例如 `example.com`；不加 `https://`、`www` 或页面路径。
5. 点击 **Continue / 继续**。

这种方式可以覆盖这个域名下的 HTTP、HTTPS 和子域名，适合本次练习。

### 8.2 新增 Google 给出的 TXT 记录

1. 如果 Google 提供自动连接域名平台的选项，可以按页面引导完成；否则选择手动添加 TXT 记录。
2. 复制 Google 提供的完整内容，它通常以 `google-site-verification=` 开头。
3. 到第 6 步使用的同一个 DNS 管理平台，新增以下记录：

| 字段 | 怎么填 |
| --- | --- |
| 类型 | TXT |
| 主机记录 / Name | 主域名，通常为 `@` 或空白，按该平台要求填写 |
| 值 / Content | 刚刚完整复制的 Google 验证内容 |
| TTL | 默认或 Auto |

4. 保存。保留已有的网站 A/CNAME 记录；TXT 是另外新增的一条记录。
5. 返回 Search Console，点击 **Verify / 验证**。
6. 如果未通过，先确认 Google 账号、域名、记录所在平台以及复制内容正确；新记录可能需要等待生效，再重新验证。
7. 验证成功后保留这条 TXT 记录，不因为“已经验证过”就删除。

**本步通过标准：** Search Console 明确显示 **Ownership verified / 所有权已验证**。只把验证代码复制出来还不算完成。

参考：[Google 网站所有权验证说明](https://support.google.com/webmasters/answer/9008080?hl=zh-Hans)。

## 9. 向 Google 提交站点地图

1. 在 Search Console 左上角选中刚验证的域名，避免选到其他网站。
2. 在左侧找到 **Indexing → Sitemaps / 编制索引 → 站点地图**。
3. 在新增站点地图的位置填写完整地址：

```text
https://你的实际域名/sitemap.xml
```

4. 如果界面已经固定显示了网址前半段，就只填写 `sitemap.xml`，避免重复两次域名。
5. 点击 **Submit / 提交**。
6. 确认下面出现了这条站点地图的提交记录，保存当时的日期和状态。
7. 状态显示 **Success / 成功** 时，核对它是你刚提交的完整地址。处理需要时间时可稍后再查看；不必反复重新提交同一个地址。

成功状态不要求“发现的网址数”立即等于 6，也不要求页面已经被收录。若显示 **Couldn't fetch / 无法获取**、XML 解析错误或其他明确错误，先按下方排错表修复，不把失败记录当作有效提交。

**本步通过标准：** 站点地图已经有效提交，地址可公开读取，且没有尚未修复的明确提交错误。如果 Google 仍处理中，记录提交证据和待观察状态；无需等待排名或收录。

Google 明确说明：提交站点地图只是帮助发现页面的线索，不能保证抓取或收录。[官方说明](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-CN)

## 10. 按现象排查问题

| 遇到的现象 | 先做什么 |
| --- | --- |
| Vercel 上线后整个网站都是 404 | 检查 GitHub 是否有 site/index.html；Root Directory 是否为 site；Output Directory 是否为 `.` |
| Vercel 报 npm 或找不到 package.json | 检查 Framework 是否为 Other；Build/Install 是否留空；本项目不需要 npm |
| 首页正常，其他页面打不开 | 检查文件名大小写、链接路径和上传层级；直接打开对应的 .html 地址 |
| 帮助页按钮没有反应 | 检查 assets/help.js 是否上传；让开发者检查脚本错误和引用路径 |
| CSS 丢失，页面只有文字 | 检查 assets/styles.css 路径、文件名大小写和上传状态 |
| GitHub 修改了，网站没有更新 | 确认修改已进入 main，Vercel 自动部署已成功，并且看到的是最新正式部署 |
| Vercel 地址正常，自己的域名打不开 | 检查 Domains 提示、DNS 记录是否加在真正管理解析的平台、是否存在冲突记录 |
| www 与不带 www 来回跳 | 在 Vercel Domains 中只保留一个方向的跳转 |
| 提示 HTTPS 证书错误 | 先确认 DNS 配置有效，再查看 Vercel 域名证书提示；不要反复购买证书 |
| 其他人访问被要求登录 Vercel | 检查正式域名是否关联 Production，以及正式网站访问保护设置 |
| Google 找不到 TXT 记录 | 检查添加平台、主机名和完整值；等待 DNS 生效后重试；不要覆盖网站 A/CNAME |
| sitemap.xml 打开的是首页 | 让开发者删除“所有路径都跳首页”的规则，并确保存在真实的 sitemap.xml 文件 |
| sitemap.xml 里还是 example.com | 完成第 7 步并等待最新部署成功 |
| 站点地图提示无法获取 | 无痕打开完整 HTTPS 地址；检查是否 404、需要登录、返回 HTML 或有网络访问限制；必要时让开发者查看公开响应 |
| 站点地图成功但 Google 没收录 | 记录并后续观察；这不阻止本次练习完成 |

向 AI 求助时可以发送“你正在第几步、看到的错误文字、对应的网址”，不要发送密码、付款信息或恢复码。

## 11. 后续更新和恢复旧版

### 更新内容

1. 在电脑上修改网站文件，或请 AI 修改。
2. 按功能验收表检查受到影响的页面。
3. 将修改后的文件按原路径上传到同一个 GitHub 项目的 `main`；同路径同名文件替换旧版本。
4. 如果本次删除了文件，在 GitHub 也删除对应文件；上传新文件不会自动删除旧文件。
5. 等 Vercel 自动部署成功，再通过自己的域名检查。
6. 新增或删除正常页面时，同步更新站点地图；同地址的站点地图通常不需要反复提交。

### 更新出错时

1. 最简单的方式：把本地保存的上一份正常网站文件按原路径重新上传到 `main` 并部署，同时处理新增或删除的文件。
2. 如果急需恢复访问，也可以在 Vercel 的部署列表找到最近的正常正式版本，使用界面提供的 **Rollback / Instant Rollback** 或恢复正式版本功能。
3. 在 Vercel 恢复访问后，仍要修复 GitHub 中的文件，否则下一次自动部署可能再次发布错误版本。

参考：[Vercel 回滚说明](https://vercel.com/docs/deployments/instant-rollback)。

## 12. 最终完成清单

- [ ] 需求文档中的功能验收通过。
- [ ] Vercel 正式部署成功，生成的网址能访问。
- [ ] 自己购买的域名已绑定，HTTPS 正常。
- [ ] 无痕窗口和手机能通过域名直接访问，不需要登录 Vercel。
- [ ] 六个正常页面、robots.txt、sitemap.xml 都能直接打开。
- [ ] 页面主地址和站点地图都使用最终域名，不残留临时站点地址。
- [ ] Search Console 的域名所有权验证成功。
- [ ] 站点地图已经提交，没有尚未修复的明确错误，并保存提交状态记录。
- [ ] 已记录域名到期时间和续费方式。

保存以下信息，便于以后继续维护：

| 要记录的信息 | 记录内容 |
| --- | --- |
| GitHub 项目 | 你的项目网址 |
| Vercel 项目 | 项目名称和管理页网址 |
| Vercel 正式部署 | 实际生成的 .vercel.app 地址 |
| 主域名 | 实际使用的完整 HTTPS 地址 |
| 域名续费 | 购买平台、到期日、续费价格和是否自动续费 |
| Google 验证 | 验证成功日期或截图 |
| 站点地图 | 完整地址、提交日期、当时的状态或截图 |

达到上面的标准，本次练习即完成。Google 收录、排名、访问量和后续内容扩充另行观察，不延长本次验收范围。
