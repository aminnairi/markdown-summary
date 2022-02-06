# @aminnairi/markdown-summary

Command line interface for creating summary for your Markdown files.

## Summary

- [@aminnairi/markdown-summary](#aminnairimarkdown-summary)
  - [Summary](#summary)
  - [Usage](#usage)
    - [Requirements](#requirements)
    - [Usage](#usage-1)
  - [Development](#development)
    - [Requirements](#requirements-1)
    - [Build](#build)
    - [Usage](#usage-2)
  - [Exit codes](#exit-codes)
    - [Exit code 1](#exit-code-1)
    - [Exit code 2](#exit-code-2)
    - [Exit code 3](#exit-code-3)

## Usage

[Summary](#summary)

### Requirements

- Node
- NPX

[Summary](#summary)

### Usage

```bash
npx @aminnairi/markdown-summary README.md
- [@aminnairi/markdown-summary](#aminnairimarkdown-summary)
  - [Usage](#usage)
    - [Requirements](#requirements)
    - [Usage](#usage-1)
  - [Development](#development)
    - [Requirements](#requirements-1)
    - [Build](#build)
    - [Usage](#usage-2)
```

[Summary](#summary)

## Development

[Summary](#summary)

### Requirements

- Docker
- Docker Compose

[Summary](#summary)

### Build

```bash
docker-compose run --rm npm run build
```

[Summary](#summary)

### Usage

```bash
docker-compose run --rm npm run markdown-summary README.md
```

[Summary](#summary)

## Exit codes

[Summary](#summary)

### Exit code 1

Whenever the program is called without any file argument.

[Summary](#summary)

### Exit code 2

Whenever the program is called with more than one file argument.

[Summary](#summary)

### Exit code 3

Whenever an error happened when reading the file argument.

[Summary](#summary)
