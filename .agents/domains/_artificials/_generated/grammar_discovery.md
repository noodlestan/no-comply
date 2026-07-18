# Grammar: Discovery View

How to use this document: 1. Locate the construct by its canonical example. 2. Match its description. 3. Identify the construct type.

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

How to scan in this section: match the description to what you see, verify with the canonical example.

| Construct | Description | Canonical Example |
| --- | --- | --- |
| **NaturalExpression** | A sequence of natural language elements used to identify, describe, combine, or qualify values and meaning. It provides the semantic text layer of the language and may contain embedded constructs such as Symbols, Names, and other expressions. | `Generate a summary of the API documentation including available endpoints, parameters, and examples.` |
| **Content** | Material associated with a construct that is not interpreted as a Field, Declaration, or Expression. It may contain natural language, document structures, structured data, or other content elements. | `This section describes the available authentication methods.` |
| **ContextValue** | Any natural language expression that identifies one or more context values. Context expressions may reference other values, combine multiple values, apply operations, and define new symbols. | `` `the %report.feedback.items` `` |
| **ExampleBlock** | A standalone example associated with a preceding construct or an explicitly identified context value. When no target is specified, the example applies to the immediately preceding eligible construct. | `Example:` followed by a fenced code block |
| **ExampleInline** | An example embedded within another construct. Can be Suffix (at the end of an instruction) or Nested (within the instruction text), Singular or Plural. | `Current Status. Example: "READY".` |
| **Identifier** | A structural element used to represent a stable and unambiguous name within the context. Identifiers are used by constructs that require explicit references, such as Tags and ContextSymbols. | `api-documentation` |
| **Block** | A structural construct consisting of a heading and its associated content. A Block MAY define an optional type, a name, tags, and arbitrary content. | `### Project: Artificial Language` |
| **Field** | Associates a name with a value within a Block. A Field value is either an inline expression that should be interpreted as a ContextValue or a content block associated with the field. | `**Status:** IN-PROGRESS` |
| **Tag** | Inline markers that attach to definitions or declaration block headings. Multiple tags are space-separated. The values and meaning of tags are usually defined via Vocabulary. | `(#producer) (#wip)` |
| **BlockDeclaration** | A Block interpreted as a resource declaration. It extends the Block structure by interpreting its content as declaration members, including Fields, InlineDeclarations, and Content. | `### Project: Artificial Language` with `**Status**: IN-PROGRESS` |
| **VocabularyDeclaration** | Single-term declarations that define terminology relevant to their declaration scope. They are not advertised for discovery outside their scope. | `**Interaction Mode** – Provides reusable behavioural triggers...` |
| **ContextSymbol** | A named reference that identifies a context value. It can refer to declared inputs, a generated output, or any arbitrary data defined within the current context. | `` `%search-terms` `` |
| **ContextAlias** | A contextualisation construct that associates an existing context value, identified by a ContextSymbol or natural language expression, with an alternative ContextSymbol name. | `` `%feedback-items` as `%filtered-feedback` `` |
| **Contextualise** | Defines context values for the following set of instructions. | `With the %filtered-list items, execute...` |

<!-- WIP: Directives, Statements, and Procedures are not yet defined in the grammar. Add rows as they become available. -->

| Construct | Description | Canonical Example |
| --- | --- | --- |
| **Directives** | WIP | WIP |
| **Statements** | WIP | WIP |
| **Procedures** | WIP | WIP |
