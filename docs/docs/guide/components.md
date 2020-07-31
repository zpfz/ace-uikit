---
title: Components
sidebarDepth: 2
---

# Components

<a-alert type="info" show-icon>
 <div slot="message">
    Due to the style conflict between ACE and Antdocs theme, the effect demonstration here is subject to actual application.
  </div>
</a-alert>

## Button

Commonly used button.

### Regular Button

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
    <div class="ace-card">A lightweight UI framework for Adobe CEP. </div>
</div>

::: details Show Code

```html
<div class="ace-card">A lightweight UI framework for Adobe CEP.</div>
```

:::

## Badge

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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

<div class="demo-wrap">
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


<themeSwitch />
