# **Toast notification library & Custom element**
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/Hamza-chaouch/
notifications-lib-element/main)
[![npm](https://img.shields.io/badge/npm-1.0.2-green)](https://www.npmjs.com/package/@chcodes-hamza/
notifications-lib-element)


This is a library which provides the ability to use a custom element or to buid toast notifications
with many parameters to configurate it. 
it 's a custom element that enables drop zone to manage file.
A reusable web component.

![](preview.PNG)

## Usage 

### With npm
Install the package using npm or yarn

```bash
npm i  @chcodes-hamza/notifications-toast
# or
yarn add  @chcodes-hamza/notifications-toast
```

Then import it in your script

```js
import ' @chcodes-hamza/notifications-toast'
```

### With unpkg.com

```html
<script type="module" src="https://unpkg.com/@chcodes-hamza/notifications-toast"></script>
```

Then use the custom element in your html  `<toast-notifications> </toast-notifications>`.

```html
<toast-notifications options='{
      "text": "Custom element",
      "position": "top-right",
      "pauseOnHover": true,
      "pauseOnFocusLoss": true,
      "autoClose": 5000,
      "type":"sucess"
    }'></toast-notifications>
```