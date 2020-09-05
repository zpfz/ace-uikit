---
title: Introduction
---

# ACE for Adobe CEP

ACE UI is a customized UI framework for Adobe CEP. It can help you build beautiful CEP panel quickly and improve your development efficiency.

## Features

-  Lightweight UI framework tailored for CEP.
-  High quality CEP components out of the box.
-  Visual style extracted from Adobe design system.

## Technology stack

-  jQuery

## Why is ACE not Topcoat ?

Topcoat is a UI framework designed for multiple platforms (such as Web,Mobile...), whereas ACE is designed just for the Adobe CEP. It's more targeted, and there's no need to consider compatibility with other platforms. And ACE is lighter in code comparison.

Most of the common components of Topcoat are available. But it still lacks some relatively advanced components, such as Select.

In contrast, ACE has more components, including Badge, Tip in different states, etc. There are currently 10+ basic components.

Topcoat adds three sizes to each component, which is obviously redundant in designing CEP plug-ins, so ACE has done away with multiple sizes in its design. A size between Mini and Regular is used to match the Adobe CEP panel.


## Why develop with jQuery？

Although jQuery is old-fashioned, it has some advantages in developing small applications. At least the development efficiency is higher than the traditional mode, and it is used because of its excellent selector system, which is very convenient in the development of Adobe CEP plug-ins.

Although Vue and React also have the ability to compete with it, but from the start is far more difficult to learn than jQuery.

And UI library components like those around the Vue or React ecosystem are large and bloated and not suitable for developing CEP applications.

## License
ACE © 2020-present, Feng L.H. Released under the [MIT License](https://mit-license.org/).




