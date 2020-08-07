---
title: Getting Started
---

# Getting Started

## Get ACE UIKit

### From Github
We'll post the package for each update on Github, or you can download it directly from there!

<a-button type="primary" href="https://github.com/zpfz/ace-uikit/releases/new" target="_blank">Download ACE UIKit</a-button>

### From CDN
Get the latest version from [unpkg.com/ace-uikit](https://unpkg.com/ace-uikit/) , and import JavaScript and CSS file in your page.
```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/ace-uikit/dist/ace.min.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/ace-uikit/dist/ace.min.js"></script>
```

### From NPM
You can also install through package management forms:

```bash
npm i ace-uikit
```

## Import ACE UIKit
Since some of the ACE UIKit components rely on jQuery(Version: 1.10.2), please add jQuery before introducing ACE UIKit, then introduce ACE UIKit related resources in your project:

```html
<!-- import CSS -->
<link rel="stylesheet" href="./ace-uikit/dist/ace.min.css">
<!-- import JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/zpfz/ace-uikit@master/test/js/jquery.min.js
"></script>
<script src="./ace-uikit/dist/ace.min.js"></script>
```

## Switch default theme
After importing the related resources, we need to switch the theme by setting the `data-theme` attribute of the `<html>` tag, like this:

```html
<html data-theme="gray-dark">
```
You can adapt to the four themes of Photoshop through different data-theme values:
- dark
- gray-dark
- medium-gray
- light

## Start coding
Now you have implemented ACE UIKit to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.