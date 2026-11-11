# Ruiqi-test

高保真管理后台可交互产品原型（纯前端、mock 数据、无后端）。

## 技术栈
- React 18 + TypeScript
- Vite 5
- Ant Design 5
- React Router 6
- @ant-design/plots（图表，按需使用）

## 目录结构
```
src/
├── data/        mock 数据（统一入口）
├── components/  通用组件（图表/表格等按需建子目录）
├── layouts/     管理后台骨架
├── pages/       原型页面（按模块分子目录）
├── router/      路由配置
├── theme/       AntD5 ThemeConfig
└── styles/      全局样式
```

## 常用命令
- `npm run dev` 启动开发服务器
- `npm run build` 构建生产包
- `npm run build:single` 生成单文件交付物 `prototype.html`
- `npm run typecheck` 类型检查

## 交付方式
本原型提供两种访问模式,均基于同一份单文件 `prototype.html`(由 `npm run build:single` 生成,已内联全部代码/样式/数据,可离线运行)。

- **模式 1(离线,零安装)**:下载仓库 ZIP → 解压 → 双击根目录 `prototype.html` 即可在浏览器查看,无需 Node、无需构建、无需起服务。
- **模式 2(在线,待启用)**:后续将 `prototype.html` 托管到 GitHub Pages,并在 Release 说明中附上在线访问链接,对方点开即看。

> 每次修改原型后,重新运行 `npm run build:single` 并重新提交 `prototype.html` 即可更新交付物。
