# WIP: Artificials Architecture

## Todo

--

## Developer Routines

All 12 developer routines are implemented and verified:

- ✅ Refactor: Extract Resource To Another File, Locate Resource In File, Remove Resource From File, Insert Resource Into File, Update Module References
- ✅ Validate: Check Package Path Exists, Check File Matches Template
- ✅ Generate: Apply Project Tools, Apply Namespace Tools, Apply Package Tools, Apply Tools, Apply Tool

## Scaffold Package Tools

**Goal:** Define tools (like `cli-readme.art`) that generate files per package.

**Steps:**

1. ✅ Identify tools by scanning similar packages in the monorepo (ask user for package examples for cli and lib)
2. ✅ Define tool types and templates
3. Refine the routienes that call apply tool routine so that they pass a `target-package` - meaning the one that it is working on - besides the project,namespace,pacakge params (this is because the tool can be called for all levels, and the tool shouldnt have to guess .. pkg will always be one of the project/namespace/package - the others when oresent can be used for context if need in templates)
4. Exercise tool by tool in one repo
5. Run in all packages

## Scaffold Package Scripts

**Goal:** Declare scripts in resources (project, pacvages) and render them in package.json

**Steps**:

1. Scripts in those structures is already using artificials/\_meta/\_architect/project/types/bin.art
2. Missing part is resolve scripts in the

## Scaffold Project Root

**Goal:** Define tools for project root files (lefthook, prettier, turbo, .gitignore, .eslint, etc.)

**Steps:**

1. Scan no-comply/source-code/ for project root files
2. Categorise by type (config, dotfile, license, etc.)
3. Define tools and templates
4. Add to `_domains/monorepo/tools/`

## Package Tool Types

**Goal:** Extend Package Tool beyond file generation to support different behaviours.

### Problem

Currently all tools follow the same pattern: template → target file. But some scaffolding requires:

- Copying entire directory structures (skeletons)
- Running procedural logic (custom generation)

### Proposal: Three Tool Types

**Structure: Package Tool** (Abstract Base)

```
- name: string
- purpose: string
```

**Structure: Package Tool Files** (extends Package Tool)

```
- files: List (Structure: Package Tool File)
```

Current behaviour: renders tart templates to target paths.

**Structure: Package Tool Skeleton** (extends Package Tool)

```
- source: string (path to skeleton directory)
- target: string (path to target directory)
- render: boolean (if true, render .tart files in skeleton)
```

Behaviour:

1. Copy skeleton directory to target path idempotently
2. Check for diffs, alert user before overwriting
3. If `render: true`, render any `.tart` files and rename (strip `.tart` extension)

**Structure: Package Tool Procedural** (extends Package Tool)

```
- routine: string (name of routine to execute)
- inputs: Record (inputs to pass to routine)
```

Behaviour: executes a named routine with provided inputs.

### Proposal: Package Tool Set

**Structure: Package Tool Set** (extends Package Tool)

```
- tools: List (Structure: Package Tool)
```

Allows grouping tools in a reusable set. Can be used in project/namespace/package tools lists:

```
**Tools:**

- Tool: Project README
- Tool Set: Cli Scaffolding
```

Since Package Tool Set extends Package Tool, it can be nested infinitely:

```
Tool Set: All Cli Tools
  - Tool: Cli README
  - Tool Set: Cli Dev Tools
    - Tool: Dev Server Config
    - Tool: Linter Config
```

### Apply Tool Changes

`Apply Tool` must check the tool type and dispatch:

1. If **Package Tool Files**: current behaviour (render templates)
2. If **Package Tool Skeleton**: copy directory, optionally render .tart files
3. If **Package Tool Procedural**: execute named routine
4. If **Package Tool Set**: iterate `tools` list, call `Apply Tool` for each

### Files to Create

- `_meta/_architect/project/structures/package-tool.art` — abstract base
- `_meta/_architect/project/structures/package-tool-files.art` — extends Package Tool
- `_meta/_architect/project/structures/package-tool-skeleton.art` — extends Package Tool
- `_meta/_architect/project/structures/package-tool-procedural.art` — extends Package Tool
- `_meta/_architect/project/structures/package-tool-set.art` — extends Package Tool

### Files to Update

- `_meta/_developer/generate/routines/apply-tool.art` — add type dispatch logic
- `_meta/_architect/project/structures/project.art` — tools list accepts any Package Tool
- `_meta/_architect/project/structures/namespace.art` — tools list accepts any Package Tool
- `_meta/_architect/project/structures/package.art` — tools list accepts any Package Tool
