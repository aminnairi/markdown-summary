# markdown-summary

## Summary

- [Usage](#usage)
- [Example](#example)
- [Installation](#installation)
  - [[NPM][npm]](#[npm][npm])
  - [[Yarn][yarn]](#[yarn][yarn])
- [Uninstallation](#uninstallation)
  - [[NPM][npm]](#[npm][npm]1)
  - [[Yarn][yarn]](#[yarn][yarn]1)
- [Requirements](#requirements)

## Usage

```console
markdown-summary README.md
```

## Example

```console
$ touch README.md
$ $EDITOR README.md
```

```README.md
# project

## Title 1

## Title 2

### Title 2.1

### Title 2.2

## Title 3

### Title 3.1

#### Title 3.1.1

#### Title 3.1.2

#### Title 3.1.3
```

```console
markdown-summary README.md
```

```console
$ markdown-summary README.md
- [Title 1](#title-1)
- [Title 2](#title-2)
  - [Title 2.1](#title-2.1)
  - [Title 2.2](#title-2.2)
- [Title 3](#title-3)
  - [Title 3.1](#title-3.1)
    - [Title 3.1.1](#title-3.1.1)
    - [Title 3.1.2](#title-3.1.2)
    - [Title 3.1.3](#title-3.1.3)
```

## Installation

- [Node][node]
- [NPM][npm] (instead of Yarn)
- [Yarn][yarn] (instead of NPM)

### [NPM][npm]

```console
$ sudo npm install --global aminnairi/markdown-summary
```

### [Yarn][yarn]

```console
$ sudo yarn global add aminnairi/markdown-summary
```

## Uninstallation

### [NPM][npm]

```console
$ sudo npm uninstall --global @aminnairi/markdown-summary
```

### [Yarn][yarn]

```console
$ sudo yarn global remove @aminnairi/markdown-summary
```

## Requirements

- [Node.js][node]
- [NPM][npm] (instead of [Yarn][yarn])
- [Yarn][yarn] (instead of [NPM][npm])

[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
