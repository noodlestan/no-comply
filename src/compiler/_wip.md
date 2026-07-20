# Module: Artificial Compiler

**Purpose:** Define a general-purpose compiler that transforms `.art` codebases into targeted views based on entry points, build configuration, and target specifications.

## Goal

Develop a compiler that generates use case specific context files from `.art` sources.

What this provides:

- Agents that require only a subset of a context to operate (Example: "Interpret Task Files") are exposed to the minimum amount of information (instructions, resources).
- Agents that require a higher level of detail (Example: "Create Task") are routed to a bigger context.

### Use Cases

#### Declaration

- Minimal context for agents that only need to know *what exists* — construct names, categories, brief descriptions
- Example: "What is a ContextSymbol?" → expose name, category, one-line purpose

#### Generation

- Context for agents that need to *produce* artefacts — full syntax, examples, rules, related constructs
- Example: "Create a new .art file" → expose declarations, syntax patterns, example blocks, naming conventions

#### Consumption

- Context for agents that need to *use* existing artefacts — invocation patterns, input/output contracts, usage examples
- Example: "Execute the **Process: Render Resources" → expose procedure signature, required inputs, expected outputs

#### Discovery

- Context for agents that need to *navigate* a codebase — module structure, exposed exports, dependency graph
- Example: "What does this domain contain?" → expose index files, module listings, cross-references

## Strategy

- Start with a single module (`structural`) to prototype and validate the pipeline
- Build incrementally: parse → extract → transform → render
- Use build files (`_build.md`) as configuration sources for target-specific behaviour
- Leverage existing constructs (tags, views, overloaded declarations) as transformation primitives
- Design for extensibility: new targets and formats added via configuration, not code changes
- Test each stage independently before composing the full pipeline

## Architecture

```
compiler/                          source/
├── main/                          ├── _build.md
│   └── compile.md                 ├── index.art
│                                  ├── constructs/
├── parse/                         │   ├── section-block.art
│   ├── index.art                  │   ├── field-block.art
│   └── ...                        │   └── ...
│                                  │
├── extract/                       └── dist/
│   └── ...                            ├── declaration.md
│                                      ├── generation.md
├── filter/                           ├── consumption.md
│   └── ...                           └── discovery.md
│
├── overload/
│   └── ...
│
├── transform/
│   └── ...
│
└── formats/
    ├── section.md
    ├── table.md
    ├── list.md
    └── summary.md
```

Records are held in memory only — never written to disk (they are lossy intermediaries).

## Refined

### Task: Examine source module

- Examine `section-block.art` — document its declared constructs, exposed values, and current structure
- Identify what "different built representations" would look like for this single file across all four targets
- Establish the minimal record schema needed to capture a declaration's essential metadata
- Define the contract between parser output and transformer input

## Unrefined

### Task: Add target-variant content

- Add target-variant content to `section-block.art` (different examples, purposes, descriptions per target)
- This validates that a single source can express multiple views without duplication

### Task: Design build file schema

- Design the `_build.md` schema — frontmatter structure for target-to-format mapping
- Include target + resource-type to format rules
- Include target + resource-name pattern to format rules
- Support matcher procedures (return true/false) and before/after transformation hooks

### Task: Implement tag-based filtering

- Implement tag-based filtering logic (`#producer` / `#consumer` matching against target)
- Tags determine inclusion, exclusion, or transformation of content per target

### Task: Implement overloaded declaration resolution

- Implement overloaded declaration resolution (selecting the correct variant for a target)
- A single declaration may provide multiple definitions differentiated by tags or conditions

### Task: Define transformations

- Define built-in transformations (target-aware aggregations, summaries, renames)
- Define custom transformation syntax in `_build.md`
- Transformations run before rendering and can filter, aggregate, rename, or restructure data

### Task: Design format templates

- Design format templates (section, table, list, summary) and their selection logic
- Format is selected by build configuration based on target and resource type

### Task: Implement render stage

- Implement the render stage — producing markdown from records + format + config
- Output is a single file for the requested target after all transformations

### Task: Wire full pipeline

- Wire the full pipeline: entry-point → parse → extract → transform → overload → format → render → output
- Validate with `structural` module and single target

### Task: Generalise and validate

- Generalise to accept any `.art` entry point and any target
- Validate output against known good examples (e.g., `.agents/domains/index.md`)
