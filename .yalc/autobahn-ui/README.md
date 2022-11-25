# autobahn-ui

> Made fromscratch

## Install 

```bash
npm install || npm i 
```

```bash
npm run build
```

```bash
npm run storybook
```

### Build and deploy in local

```bash
npm run yalc:build
```

## How to use

```bash
yalc add autobahn-ui
```

```bash
npm install --save autobahn-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'autobahn-ui'
import 'autobahn-ui/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```