JavaScript Code Demo
=====

<p align="center">
  <a href="https://travis-ci.org/ryancui-/js-demo"><img alt="Travis Status" src="https://img.shields.io/travis/ryancui-/js-demo.svg?label=build&maxAge=43200"></a>
</p>

## What's this

一些奇奇怪怪的 JavaScript Code 片段都会 commit 到这里，也包括 leetcode 的一些 JavaScript 实现，也会放在这里。

- `bitcoin.js`: 一个比特币买入卖出的 Simulator
- `leetcode/*.js`: leetcode 上面 Problem 的练习

## Quick Start

```bash
// 安装依赖
$ npm install
```

## Documentation

### bitcoin.js

安装依赖后直接使用 `babel-node` 运行，所以需要全局装个 `babel` 呗

```bash
$ npm install babel-cli -g

$ babel-node bitcoin.js [money] [inPrice] [outPrice]
```

参数 | 含义
--- | ---
`money` | 总资金
`inPrice` | 买入价
`outPrice` | 卖出价
