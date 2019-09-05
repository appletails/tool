# tool
[TOC]

## 简介
自用手撸vue的一些基础配置

## 更新记录
* 2019/09/05
    * 删除了Card
    * 新增了计算html的rem的值来适配移动端的自适应
    * cdn引入vue等库
    * 将路由的配置拆分开，便于引入循环出导航
  
* 2019/07/12
    * 新增一个Card

## less全局配置（sass也可，同理）
* 安装less<br>
    `npm install less less-loader --save-dev` [配置module](https://blog.csdn.net/weixin_40776188/article/details/85067568)

* [配置Less全局变量](https://www.jianshu.com/p/ab9ab999344b)<br>
    1、安装sass-resources-loader
    > npm install sass-resources-loader --save-dev

    2、在项目build文件夹里找到utils.js ，定位到下边代码
    ```javascript
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
    ```
    2、把上面这句less: generateLoaders('less'),改成如下
    ```javascript
    less: generateLoaders('less').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/assets/css/global.less')//这里按照你的文件路径填写
        }
      }
    )
    ```
* 全局.less文件位置<br>
`src/assets/css/global.less`

## 过滤器
* 百分比保留两位小数
```javascript
cent(int)
/* 百分比保留两位小数 */
```

* 时间戳转换日期
```javascript
datetamp(time)
/*
  时间戳转换日期
  返回格式："2019-06-11 15:42:03"
*/
```

* 日期转换时间戳
```javascript
timestamp(data)
/*
  日期转换时间戳
  返回 10位时间戳
*/
```

## Modal插件(全局弹窗)
* 相关文件

name | path | other
---|---|---
Modal | src/components/Modal | 主要的视图文件index.vue，包括dom和css以及$on
ModalBus | src/utils/Modal | 主要的事件线ModalBus.js以及所有的相关事件文件index.js
App.vue | src/App.vue | 引入了Modal并使用，在beforeUpdate的生命周期上调用了remove()
main.js | src/main.js | 引入了$Modal并在全局use

* api

`使用方法 $Modal.info `

属性 | 说明 | 参数
---|---|---
info | 带有确定按钮的弹窗 | message[, title, callback]
alert | 自动关闭的弹窗 | message[, title, timeout]
confirm | 带有确认和取消按钮的弹窗 | message[, title], callback, options
remove | 清除弹窗 | 无
