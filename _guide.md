# No Comply

Context-aware UI system built with SolidJS and modern CSS. A standalone npm workspaces monorepo providing SolidJS primitives, accessibility utilities, context management, composable components, a themeable UI library, dev tools, and meta-extraction tooling.

## Recommended Reading

Agents SHOULD scan these files for definitions and resource locations when faced with uncertainty or ambiguity that may result from missing resources.

- `_guide.md` — this file: system overview, layout, records, workflows, and operating instructions.
- `_records/project.art` — the project record.
- `_records/repository.art` — the repository record.
- `reference/` — glossary, packages, conventions, and patterns.

## Repository Layout

```
_backlog/           — plans, instructions, reports
_records/           — project, repository, namespace, and license records
reference/          — glossary, packages, conventions, and patterns
cli/                — CLI packages
libs/               — library packages
apps/               — application packages
```

## Projects

| Project             | Guide                                   | Backlog     |
| ------------------- | --------------------------------------- | ----------- |
| No Comply (root)    | `_guide.md`                             | `_backlog/` |
| Solid Primitives    | `libs/solid-primitives/_guide.md`       | `NONE`      |
| Solid Accessibility | `libs/solid-accessibility/_guide.md`     | `NONE`      |
| Solid Contexts      | `libs/solid-contexts/_guide.md`         | `NONE`      |
| Solid Composables   | `libs/solid-composables/_guide.md`      | `NONE`      |
| Standard UI         | `libs/standard-ui/_guide.md`            | `NONE`      |
| Solid Dev Tools     | `libs/solid-dev-tools/_guide.md`        | `NONE`      |
| Meta                | `libs/meta/_guide.md`                   | `NONE`      |
| Meta Extract        | `cli/meta-extract/_guide.md`            | `NONE`      |
| Standard UI Demo    | `apps/standard-ui-demo/_guide.md`       | `NONE`      |

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Project:** `_records/project.art`
- **Repository:** `_records/repository.art`
- **Namespace:** `_records/namespace.art`
- **License:** `_records/license.art`
- **Packages:** `{package-path}/_records/package.art`
- **NPM Deployments:** `{package-path}/_records/npm-deployment.art`
- **Deployments:** `{app-path}/_records/static-web-deployment.art`

## Knowledge References

This repository maintains reference material at `reference/`:

- `reference/glossary.md` — glossary of terms.
- `reference/packages.md` — package overview.
- `reference/conventions/` — conventions for components, composition, and SolidJS.
- `reference/patterns/` — component patterns.

## Workflows

### Planning Work

This project plans its work with the workflow defined in `$DOMAINS/work/workflows/planning-work/workflow.art`.

- The backlog lives at `_backlog/` with subdirectories such as `/3-now` and `/4-next/`.

## Operating Instructions

### Operating Instructions: Setting Up

**Instructions:**

Run from the repository root (monorepo):

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Verifying Completion

**Instructions:**

Run from the repository root (monorepo):

```bash
npm run ci # lint, build and test
```
