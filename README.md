# markdown-summary

## Summary

- [Usage](#usage)
- [Example](#example)
- [Installation](#installation)
  - [NPM](#npm)
  - [Yarn](#yarn)
- [Uninstallation](#uninstallation)
  - [NPM](#npm-1)
  - [Yarn](#yarn-1)
- [Requirements](#requirements)

## Usage

```console
markdown-summary README.md
```

[:arrow_up: Back to summary](#summary)

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

[:arrow_up: Back to summary](#summary)

## Installation

- [Node][node]
- [NPM][npm] (instead of Yarn)
- [Yarn][yarn] (instead of NPM)

[:arrow_up: Back to summary](#summary)

### NPM

```console
$ sudo npm install --global aminnairi/markdown-summary
```

[:arrow_up: Back to summary](#summary)

### Yarn

```console
$ sudo yarn global add aminnairi/markdown-summary
```

[:arrow_up: Back to summary](#summary)

## Uninstallation

[:arrow_up: Back to summary](#summary)

### NPM

```console
$ sudo npm uninstall --global @aminnairi/markdown-summary
```

[:arrow_up: Back to summary](#summary)

### Yarn

```console
$ sudo yarn global remove @aminnairi/markdown-summary
```

[:arrow_up: Back to summary](#summary)

## Requirements

- [Node.js][node]
- [NPM][npm] (instead of [Yarn][yarn])
- [Yarn][yarn] (instead of [NPM][npm])

[:arrow_up: Back to summary](#summary)

[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
