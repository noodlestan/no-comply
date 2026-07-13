# Tasks WIP

## Tasks Consumer

**Use Cases:** Locating and reading reference sources, and interpreting and applying their knowledge and rules.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Discover references (patterns and conventions) that are relevant to the current context.
- Interpret references.
- Generate reference proposals.

## Tasks Producer

**Use Cases:** Growing and curating reference sources.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Integrate reference proposals into references
- Deduplicating and consolidating reference items

## Desired layout for reference/ directories

```
{namespace}/lib/{package}/reference/
├── conventions/
│   ├── typescript.md
│   │   ├── imports.md
│   │   ├── naming.md
│   │   ├── types.md
│   │   └── ...
│   ├── html/
│   │   ├── accessibility.md
│   │   ├── semantics.md
│   │   └── ...
│   ├── css/
│   │   ├── selectors.md
│   │   ├── specificity.md
│   │   └── ...
│   └── ...
├── patterns/
│   ├── components/
│   │   ├── composition.md
│   │   ├── props.md
│   │   └── ...
│   ├── mixins/
│   │   ├── naming.md
│   │   ├── usage.md
│   │   └── ...
│   ├── hooks/
│   │   ├── lifecycle.md
│   │   └── ...
│   └── ...
├── glossary.md
├── architecture.md
└── ...
```
