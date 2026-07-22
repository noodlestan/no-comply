# Monorepo Domain

Records, templates, and tools for the Artificials project.

## Modules

Each `_domains/monorepo/{folder}` is a module — a self-contained set of records, templates, or tools for a specific concern.

- **Records** — Instances of structures: Project, Namespace, Package.
- **Tools** — File generation rules mapping templates to targets.

## Records

| Module  | Kind      | File                                 | Purpose                                    | Tools            |
| ------- | --------- | ------------------------------------ | ------------------------------------------ | ---------------- |
| Records | Project   | `records/projects/artificials.art`   | Runnable or publishable unit               | Project README   |
| Records | Namespace | `records/namespaces/artificials.art` | Grouping of packages under shared identity | Namespace README |
| Records | Package   | `records/packages/*.art`             | Publishable library or CLI                 | Lib, Cli, or Tools README + Package Tools |

## Tools

### README Tools

| Tool            | File                    | Template              | Target                      | Purpose                         |
| --------------- | ----------------------- | --------------------- | --------------------------- | ------------------------------- |
| Project README  | `tools/root-readme.art` | namespace-readme.tart | README.md                   | Generate project root README    |
| Namespace README| `tools/namespace-readme.art` | namespace-readme.tart | README.md               | Generate namespace README       |
| Cli README      | `tools/cli-readme.art`  | cli-readme.tart       | {namespace.path}{package.path}/README.md | Generate CLI package README |
| Lib README      | `tools/lib-readme.art`  | lib-readme.tart       | {namespace.path}{package.path}/README.md | Generate lib package README |

### Package Tools (shared)

| Tool            | File                       | Templates                              | Purpose                         |
| --------------- | -------------------------- | -------------------------------------- | ------------------------------- |
| License         | `tools/pkg-license.art`     | `pkg-license.tart`                   | Generate LICENSE-MIT            |
| Dotfiles        | `tools/pkg-dotfiles.art`    | `pkg-dotfiles-npmignore.tart` + `pkg-dotfiles-prettierignore.tart` | Generate .npmignore and .prettierignore |

### Package Tools (lib)

| Tool            | File                       | Templates                              | Purpose                         |
| --------------- | -------------------------- | -------------------------------------- | ------------------------------- |
| Lib Package Json| `tools/pkg-lib-package-json.art` | `pkg-lib-package-json.tart`        | Generate lib package.json       |
| Lib Tsconfig    | `tools/pkg-lib-tsconfig.art` | `pkg-lib-tsconfig.tart`              | Generate tsconfig.json          |
| Lib Vite        | `tools/pkg-lib-vite.art`    | `pkg-lib-vite.tart` + `pkg-lib-vitest.tart` | Generate vite and vitest configs |

### Package Tools (cli)

| Tool            | File                       | Templates                              | Purpose                         |
| --------------- | -------------------------- | -------------------------------------- | ------------------------------- |
| Cli Package Json| `tools/pkg-cli-package-json.art` | `pkg-cli-package-json.tart`        | Generate cli package.json       |
| Cli Tsconfig    | `tools/pkg-cli-tsconfig.art` | `pkg-cli-tsconfig.tart` + `pkg-cli-tsconfig-cjs.tart` + `pkg-cli-tsconfig-esm.tart` | Generate tsconfig files |

### Tools Namespace

| Tool            | File                            | Templates                              | Purpose                         |
| --------------- | ------------------------------- | -------------------------------------- | ------------------------------- |
| Tools Namespace Readme | `tools/tools-namespace-readme.art` | `tools-namespace-readme.tart` | Generate tools namespace README |
| Tools Pkg Readme | `tools/tools-pkg-readme.art`   | `tools-pkg-readme.tart`              | Generate tools package README   |
| Tools Package Json | `tools/tools-package-json.art` | `tools-package-json.tart`            | Generate tools package.json     |

## Directory Layout

```
_domains/monorepo/
├── _guide.md                              # This file
├── _wip.md                                # Pending work
├── records/
│   ├── projects/                          # Project records
│   ├── namespaces/                        # Namespace records
│   └── packages/                          # Package records
└── tools/                                 # Tool records and templates
```
