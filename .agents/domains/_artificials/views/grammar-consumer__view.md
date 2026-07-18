# Grammar: Consumer View

How to interpret instructions using this document: 1. Locate the construct in the instruction. 2. Read its purpose and description. 3. Handle its values during execution. 4. Resolve any ambiguity.

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

### Structural

How to interpret in this section: understand what each element means for resource extraction.

#### Block

**Purpose:** Represent a named structural section of a document.

**Description:** A Block is a structural construct consisting of a heading and its associated content. A Block MAY define an optional type, a name, tags, and arbitrary content. The interpretation of the content is determined by the enclosing grammar or construct.

#### Field

**Purpose:** Represent a named property within a Block.

**Description:** A Field associates a name with a value within a Block. A Field value is either an inline expression that should be interpreted as a ContextValue or a content block associated with the field. The interpretation of a Field is determined by its name and the semantics of the enclosing construct.

#### Tag

**Purpose:** Attach metadata to declarations and definitions to enable identification, classification, filtering, grouping, and other operations.

**Description:** Tags are inline markers that attach to definitions or declaration block headings. Multiple tags are space-separated. The values and meaning of tags are usually defined via Vocabulary.

### Expressions

How to interpret in this section: understand how values are identified, combined, and prepared.

#### NaturalExpression

**Purpose:** Provide a construct for expressing human-readable meaning and intent within constructs.

**Description:** A NaturalExpression is a sequence of natural language elements used to identify, describe, combine, or qualify values and meaning. It provides the semantic text layer of the language and may contain embedded constructs such as Symbols, Names, and other expressions.

#### Content

**Purpose:** Provide a construct for including additional material within other constructs.

**Description:** Content represents material associated with a construct that is not interpreted as a Field, Declaration, or Expression. It may contain natural language, document structures, structured data, or other content elements.

#### ContextValue

**Purpose:** Provides a natural language construct for identifying, combining, and preparing context values for subsequent instructions.

**Description:** A ContextValue is any natural language expression that identifies one or more context values. Context expressions may reference other values, combine multiple values, apply operations, and define new symbols.

### Declarations

How to interpret in this section: understand how resources are defined and named.

#### BlockDeclaration

**Purpose:** Classify a Block as a named resource intended to be interpreted as a resource with properties defined by Fields.

**Description:** A BlockDeclaration is a Block interpreted as a resource declaration. It extends the Block structure by interpreting its content as declaration members, including Fields, InlineDeclarations, and Content. The resource type and purpose of the declaration are determined by the semantics of the enclosing context.

#### VocabularyDeclaration

**Purpose:** Provide a controlled way to declare terms within a context, along with their definition, and optional examples.

**Description:** Vocabulary entries are single-term declarations that define terminology relevant to their declaration scope. They are not advertised for discovery outside their scope.

### Context

How to interpret in this section: understand how values are referenced, renamed, and prepared for instructions.

#### ContextSymbol

**Purpose:** Provides a notation to reference a ContextValues explicitly within instructions.

**Description:** A ContextSymbol is a named reference that identifies a context value. It can refer to a declared inputs, a generated output, or any arbitrary data defined within the current context.

#### ContextAlias

**Purpose:** Provide an explicit notation for assigning alternative names to context values, allowing instructions to reference values using names that match the intent and scope of the current operation.

**Description:** A ContextAlias is a contextualisation construct that associates an existing context value, identified by a ContextSymbol or natural language expression, with an alternative ContextSymbol name.

#### Contextualise

**Purpose:** Allow instructions to identify meaning from their surrounding context.

**Description:** Defines context values for the following set of instructions.

### Examples

How to interpret in this section: understand how examples illustrate construct values.

#### ExampleBlock

**Purpose:** Provide a standalone example of an input value being interpreted or of an output being generated to define expectations and verify generated outputs.

**Description:** A ExampleBlock provides an example associated with a preceding construct or an explicitly identified context value. When no target is specified, the example applies to the immediately preceding eligible construct. When a target is specified using `of`, the example applies to the identified expression.

#### ExampleInline

**Purpose:** Provide a way to illustrate concepts and instructions next to the source.

**Description:** An ExampleInline can be Suffix (at the end of an instruction) or Nested (within the instruction text) and can be Singular or Plural.

<!-- WIP: Directives, Statements, and Procedures are not yet defined. Add interpretation guidance as they become available. -->

### Directives

WIP

### Statements

WIP

### Procedures

WIP

## Semantics

How to interpret in this section: understand the rules for interpreting instructions, routines, and procedures.

### Interpretation and Resolution

**Purpose:** Define the meaning and interpretation rules of artificial instructions, enabling the generation of instructions that express intent clearly and their consistent interpretation with minimal ambiguity.

**Description:** Resolution mechanisms are entirely artificial and therefore outside the scope of this language. The language defines constructs, notation, and interpretation rules for expressing intent. It does not define how an artificial system resolves symbols, aliases, scope, dependencies, state, context propagation, persistence, execution planning, or other internal mechanisms required to process instructions.

### Routine Invocation

**Purpose:** Allow reusable capabilities to be invoked consistently using natural language.

**Description:** Defines the conventions for invoking Commands, Processes, and Templates using identified inputs and outcomes.

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

**Purpose:** Define how procedure inputs are identified within a procedure block.

**Description:** Procedure inputs are identified by contextualising values before executing a procedure block. The ContextSymbol names the value used by the procedure instructions.

**Example:**

```md
With the input `%item`, execute the following workflow:

1. Validate the item.
2. Classify the item according to its type.
```

### Procedure Outputs

**Purpose:** Define how procedure results are identified and named.

**Description:** Procedure outputs are identified using the Return statement. A returned value may use an existing ContextSymbol when the output already has an appropriate name or define a new ContextSymbol using an alias.

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
