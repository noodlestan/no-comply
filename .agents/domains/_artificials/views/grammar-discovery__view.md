# Grammar: Discovery View

How to use this document: 1. Locate the construct by its examples. 2. Match its description. 3. Identify the construct type.

## Vocabulary

| Term | Definition |
| --- | --- |
| **Artificial Grammar** | The combination of artificial vocabulary, syntax, and semantics that defines how artificial language should be written and interpreted. |
| **Artificial Syntax** | The rules and notation for expressing artificial language elements and combining them into declarations, instructions, and other language constructs. |
| **Artificial Semantics** | The meaning and interpretation rules of artificial instructions, enabling instructions to express intent clearly and be interpreted consistently with minimal ambiguity. |
| **Artificial Schema** | The defined shape of an artificial structure, including its fields and the semantics associated with each field. |
| **Artificial Declaration** | A resource definition that introduces a name and its content, interpreted as WIP. |
| **Vocabulary Declaration** | A declaration of a term related to its declaration context, along with its definition and optional examples. |
| **Artificial Vocabulary** | The standardized set of terms used to describe artificial language constructs and their interpretation in a particular context. |
| **Artificial Operation** | A transformation applied to context values. |
| **Inline Example** | An example embedded within another construct. |
| **Artificial Instruction** | An imperative construct that specifies operations to be interpreted according to the artificial semantics. |
| **Meta-Syntax** | The notation used to describe artificial syntax, including placeholders, replaceable syntax elements, and combination rules. Used in this file within Syntax code blocks. |

## Constructs

::DIRECTIVE with each `%construct` tagged with `#hoist`, filter out all examples NOT tagged with `#hoist` into `%construct.hoisted-examples`

### Constructs Table

::TEMPLATE ConstructsTable

| Construct | Description | Examples |
| --- | --- | --- |
| `%construct.name` | `%construct.description` (first sentence) | `%construct.hoisted-example` (one, verbatim) |

::TEMPLATE:END

::EXAMPLE ConstructsTable

| Construct | Description | Examples |
| --- | --- | --- |
| **ContextSymbol** | A named reference that identifies a context value. | ```md Match the `%search-terms` against the `%well-known` list of resource types. ``` |

::EXAMPLE:END

::DIRECTIVE Render all filtered `%construct` where NOT `%construct.is-block`, using ConstructsTable format and ConstructsTable example, and following these formatting rules:
- For the Description column, trim `%construct.description` to its first sentence only
- For the Examples column, render ONE of `%construct.hoisted-examples` verbatim as found in content, i.e. "Example of ..." as text, followed by the fenced md block including its backticks and `md` language, as found in the content

| Construct | Description | Examples |
| --- | --- | --- |
| **NaturalExpression** | A sequence of natural language elements used to identify, describe, combine, or qualify values and meaning. | ```md Generate a summary of the API documentation including available endpoints, parameters, and examples. ``` |
| **Content** | Material associated with a construct that is not interpreted as a Field, Declaration, or Expression. | Example of paragraph content: ```md This section describes the available authentication methods. - Create resources. - Update resources. - Delete resources. ``` |
| **ContextValue** | Any natural language expression that identifies one or more context values. | ContextValue using a ContextSymbol to identify values: ```md ... the `%report.feedback.items`... ``` |
| **ExampleBlock** | A standalone example associated with a preceding construct or an explicitly identified context value. | Example of illustrating the preceding VocabularyDeclaration without `of <NaturalExpression>`. ````md **Formatter Function:** – A formatter is a function that serialises data for presentation. Example: ```javascript function formatRow(row) { return row.cells.join(', '); } ``` ```` |
| **ExampleInline** | An example embedded within another construct. | Example of _Suffix_, _Singular_: ``` Current Status. Example: "READY". ``` |
| **Identifier** | A structural element used to represent a stable and unambiguous name within the context. | |
| **Block** | A structural construct consisting of a heading and its associated content. | |
| **Field** | Associates a name with a value within a Block. | Example of inline Field. ```md **Status:** IN-PROGRESS ``` |
| **Tag** | Inline markers that attach to definitions or declaration block headings. | Example of a tagged declaration block: ```md ### Process: Writing Conventions (#producer) (#wip) ``` |
| **ContextSymbol** | A named reference that identifies a context value. | ```md Match the `%search-terms` against the `%well-known` list of resource types. ``` |

### Construct Definitions

::TEMPLATE ConstructDefinition

**`%construct.name`:** – `%construct.description` (first sentence)

`%construct.hoisted-examples` (verbatim)

::TEMPLATE:END

::EXAMPLE ConstructDefinition

**BlockDeclaration:** – A Block interpreted as a resource declaration.

Given the following `<BlockDeclaration>`:

```md
### Project: Artificial Language

**Status**: IN-PROGRESS

**Summary**: A controlled language for expressing, interpreting, and generating instructions within an artificial system.
```

The extracted declaration contains:

```yaml
type: Project
name: Artificial Language
status: IN-PROGRESS
summary: A controlled language for expressing, interpreting, and generating instructions within an artificial system.
```

::EXAMPLE:END

::DIRECTIVE Render all filtered `%construct` where `%construct.is-block`, using ConstructDefinition format and ConstructDefinition example, and following these formatting rules:
- For the description, trim `%construct.description` to its first sentence only
- For the examples, render ALL `%construct.hoisted-examples` verbatim as found in content, i.e. "Example of ..." as text, followed by the fenced md blocks including its backticks and `md` language, as found in the content

**BlockDeclaration:** – A Block interpreted as a resource declaration.

Given the following `<BlockDeclaration>`:

```md
### Project: Artificial Language

**Status**: IN-PROGRESS

**Summary**: A controlled language for expressing, interpreting, and generating instructions within an artificial system.
```

The extracted declaration contains:

```yaml
type: Project
name: Artificial Language
status: IN-PROGRESS
summary: A controlled language for expressing, interpreting, and generating instructions within an artificial system.
```

**VocabularyDeclaration:** – Single-term declarations that define terminology relevant to their declaration scope.

Given the following `<VocabularyDeclaration>`:

```md
**Interaction Mode** – Provides reusable behavioural triggers and rules that influence how the agent performs operations. Example: "Interaction Mode: No Nonsense".
```

The identified vocabulary contains:

```yaml
term: Interaction Mode
definition: Provides reusable behavioural triggers and rules that influence how the agent performs operations.
examples:
	- "Interaction Mode: No Nonsense".
```

**ContextAlias:** – A contextualisation construct that associates an existing context value with an alternative ContextSymbol name.

Defining an ContextAlias of an existing ContextSymbol:

```md
`%feedback-items` as `%filtered-feedback`
```

Defining an ContextAlias for a natural language expression:

```md
the matching feedback items as `%filtered-feedback`
```

**Contextualise:** – Defines context values for the following set of instructions.

Example of contextualization with a ContextSymbol:

```md
With the `%filtered-list` items, execute...
```

Example of contextualization with a ContextAlias:

```md
With the matching feedback items as `%filtered-feedback`, execute...
```

Example of contextualization with an aggregation operation:

```md
With the `%filtered-feedback` and the current `%scope`, execute...
```

Example of contextualization with other operations:

```md
With the `%filtered-feedback` grouped by `%target`, execute...
```

<!-- WIP: Directives, Statements, and Procedures are not yet defined in the grammar. Add rows as they become available. -->
