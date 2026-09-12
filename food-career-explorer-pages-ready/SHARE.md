# 不购买公共域名，如何分享网站

## 1. 同一 Wi‑Fi / 局域网（最简单）

现在也可以直接双击项目目录里的“启动网站.command”。它会自动启动网站、打开浏览器，并把本机/局域网/公网地址写入“当前访问地址.txt”。需要停止时双击“关闭网站.command”。

在项目目录执行：

```bash
npm install
npm run dev -- --host 0.0.0.0
```

终端会显示类似 `http://192.168.1.23:5173/` 的地址。把这个地址发给同一 Wi‑Fi 下的人即可。Mac 需要允许终端/Node 通过防火墙；访问者和你的电脑必须在同一网络，电脑休眠后网站会不可用。

## 2. 临时公网 HTTPS 链接（无需域名）

先启动 Vite，再安装并运行 Cloudflare Tunnel：

```bash
brew install cloudflared
cloudflared tunnel --url http://localhost:5173
```

它会生成一个形如 `https://xxxxx.trycloudflare.com` 的临时地址，复制给别人即可。该地址通常是临时的，重启 tunnel 后会变化；适合演示和收集反馈，不适合长期生产站点。

## 3. 长期公开访问（仍不买自己的域名）

执行 `npm run build` 生成 `dist/`，然后把 `dist/` 部署到 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages。平台会提供自己的子域名（例如 `xxx.vercel.app`），不需要购买域名。若以后需要固定品牌地址，再绑定自己的域名即可。

## 薪资数据说明

页面中的新增薪资是 2025–2026 年公开招聘岗位样本的区间估算，不是官方统一平均值；实际收入会受城市、企业规模、绩效、班次和学历影响。投递前应在招聘平台按目标城市逐条核验。
