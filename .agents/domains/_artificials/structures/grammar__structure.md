# Artificial Grammar Structure

## Definitions

## Structures

### Grammar Construct Record

- `id` - kebab case identifier. Example: `block-declaration".
- `name` - canonical name. Example: "BlockDeclaration".
- `category` - Name of the parent block. Examples: "Expressions", "Directives", "Statements".
- `purpose` - What this construct offers. Example: "Provide a controlled way to declare terms within a context".
- `description` -
- `schema` - Schematic description of the construct's structure.
- `rules` - Rules for generating the construct.
- `syntax` - Construct syntax in a `art` code block.
- `examples` - Example of applying the construct and its variants according to context.

### Grammar Record Identity

> Identifying fields

- `id` - kebab case identification of the grammar.
- `skill` the id of the Skill used to generate the gammar.
- `constructs` - flat list of constructors classified with category
- `construct[0]`

## Diagram

```
Grammar
├── Vocabulary
├── Constructs
│   ├── Expressions
│   │   ├── NaturalExpression
│   │   ├── Content
│   │   └── ContextValue
│   │
│   ├── Examples
│   │   ├── ExampleBlock
│   │   └── ExampleInline
│   │
│   ├── Structural
│   │   ├── Identifier
│   │   ├── Block
│   │   ├── Field
│   │   └── Tag
│   │
│   ├── Declarations
│   │   ├── BlockDeclaration
│   │   └── VocabularyDeclaration
│   │
│   ├── Context
│   │   ├── ContextSymbol
│   │   ├── ContextAlias
│   │   └── Contextualise
│   │
│   ├── Directives
│   │   └── ...
│   │
│   ├── Statements
│   │   ├── Return
│   │   ├── If
│   │   ├── With Each
│   │   ├── Alert
│   │   ├── Throw
│   │   ├── Ask
│   │   ├── Nested Rules
│   │   ├── Catches
│   │   ├── Execute Command
│   │   └── Execute Process
│   └── Procedures
│       ├── Procedure
│       ├── Procedure Block
│       └── Workflow
├── Semantics
│   ├── Interpretation and Resolution
│   ├── Routine Invocation
│   ├── Procedure Inputs
│   └── Procedure Outputs
└── Artificial Meta-Syntax
```
