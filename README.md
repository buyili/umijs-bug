# umi project

修复软键盘收起后被顶起的元素没有复原

## 错误示例：  
<img width="200px" src="./images/修复前.gif" />


## 正确示例：  
<img width="200px" src="./images/修复后.gif" />

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

解决方式：

```
import {Button} from 'react-weui'
```
改为
```
import ReactWeui from 'react-weui';
const { Button, FooterText } = ReactWeui;
```
