# Grammar: Producer View

How to generate instructions using this document: 1. Understand the purpose of each construct. 2. Select the right construct for your intent. 3. Compose the construct following its rules. 4. Illustrate with examples. 5. Validate against the rules.

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
| **Artificial Instruction** | An imperative construct that specifies operations to be interpreted according to the artificial semantics. |

## Constructs

### Expressions

How to select in this section: choose the expression type that matches your intent.

| Construct | Purpose | Key Rules |
| --- | --- | --- |
| **NaturalExpression** | Provide a construct for expressing human-readable meaning and intent within constructs. | MUST communicate meaning using natural language. MAY contain embedded constructs. SHOULD express intent explicitly and unambiguously. MUST NOT be interpreted solely by its syntax. |
| **Content** | Provide a construct for including additional material within other constructs. | MAY contain one or more content elements. MUST NOT be interpreted as a named property unless defined by the enclosing construct. |
| **ContextValue** | Provides a natural language construct for identifying, combining, and preparing context values for subsequent instructions. | SHOULD identify the target context values unambiguously. MAY reference, classify, combine, and apply operations to values. MAY mix symbols, aliases, natural language, and operations. |

### Examples

How to select in this section: choose the example type that best illustrates your construct.

| Construct | Purpose | Key Rules |
| --- | --- | --- |
| **ExampleBlock** | Provide a standalone example of an input value being interpreted or of an output being generated to define expectations and verify generated outputs. | With `of`, applies only to the specified expression. Without `of`, MAY ONLY follow a VocabularyDeclaration or Directive. MUST NOT appear between list items. |
| **ExampleInline** | Provide a way to illustrate concepts and instructions next to the source. | Can be Suffix or Nested, Singular or Plural. Suffix: `Example: "..."`. Nested: `(Example: "...")`. |

### Structural

How to compose in this section: combine structural elements to build declarations.

| Construct | Purpose | Key Rules |
| --- | --- | --- |
| **Identifier** | Provide a canonical lexical representation for names used by artificial language constructs. | MUST use kebab-case notation. MUST contain only lowercase letters, numbers, and hyphens. MUST NOT contain whitespace or any other characters. |
| **Block** | Represent a named structural section of a document. | MUST define a name. MAY define a type. MAY define one or more tags. MAY contain arbitrary content. |
| **Field** | Represent a named property within a Block. | MUST define a name and value. Inline value MUST be on the same line as the Field name. Block value includes all content until the next Field or end of Block. |
| **Tag** | Attach metadata to declarations and definitions to enable identification, classification, filtering, grouping, and other operations. | MUST appear only after the Block Declaration name or at the end of Vocabulary. MUST be kebab case, prefixed with `#`, enclosed in parentheses. Multiple tags MUST be space-separated. |

### Declarations

How to compose in this section: build resource declarations and vocabulary definitions.

| Construct | Purpose | Key Rules |
| --- | --- | --- |
| **BlockDeclaration** | Classify a Block as a named resource intended to be interpreted as a resource with properties defined by Fields. | MUST be interpreted from a Block. MUST define a name. MAY define a type. MAY contain Fields, InlineDeclarations, and Content. Fields MUST be interpreted as properties. |
| **VocabularyDeclaration** | Provide a controlled way to declare terms within a context, along with their definition, and optional examples. | Format: `**Term** – definition. Example: "..."`. Single-term declarations scoped to their declaration context. Not advertised for discovery outside their scope. |

### Context

How to compose in this section: reference, rename, and prepare values for instructions.

| Construct | Purpose | Key Rules |
| --- | --- | --- |
| **ContextSymbol** | Provides a notation to reference a ContextValues explicitly within instructions. | MUST start with `%`. MUST contain one or more kebab-case identifiers separated by `.`. MAY include index access after an identifier. |
| **ContextAlias** | Provide an explicit notation for assigning alternative names to context values, allowing instructions to reference values using names that match the intent and scope of the current operation. | MUST define a target ContextSymbol. SHOULD be used when the context value does not have a suitable existing ContextSymbol name. |
| **Contextualise** | Allow instructions to identify meaning from their surrounding context. | Format: `With <ContextSymbol \| ContextAlias \| ContextValue>, ...`. Defines context values for the following set of instructions. |

<!-- WIP: Directives, Statements, and Procedures are not yet defined. Add generation guidance as they become available. -->

### Directives

WIP

### Statements

WIP

### Procedures

WIP

## Semantics

How to generate in this section: understand the rules for writing routines, invocations, and procedures.

### Routine Invocation

How to compose a routine invocation: 1. Identify the routine by its declaration name. 2. Identify required inputs. 3. Optionally add additional context. 4. Optionally identify the output.

**Syntax:**

```art
[<Contextualise>,] execute the **<Routine>** [, with <Context>] [to <Outcome>]
```

**Rules:**

- SHOULD identify required inputs when they are not already unambiguous from context.
- Additional context MAY be supplied using a trailing `with <ContextValue>` clause.
- An Outcome SHOULD be identified when the generated result is referenced subsequently.
- Routine names SHOULD match their corresponding declaration names.

**Examples:**

Simple invocation:

```md
Execute the **Process: Render Resources**.
```

Invocation with contextualised input:

```md
With the `%filtered-feedback`, execute the **Process: Consolidate Feedback**.
```

Invocation with identified outcome:

```md
With the `%filtered-feedback`, execute the **Process: Consolidate Feedback** to generate the `%grouped-feedback`.
```

### Procedure Inputs

How to compose procedure inputs: 1. Identify the input values using Contextualise. 2. Use ContextSymbol names that the procedure block will reference.

**Syntax:**

```art
With <Contextualise>, execute the following procedure:

<Procedure Block>
```

**Rules:**

- Procedure inputs MUST be identified using Contextualise when referenced by name within the procedure block.
- The ContextSymbol used for an input SHOULD match the intended meaning of the input within the procedure.
- A SymbolAlias SHOULD be used when the input value requires a name different from its existing Symbol.

**Example:**

```md
With the input `%item`, execute the following workflow:

1. Validate the item.
2. Classify the item according to its type.
```

### Procedure Outputs

How to compose procedure outputs: 1. Use the Return statement. 2. Use an existing ContextSymbol or define an alias.

**Syntax:**

```art
Return <ContextValue>
```

**Rules:**

- SHOULD return values using an existing ContextSymbol when it already represents the intended output.
- MUST define an alias when the returned value does not have an appropriate existing ContextSymbol.
- Returned Symbols SHOULD communicate the intended meaning of the output.

**Examples:**

Using an existing output symbol:

```md
Return the generated `%table-of-contents`.
```

Defining an alias for the output:

```md
Return the first row of the table as `%top-priority`.
```

### Artificial Meta-Syntax

WIP
