---
title: Getting Started
---

# Getting Started

## Get ACE UIKit

### From Github
We'll post the package for each update on Github, or you can download it directly from there!

<a-button type="primary" href="https://github.com/zpfz/ace-uikit/releases" target="_blank">Download ACE UIKit</a-button>

### From CDN
Get the latest version from [unpkg.com/ace-uikit](https://unpkg.com/ace-uikit/dist/) , and import JavaScript and CSS file in your page.

## Get CEP themeSwitcher
You need to use `themeSwitcher.js` to synchronize CEP themes, and you can download it from [themeSwitcher.js](https://github.com/zpfz/ace-uikit/tree/master/lib)



## Import ACE UIKit
Since some of the ACE UIKit components rely on jQuery(Version: `1.10.2`), please add jQuery before importing ACE UIKit, then import ACE UIKit related resources in your project:

```html
<!-- import JavaScript -->
<script type="text/javascript" src="./js/jquery.min.js"></script>
<!-- through themeSwitcher.js injection ACE style -->
<script type="text/javascript" src="./js/themeSwitcher.js"></script>  
<script type="text/javascript" src="./js/ace.min.js"></script>
```

## Switch theme
After importing the related resources, we need to switch the theme from `themeSwitcher.js`, find similar code in `themeSwitcher.js`:

```js
addSheetFile("./css/ace.light.css");
addSheetFile("./css/ace.medium.gray.css");
addSheetFile("./css/ace.gray.dark.css");
addSheetFile("./css/ace.dark.css");
```
Then change the path in brackets to the correct path of ACE style library.

## Start coding
Now you have implemented ACE UIKit to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.