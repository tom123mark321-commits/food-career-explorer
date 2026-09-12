# GitHub Pages 部署说明

这个版本已经为 GitHub Pages 配置好，默认仓库名为：`food-career-explorer`。

## 1. 在 GitHub 新建仓库

仓库名请填写：

`food-career-explorer`

建议设为 Public，然后点击 Create repository。

## 2. 上传项目

把本目录中的所有文件上传到仓库根目录，包括：

- `.github/`
- `src/`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- 其他配置文件

注意：不要只上传 dist，也不要把最外层文件夹再套一层。

## 3. 开启 GitHub Pages

进入仓库：

Settings → Pages → Build and deployment → Source → 选择 `GitHub Actions`

## 4. 等待自动部署

回到仓库的 Actions 标签页，等待 `Deploy to GitHub Pages` 运行成功（绿色勾）。

## 5. 访问网址

网址格式：

`https://你的GitHub用户名.github.io/food-career-explorer/`

例如用户名是 `xiaoming`：

`https://xiaoming.github.io/food-career-explorer/`

以后每次把更新 push 到 main 分支，GitHub Actions 会自动重新构建并发布。

## 如果你换了仓库名

请同步修改 `vite.config.ts`：

```ts
base: '/新的仓库名/',
```

然后重新提交即可。
