# umi project

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
