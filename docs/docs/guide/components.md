---
title: Components
sidebarDepth: 2
---


<template>

# Components

<a-alert type="info" show-icon>
 <div slot="message">
    Due to the style conflict between ACE and Antdocs theme, the effect demonstration here is subject to actual application.
  </div>
</a-alert>

## Button

Commonly used button.

### Regular Button

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <button class="ace-btn">Button</button>
  <button class="ace-btn" disabled>Button</button>
</div>

::: details Show Code

```html
<button class="ace-btn">Button</button>
<button class="ace-btn" disabled>Button</button>
```

:::

### Action Button

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <button class="ace-btn--action">Button</button>
  <button class="ace-btn--action" disabled>Button</button>
  <button class="ace-btn--error">Button</button>
  <button class="ace-btn--error" disabled>Button</button>
</div>

::: details Show Code

```html
<button class="ace-btn--action">Button</button>
<button class="ace-btn--action" disabled>Button</button>
<button class="ace-btn--error">Button</button>
<button class="ace-btn--error" disabled>Button</button>
```

:::

### Icon Button

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <button class="ace-btn">
    <img src="https://s1.ax1x.com/2020/07/30/aM3wMq.png">
    <span>Photoshop</span>
  </button>
  <button class="ace-btn" disabled>
    <img src="https://s1.ax1x.com/2020/07/30/aM3wMq.png">
    <span>Photoshop</span>
  </button>
</div>

::: details Show Code

```html
<button class="ace-btn">
  <img src="https://s1.ax1x.com/2020/07/30/aM3wMq.png" />
  <span>Photoshop</span>
</button>
<button class="ace-btn" disabled>
  <img src="https://s1.ax1x.com/2020/07/30/aM3wMq.png" />
  <span>Photoshop</span>
</button>
```

:::

### Button Group

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <div class="ace-btn-grp">
    <button class="ace-btn">Button</button>
    <button class="ace-btn active">Button</button>
    <button class="ace-btn">Button</button>
  </div>
  <p></p>
  <div class="ace-btn-grp">
    <button class="ace-btn">Button</button>
    <button class="ace-btn">Button</button>
    <button class="ace-btn">Button</button>
  </div>
</div>

::: details Show Code

```html
<div class="ace-btn-grp">
  <button class="ace-btn">Button</button>
  <button class="ace-btn active">Button</button>
  <button class="ace-btn">Button</button>
</div>
<div class="ace-btn-grp">
  <button class="ace-btn">Button</button>
  <button class="ace-btn">Button</button>
  <button class="ace-btn">Button</button>
</div>
```

:::

## CheckBox

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <label class="ace-checkbox">
    <span class="ace-checkbox-checkmark"></span>
    <input name="Fruit" type="checkbox" data-style="checkbox">
    <span class="ace-checkbox-text">PS</span>
  </label>
  <label class="ace-checkbox checkbox-disabled">
    <span class="ace-checkbox-checkmark"></span>
    <input name="Fruitx" type="checkbox" data-style="checkbox">
    <span class="ace-checkbox-text">AI</span>
  </label>
  <label class="ace-checkbox checkbox-checked">
    <span class="ace-checkbox-checkmark"></span>
    <input name="Fruitx" type="checkbox" data-style="checkbox" checked>
    <span class="ace-checkbox-text">AE</span>
  </label>
  <label class="ace-checkbox checkbox-checked checkbox-disabled">
    <span class="ace-checkbox-checkmark"></span>
    <input name="Fruitx" type="checkbox" data-style="checkbox" checked>
    <span class="ace-checkbox-text">PR</span>
  </label>
</div>

::: details Show Code

```html
<label class="ace-checkbox">
  <span class="ace-checkbox-checkmark"></span>
  <input name="Fruit" type="checkbox" data-style="checkbox" />
  <span class="ace-checkbox-text">PS</span>
</label>
<label class="ace-checkbox checkbox-disabled">
  <span class="ace-checkbox-checkmark"></span>
  <input name="Fruitx" type="checkbox" data-style="checkbox" />
  <span class="ace-checkbox-text">AI</span>
</label>
<label class="ace-checkbox checkbox-checked">
  <span class="ace-checkbox-checkmark"></span>
  <input name="Fruitx" type="checkbox" data-style="checkbox" checked />
  <span class="ace-checkbox-text">AE</span>
</label>
<label class="ace-checkbox checkbox-checked checkbox-disabled">
  <span class="ace-checkbox-checkmark"></span>
  <input name="Fruitx" type="checkbox" data-style="checkbox" checked />
  <span class="ace-checkbox-text">PR</span>
</label>
```
:::

::: warning
Here the interaction conflicts with the documentation, go to **codepen.io** to see it.  <a-button type="primary" size="small" href="https://codepen.io/zpfz/pen/dyGBqaE" style="color:#fff" target="_blank">Demo</a-button>
:::

## Radio

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <label class="ace-radio">
    <span class="ace-radio-checkmark"></span>
    <input name="Fruitx" type="radio" data-style="radio">
    <span class="ace-radio-text">PS</span>
  </label>
  <label class="ace-radio">
    <span class="ace-radio-checkmark"></span>
    <input name="Fruitx" type="radio" data-style="radio">
    <span class="ace-radio-text">AI</span>
  </label>
  <label class="ace-radio radio-checked radio-disabled">
    <span class="ace-radio-checkmark"></span>
    <input name="Fruit" type="radio" data-style="radio" checked>
    <span class="ace-radio-text">AE</span>
  </label>
</div>

::: details Show Code

```html
<label class="ace-radio">
  <span class="ace-radio-checkmark"></span>
  <input name="Fruitx" type="radio" data-style="radio" />
  <span class="ace-radio-text">PS</span>
</label>
<label class="ace-radio">
  <span class="ace-radio-checkmark"></span>
  <input name="Fruitx" type="radio" data-style="radio" />
  <span class="ace-radio-text">AI</span>
</label>
<label class="ace-radio radio-checked radio-disabled">
  <span class="ace-radio-checkmark"></span>
  <input name="Fruit" type="radio" data-style="radio" checked />
  <span class="ace-radio-text">AE</span>
</label>
```

:::

::: warning
Here the interaction conflicts with the documentation, go to **codepen.io** to see it.  <a-button type="primary" size="small" href="https://codepen.io/zpfz/pen/dyGBqaE" style="color:#fff" target="_blank">Demo</a-button>
:::


## Switch

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <label class="ace-switch">
    <span class="ace-switch-checkmark"></span>
    <input name="switch" type="checkbox" data-style="switch" />
  </label>
  <label class="ace-switch switch-checked">
    <span class="ace-switch-checkmark"></span>
    <input name="switch" type="checkbox" data-style="switch" checked />
  </label>
  <label class="ace-switch switch-disabled">
    <span class="ace-switch-checkmark"></span>
    <input name="switch" type="checkbox" data-style="switch" checked />
  </label>
</div>

::: details Show Code

```html
<label class="ace-switch">
  <span class="ace-switch-checkmark"></span>
  <input name="switch" type="checkbox" data-style="switch" />
</label>
<label class="ace-switch switch-checked">
  <span class="ace-switch-checkmark"></span>
  <input name="switch" type="checkbox" data-style="switch" checked />
</label>
<label class="ace-switch switch-disabled">
  <span class="ace-switch-checkmark"></span>
  <input name="switch" type="checkbox" data-style="switch" checked />
</label>
```

:::

::: warning
Here the interaction conflicts with the documentation, go to **codepen.io** to see it.  <a-button type="primary" size="small" href="https://codepen.io/zpfz/pen/dyGBqaE" style="color:#fff" target="_blank">Demo</a-button>
:::


## Card

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
    <div class="ace-card">A lightweight UI framework for Adobe CEP. </div>
</div>

::: details Show Code

```html
<div class="ace-card">A lightweight UI framework for Adobe CEP.</div>
```

:::

## Badge

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <span class="ace-badge--blue">VIP</span>
  <span class="ace-badge--green">VIP</span>
  <span class="ace-badge--gray">VIP</span>
  <span class="ace-badge--warm">VIP</span>
  <span class="ace-badge--red">VIP</span>
</div>

::: details Show Code

```html
<span class="ace-badge--blue">VIP</span>
<span class="ace-badge--green">VIP</span>
<span class="ace-badge--gray">VIP</span>
<span class="ace-badge--warm">VIP</span>
<span class="ace-badge--red">VIP</span>
```

:::

## Notification

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <div class="ace-notification--info">A lightweight UI framework for Adobe CEP. </div>
  <p></p>
  <div class="ace-notification--success">A lightweight UI framework for Adobe CEP. </div>
  <p></p>
  <div class="ace-notification--warning">A lightweight UI framework for Adobe CEP. </div>
  <p></p>
  <div class="ace-notification--error">A lightweight UI framework for Adobe CEP. </div>
</div>

::: details Show Code

```html
<div class="ace-notification--info">
  A lightweight UI framework for Adobe CEP.
</div>
<div class="ace-notification--success">
  A lightweight UI framework for Adobe CEP.
</div>
<div class="ace-notification--warning">
  A lightweight UI framework for Adobe CEP.
</div>
<div class="ace-notification--error">
  A lightweight UI framework for Adobe CEP.
</div>
```

:::

## Range

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <input type="range" class="ace-range">
  <input type="range" class="ace-range" disabled>
</div>

::: details Show Code

```html
<input type="range" class="ace-range" />
<input type="range" class="ace-range" disabled />
```

:::

## Textinput

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <input type="text" class="ace-textinput" placeholder="text" value="">
  <input type="text" class="ace-textinput" placeholder="text" value="" disabled>
</div>

::: details Show Code

```html
<input type="text" class="ace-textinput" placeholder="text" value="" />
<input type="text" class="ace-textinput" placeholder="text" value="" disabled />
```

:::

## Textarea

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
  <textarea class="ace-textarea" rows="6" cols="36" placeholder="Textarea"></textarea>
  <textarea class="ace-textarea" rows="6" cols="36" placeholder="Textarea" disabled></textarea>
</div>

::: details Show Code

```html
<textarea
  class="ace-textarea"
  rows="6"
  cols="36"
  placeholder="Textarea"
></textarea>
<textarea
  class="ace-textarea"
  rows="6"
  cols="36"
  placeholder="Textarea"
  disabled
></textarea>
```

:::

## Select

<div class="demo-wrap" :style="{backgroundColor: bgColor}">
 	<div class="ace-select">
		<div class="ace-select-frame">
			<input type="text" readonly autocomplete="off" placeholder="Pick a theme please" class="ace-input-select">
			<span class="ace-select-suffix">
				<i></i>
			</span>
		</div>
    <dl class="ace-select-dropdown">
      <dt>Dark tone</dt>
      <dd>Dark</dd>
      <dd>Gray Dark</dd>
      <dt>White tone</dt>
      <dd>Medium Gray</dd>
      <dd>Light</dd>
    </dl>
	</div>
  <p></p>
  <div class="ace-select">
		<div class="ace-select-frame">
			<input type="text" readonly autocomplete="off" placeholder="Pick a theme please" class="ace-input-select">
			<span class="ace-select-suffix">
				<i></i>
			</span>
		</div>
		<dl class="ace-select-dropdown">
			<dd>Dark</dd>
			<dd>Gray Dark</dd>
			<dd>Medium Gray</dd>
			<dd>Light</dd>
		</dl>
	</div>
  <p></p>
  <div class="ace-select select-disabled">
		<div class="ace-select-frame">
			<input type="text" readonly autocomplete="off" placeholder="Pick a theme please" class="ace-input-select">
			<span class="ace-select-suffix">
				<i></i>
			</span>
		</div>
		<dl class="ace-select-dropdown">
			<dd>Dark</dd>
			<dd>Gray Dark</dd>
			<dd>Medium Gray</dd>
			<dd>Light</dd>
		</dl>
	</div>
</div>

::: details Show Code

```html
<div class="ace-select">
  <div class="ace-select-frame">
    <input
      type="text"
      readonly
      autocomplete="off"
      placeholder="Pick a theme please"
      class="ace-input-select"
    />
    <span class="ace-select-suffix">
      <i></i>
    </span>
  </div>
  <dl class="ace-select-dropdown">
    <dt>Dark tone</dt>
    <dd>Dark</dd>
    <dd>Gray Dark</dd>
    <dt>White tone</dt>
    <dd>Medium Gray</dd>
    <dd>Light</dd>
  </dl>
</div>

<div class="ace-select">
  <div class="ace-select-frame">
    <input
      type="text"
      readonly
      autocomplete="off"
      placeholder="Pick a theme please"
      class="ace-input-select"
    />
    <span class="ace-select-suffix">
      <i></i>
    </span>
  </div>
  <dl class="ace-select-dropdown">
    <dd>Dark</dd>
    <dd>Gray Dark</dd>
    <dd>Medium Gray</dd>
    <dd>Light</dd>
  </dl>
</div>

<div class="ace-select select-disabled">
  <div class="ace-select-frame">
    <input
      type="text"
      readonly
      autocomplete="off"
      placeholder="Pick a theme please"
      class="ace-input-select"
    />
    <span class="ace-select-suffix">
      <i></i>
    </span>
  </div>
  <dl class="ace-select-dropdown">
    <dd>Dark</dd>
    <dd>Gray Dark</dd>
    <dd>Medium Gray</dd>
    <dd>Light</dd>
  </dl>
</div>
```
:::

::: warning
Here the interaction conflicts with the documentation, go to **codepen.io** to see it.  <a-button type="primary" size="small" href="https://codepen.io/zpfz/pen/dyGBqaE" style="color:#fff" target="_blank">Demo</a-button>
:::


<!-- <themeSwitch /> -->

  <div class="theme-switch">
    <div
      v-for="(theme, index) in classes"
      :key="index"
      :class="[theme.className, currentIndex == index ? 'actived' : '']"
      @click="themeSwitch(index)"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'themeSwitch',
  data() {
    return {
      classes: [
        { className: 'theme-switch--dark' },
        { className: 'theme-switch--gray-dark' },
        { className: 'theme-switch--medium-gray' },
        { className: 'theme-switch--light' }
      ],
      currentIndex: 0,
      bgColor: '#323232'
    };
  },
  mounted() {
    this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.dark.css');
  },
  methods: {
    themeSwitch(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.dark.css');
          this.bgColor = '#323232';
          break;
        case 1:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.gray.dark.css');
          this.bgColor = '#767676';
          break;
        case 2:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.medium.gray.css');
          this.bgColor = '#b8b8b8';
          break;
        case 3:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.light.css');
          this.bgColor = '#f0f0f0';
          break;
      }
    },
    addSheetFile(path){
      var fileref=document.createElement("link");
      fileref.rel="stylesheet";
      fileref.type="text/css";
      fileref.href= path;
      var headobj=document.getElementsByTagName('head')[0];
      headobj.appendChild(fileref);
    }
  }
};
</script>
<style lang="less" scoped>
.theme-switch {
  position: fixed;
  top: 270px;
  right: 40px;

  &--dark,
  &--gray-dark,
  &--medium-gray,
  &--light {
    width: 1.875rem;
    height: 1.875rem;
    margin: 3px;
    border: 3px solid #000;

    &.actived {
      border: 3px solid #23befa;
    }
  }
  &--dark {
    background-color: #323232;
  }
  &--gray-dark {
    background-color: #535353;
  }
  &--medium-gray {
    background-color: #b8b8b8;
  }
  &--light {
    background-color: #f0f0f0;
  }
}
</style>
