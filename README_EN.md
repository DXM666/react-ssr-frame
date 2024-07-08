<div>
<a href="./README.md">简体中文</a> ｜ English
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

`react-ssr-frame` frame is an out-of-the-box server-side rendering framework for front-end frames in server-side rendered scenes.

This framework based on the service side rendering of himself for relevant practice and reference to the [ssr](https://github.com/zhangyuang/ssr) project, start to support a key, a key packaged. Maximize the development experience of developers, and minimize the development and deployment costs of applications.

## When should you choose Reacts-SSR-Frame

- Need to be used in the combination of `Node.js` and front-end framework, and other pure front-end framework `react-ssr-frame` framework is designed for server-side rendering scenes or `Node.js` and front-end combined scenes built framework
- Requires an out-of-the-box server-side rendering capability without the need to manually combine connections between different front-end frameworks and server-side frameworks
- Support for SEO, search engine optimization is the most common use case for server-side rendering. Since search engine crawlers can directly crawl the HTML rendered by the server, this is conducive to improving the index quality of web content, thus improving search rankings.
- Homogeneous applications, instead of traditional server-side rendering, react supports a set of code that can be run on both the server and the client. This simplifies the development process and allows some logic to be shared on both the server and client sides.

## Feature

🚀 indicates the functionality that has been implemented,⚠️ indicates the functions to be implemented later

| Milestone                                                                                   | Status |
| ------------------------------------------------------------------------------------------- | ------ |
| Support React18/Vue3                                                                        | ⚠️     |
| Support Webpack                                                                             | 🚀     |
| Support Vite                                                                                | ⚠️     |
| Server-side mount component development                                                     | 🚀     |
| Support front-end routing                                                                   | ⚠️     |
| Type friendly, fully embracing TS                                                           | 🚀     |
| Supports the use of less as the css preprocessor                                            | 🚀     |
| Supports minimal [data management] using context or [recoil](https://recoiljs.org/zh-hans/) | 🚀     |
| Support for docker deployment                                                               | 🚀     |

## Quick start

We provide a [create-react-ssr-app] (https://github.com/DXM666/create-react-ssr-app) scaffold to allow users to quickly create applications.

At present, only react+nestjs templates are provided, and the template types will be gradually enriched in the future

### Create project

```bash
$ npm install @react-ssr-frame/create -g
$ create-react-ssr my-ssr-project
$ cd my-ssr-project
$ yarn # yarn is recommended, or npm install can be used
$ yarn start
$ open http://localhost:3000 # Access application
$ yarn build # Resource construction
```

## Ecosystem

| Project                      | Status                                            | Description                                |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------ |
| [@react-ssr-frame/create]    | [![create-status]][@react-ssr-frame/create]       | Scaffolding for rapid application creation |
| [@react-ssr-frame/cli]       | [![cli-status]][@react-ssr-frame/cli]             | react ssr framework command line tool      |
| [@react-ssr-frame/compile]   | [![compile-status]][@react-ssr-frame/compile]     | react ssr framework compilation methods    |
| [@react-ssr-frame/construct] | [![construct-status]][@react-ssr-frame/construct] | Global method (context etc.)               |
| [@react-ssr-frame/core]      | [![core-status]][@react-ssr-frame/core]           | react ssr framework core method            |
| [@react-ssr-frame/types]     | [![types-status]][@react-ssr-frame/types]         | Types used in the react ssr framework      |
| [@react-ssr-frame/utils]     | [![utils-status]][@react-ssr-frame/utils]         | Public methods in the react ssr framework  |

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
