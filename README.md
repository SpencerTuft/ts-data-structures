<div align="center">
  <img src="./assets/logo.svg" style="height:200px">

  <br><br><br><br><br>

  # @oaspub/structures

  Various data structure implementations in TypeScript

</div>

<br><br>

<div align="center">

## Table of Contents

<br>

| Name | Version |
| :--- | :------ |
| [@oaspub/graph](./packages/graph/README.md) | ![npm (scoped)](https://img.shields.io/npm/v/@oaspub/graph?style=flat-square) |
| [@oaspub/linked-list](./packages/linked-list/README.md) | ![npm (scoped)](https://img.shields.io/npm/v/@oaspub/linked-list?style=flat-square) |
| [@oaspub/node](./packages/node/README.md) | ![npm (scoped)](https://img.shields.io/npm/v/@oaspub/node?style=flat-square) |
| [@oaspub/queue](./packages/queue/README.md) | ![npm (scoped)](https://img.shields.io/npm/v/@oaspub/queue?style=flat-square) |
| [@oaspub/stack](./packages/stack/README.md) | ![npm (scoped)](https://img.shields.io/npm/v/@oaspub/stack?style=flat-square) |

</div>

## Releases

Creating a new release on GitHub triggers a workflow to publish the packages on the GitHub registry. The command below will:
- bump the package versions according to the commit messages (ignores private packages)
- ignore commit hooks (husky)
- create a release on GitHub (requires `GH_TOKEN` to be set)

```sh
GH_TOKEN=$(gh auth token) lerna version --no-private --no-commit-hooks --conventional-commits --create-release github
```
