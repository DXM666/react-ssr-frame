<div>
简体中文 ｜ <a href="./README_EN.md">English</a>
</div>

<h1 align="center"> react-ssr-frame </h1>

<div align="center">
  <strong>A simple and lightweight react server-side rendering solution.</strong>
</div>
<br />
<div align="center">
<a href="https://github.com/DXM666/react-ssr-frame" target="_blank"><img src="https://img.shields.io/badge/node-%3E=14-green.svg?color=4dc71f" alt="Node" ></a>
 <a href="https://github.com/DXM666/react-ssr-frame" target="_blank"><img src="https://img.shields.io/badge/react-=17-green.svg?color=4dc71f" alt="React" ></a>
</div>
<br />

`react-ssr-frame` 框架是为前端框架在服务端渲染的场景下所打造的开箱即用的服务端渲染框架。

此框架基于本人对于服务端渲染的相关实践以及借鉴了 [ssr](https://github.com/zhangyuang/ssr) 项目，支持一键启动，一键打包。最大程度提升开发者的开发体验，将应用的开发，部署成本降到最低。

## 什么情况下你应该选择 react-ssr-frame 框架

- 需要在 `Node.js` 与前端框架结合的场景使用，与其他纯前端的框架不同 `react-ssr-frame` 框架是专为服务端渲染场景或者 `Node.js` 与前端结合的场景打造的框架
- 需要一个开箱即用的服务端渲染能力，不需要手动去组合不同的前端框架与服务端框架之间的联系
- 支持 SEO，搜索引擎优化是服务端渲染最常见的使用场景。由于搜索引擎爬虫可以直接抓取服务器渲染的 HTML，这有利于提高网页内容的索引质量，从而提升搜索排名。
- 同构应用，相比于传统的服务端渲染，react 支持一套代码可以在服务器和客户端运行。这可以简化开发流程，并允许在服务器端和客户端共享某些逻辑。

## Feature

🚀 表示已经实现的功能，⚠️ 表示后续会实现的功能

| 里程碑                                                                           | 状态 |
| -------------------------------------------------------------------------------- | ---- |
| 支持 React18/Vue3                                                                | ⚠️   |
| 支持 Webpack                                                                     | 🚀   |
| 支持 Vite                                                                        | ⚠️   |
| 服务端挂载组件开发                                                               | 🚀   |
| 支持前端路由                                                                     | ⚠️   |
| 类型友好，全面拥抱 TS                                                            | 🚀   |
| 支持使用 less 作为 css 预处理器                                                  | 🚀   |
| 支持使用 context 或 [recoil](https://recoiljs.org/zh-hans/) 实现极简的[数据管理] | 🚀   |
| 支持 docker 部署                                                                 | 🚀   |

## 快速开始

我们提供了 [create-react-ssr-app](https://github.com/DXM666/create-react-ssr-app) 脚手架来让用户可以迅速的创建应用。

目前只提供了 react+nestjs 模板，后续会逐渐丰富模板类型

### 创建项目

```bash
$ npm install @react-ssr-frame/create -g
$ create-react-ssr my-ssr-project
$ cd my-ssr-project
$ yarn # 建议使用 yarn, 也可以 npm install
$ yarn start
$ open http://localhost:3000 # 访问应用
$ yarn build # 资源构建
```

## 生态系统

| Project                      | Status                                            | Description                |
| ---------------------------- | ------------------------------------------------- | -------------------------- |
| [@react-ssr-frame/create]    | [![create-status]][@react-ssr-frame/create]       | 脚手架，用于快速创建应用   |
| [@react-ssr-frame/cli]       | [![cli-status]][@react-ssr-frame/cli]             | react ssr 框架命令行工具   |
| [@react-ssr-frame/compile]   | [![compile-status]][@react-ssr-frame/compile]     | react ssr 框架编译相关方法 |
| [@react-ssr-frame/construct] | [![construct-status]][@react-ssr-frame/construct] | 全局方法（context 等）     |
| [@react-ssr-frame/core]      | [![core-status]][@react-ssr-frame/core]           | react ssr 框架核心方法     |
| [@react-ssr-frame/types]     | [![types-status]][@react-ssr-frame/types]         | react ssr 框架中用到的类型 |
| [@react-ssr-frame/utils]     | [![utils-status]][@react-ssr-frame/utils]         | react ssr 框架中的公共方法 |

[create-status]: https://img.shields.io/npm/v/@react-ssr-frame/create.svg
[cli-status]: https://img.shields.io/npm/v/@react-ssr-frame/cli.svg
[compile-status]: https://img.shields.io/npm/v/@react-ssr-frame/compile.svg
[construct-status]: https://img.shields.io/npm/v/@react-ssr-frame/construct.svg
[core-status]: https://img.shields.io/npm/v/@react-ssr-frame/core.svg
[types-status]: https://img.shields.io/npm/v/@react-ssr-frame/types.svg
[utils-status]: https://img.shields.io/npm/v/@react-ssr-frame/utils.svg
[@react-ssr-frame/create]: https://github.com/DXM666/create-react-ssr-app
[@react-ssr-frame/cli]: https://github.com/DXM666/react-ssr-frame/tree/main/packages/cli
[@react-ssr-frame/compile]: https://github.com/DXM666/react-ssr-frame/tree/main/packages/compile
[@react-ssr-frame/construct]: https://github.com/DXM666/react-ssr-frame/tree/main/packages/construct
[@react-ssr-frame/core]: https://github.com/DXM666/react-ssr-frame/tree/main/packages/core
[@react-ssr-frame/types]: https://github.com/DXM666/react-ssr-frame/tree/main/packages/types
[@react-ssr-frame/utils]: https://github.com/DXM666/react-ssr-frame/tree/main/packages/utils
