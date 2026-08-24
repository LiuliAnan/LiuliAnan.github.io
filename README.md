# 刘洺远的个人作品集

面向 AI 应用开发、LLM 应用与 Python 后端岗位的个人作品集网站。

## 本地预览

```bash
pnpm install
pnpm dev
```

## 发布到 GitHub Pages

1. 在 GitHub 新建公开仓库 `LiuliAnan.github.io`。
2. 将本目录代码推送到仓库的 `main` 或 `master` 分支。
3. 打开仓库的 **Settings → Pages**。
4. 将 **Source** 设为 **GitHub Actions**。
5. 等待 Actions 中的部署任务完成。

发布地址为：<https://liulianan.github.io>

每次推送到 `main` 或 `master` 分支后，网站会自动重新构建和发布。

## 内容入口

- 页面内容：`src/pages/index.astro`
- 全局样式：`src/styles/global.css`
- 自动部署：`.github/workflows/deploy.yml`
