## 搭建后台管理系统模板

从 0 开始搭建一个`vue3`版本的后台管理系统。
一个项目要有一个统一的规范，需要使用`eslint` + `stylelint` + `prettier` 来对代码质量做检测盒修复，使用`husky` 来做 `commit` 拦截，使用 `commitlint` 来统一提交规范，使用 `preinstall` 来统一包管理工具。

### 技术选型

- vue3: 渐进式框架
- vite: 构建化工具
- typescript: typescript 技术栈
- vue-router: 路由管理
- pinia: 集中式状态管理
- element-plus: UI 组件库
- axios: 网络交互
- echarts: 数据可视化大屏 ...

### 学习收获

- 掌握规范开发项目
- 掌握如何封装后台管理系统模板
- 掌握菜单权限和按钮权限
- 掌握数据大屏该如何解决
- 掌握请求响应拦截器该如何二次封装
- 掌握 svg 矢量图如何在项目中使用
- 掌握主题颜色切换与暗黑模式的切换

### 环境准备

- node v16
- pnpm 8

### 初始化项目

本项目使用`vite`进行构建
vite 官方中文文档参考：[cn.vitejs.dev/guide/](https://cn.vitejs.dev/guide/)

`pnpm:performant npm` ，意味“高性能的 npm”。`[pnpm](https://so.csdn.net/so/search?q=pnpm&spm=1001.2101.3001.7020)由 npm/yarn 衍生而来，解决了 npm/yarn 内部潜在的 bug，极大的优化了性能，扩展了使用场景。被誉为“最先进的包管理工具”

pnpm 安装指令

```
npm i -g pnpm
```

项目初始化命令:

```
pnpm create vite
```

进入到项目根目录 pnpm install 安装全部依赖.安装完依赖运行程序:pnpm run dev

运行完毕项目跑在http://127.0.0.1:5173/,可以访问你得项目啦
