# Developer Domain

Routines for generating, validating, and refactoring project files from records and templates.

## Modules

Each `_developer/{folder}` is a module — a self-contained set of routines for a specific concern.

- **Refactor** — Routines for moving resources between files and updating module references. Entry point: Extract Resource To Another File.
- **Validate** — Routines for checking and validating package state (paths, template matches).
- **Generate** — Routines for rendering templates into project files (READMEs, scaffolding).

## Routines

| Module    | Routine                        | File                                                       | Inputs                                                     | Outputs          | Purpose                                 |
| --------- | ------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------- | --------------------------------------- |
| Refactor  | Extract Resource To Another File | `refactor/routines/extract-resource-to-another-file.art` | `%source-file`, `%target-file`, `%resource-name`, `%location`? | `%extraction-result` | Move resource between files and update refs |
| Refactor  | Locate Resource In File        | `refactor/routines/locate-resource-in-file.art`            | `%contents`, `%resource-name`                              | `%resource-location` | Find line range of a named resource    |
| Refactor  | Remove Resource From File      | `refactor/routines/remove-resource-from-file.art`          | `%contents`, `%resource-location`                          | `%extracted-resource`, `%updated-contents` | Extract and remove resource block |
| Refactor  | Insert Resource Into File      | `refactor/routines/insert-resource-into-file.art`          | `%contents`, `%resource`, `%location`                      | `%new-contents`, `%new-location` | Insert resource at specified location |
| Refactor  | Update Module References       | `refactor/routines/update-module-references.art`           | `%contents`, `%target-file`, `%resource-name`             | `%updated-contents` | Add ::READ directive after extraction   |
| Refactor  | (Types)                        | `refactor/routines/_types.art`                             | —                                                          | —                | Resource Location, Resource Refactor Result |
| Validate  | Check Package Path Exists      | `validate/routines/check-package-path-exists.art`          | `%package`, `%namespace`                                   | `%path`          | Ensure package directory exists         |
| Validate  | Check File Matches Template    | `validate/routines/check-file-matches-template.art`        | `%file`, `%template`, `%context`                           | `%matches`       | Validate generated file matches template |
| Generate  | Apply Project Tools            | `generate/routines/apply-project-tools.art`                | `%project`                                                 | `%files-created` | Resolve project-level tools and apply them |
| Generate  | Apply Namespace Tools          | `generate/routines/apply-namespace-tools.art`              | `%project`, `%namespace`                                   | `%files-created` | Resolve project+namespace tools and apply them |
| Generate  | Apply Package Tools            | `generate/routines/apply-package-tools.art`                | `%project`, `%namespace`, `%package`                       | `%files-created` | Resolve project+namespace+package tools and apply them |
| Generate  | Apply Tools                    | `generate/routines/apply-tools.art`                        | `%tools`, `%project`, `%namespace`?, `%package`?           | `%files-created` | Apply a list of tools to generate files |
| Generate  | Apply Tool                     | `generate/routines/apply-tool.art`                         | `%tool`, `%project`, `%namespace`?, `%package`?            | `%files-created` | Apply a single tool to generate files   |

## Notes

- Refactor types are local to `refactor/routines/_types.art`. Consider moving to a shared `_developer/types/` folder if other modules need them.
- Generate module uses `Structure: Package Tool` and `Type: Package Tool File` from `_meta/_architect/`.
