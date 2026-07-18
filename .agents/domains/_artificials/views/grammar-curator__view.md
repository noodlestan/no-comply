# Grammar: Curator View

How to review instructions using this document: 1. Identify each construct. 2. Match it against the syntax and rules. 3. Fix violations where possible. 4. Report issues that cannot be fixed.

## Vocabulary

Reference for interpreting the syntax of constructs.

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

How to review in this section: check that each construct follows its syntax and rules.

#### NaturalExpression

**Syntax:**

```art
<NaturalExpression> =
	<natural-language-text>
```

**Rules:**

- MUST communicate meaning using natural language.
- MAY contain embedded constructs.
- SHOULD express intent explicitly and unambiguously.
- MUST NOT be interpreted solely by its syntax; meaning is determined by the enclosing construct.

#### Content

**Syntax:**

```art
<content-element> =
	<paragraph>
	| <bullet-list>
	| <numbered-list>
	| <table>
	| <other-content-element>

<Content> =
	<content-element> ...
```

**Rules:**

- MAY contain one or more content elements.
- MUST NOT be interpreted as a named property unless defined by the enclosing construct.

#### ContextValue

**Syntax:**

```art
<ContextValue> =
	<NaturalExpression>
```

**Rules:**

- SHOULD identify the target context values unambiguously.
- MAY reference one or more context values by existing symbols or via natural language expressions.
- MAY classify or add specificity to values.
- MAY combine multiple context values into a single expression.
- MAY apply one or more operations to the identified context values.
- MAY mix symbols, aliases, natural language, and operations within the same expression.

### Examples

How to review in this section: check that examples are correctly positioned and target the right construct.

#### ExampleBlock

**Syntax:**

````art
Example[ of <NaturalExpression>]:

```<block-language>
<block-content>
```
````

**Rules:**

- With `of <NaturalExpression>`, applies only to the value interpreted from the specified expression.
- Without `of <NaturalExpression>`, MAY ONLY follow a VocabularyDeclaration or a Directive.
- Without `of <NaturalExpression>`, applies to the immediately preceding eligible construct.
- MUST NOT appear between list items.
- MUST NOT appear after lists without using `of <NaturalExpression>`.

#### ExampleInline

**Syntax (Suffix, Singular):**

```art
<ExampleInline:Suffix:Singular> =
	<NaturalExpression>. Example: "<NaturalExpression (example text)>"
```

**Syntax (Suffix, Plural):**

```art
<ExampleInline:Suffix:Plural> =
	<NaturalExpression>. Examples: "<NaturalExpression (example text)>"[, "<NaturalExpression (example text)>" ...]
```

**Syntax (Nested, Singular):**

```art
<ExampleInline:Nested:Singular> =
	<NaturalExpression> (Example: "<NaturalExpression (example text)>") <NaturalExpression>
```

**Syntax (Nested, Plural):**

```art
<ExampleInline:Nested:Plural> =
	<NaturalExpression> (Examples: "<NaturalExpression: Example>"[, "<NaturalExpression: Example 2>" ...]) <NaturalExpression>
```

### Structural

How to review in this section: check that structural elements follow their syntax and rules.

#### Identifier

**Syntax:**

```art
<Identifier> =
	<kebab-case-name>
```

**Rules:**

- MUST use kebab-case notation.
- MUST contain only lowercase letters, numbers, and hyphens.
- MUST NOT contain whitespace or any other characters.

#### Block

**Syntax:**

```art
<block-header> =
    ### [<Name (block.type)>: ]<Name (block.name)>

<Block> =
    <block-header>
    <Content>
```

**Rules:**

- MUST define a name.
- MAY define a type.
- MAY define one or more tags.
- MAY contain arbitrary content.

#### Field

**Syntax:**

```art
<block-field> =
	**<Identifier (field.name)>**:
		<Content>

<inline-field> =
	**<Identifier (field.name)>**: <ContextValue>

<Field> =
	<block-field> | <inline-field>
```

**Rules:**

- MUST define a name.
- MUST define a value.
- An expression-field value MUST be defined on the same line as the Field name.
- A content-field value consists of all following content until the next Field, InlineDeclaration, or end of enclosing Block.

#### Tag

**Syntax:**

```art
<Tag> =
	(#<identifier>)
```

**Rules:**

- MUST appear only after the Block Declaration name or at the end of Vocabulary.
- MUST NOT appear on a Field, an ExampleBlock, or any other content.
- A Tag name MUST be kebab case.
- MUST be prefixed with `#` and enclosed in parentheses.
- Multiple tags MUST be space-separated.

### Declarations

How to review in this section: check that declarations follow their syntax and rules.

#### BlockDeclaration

**Schema:**

```
BlockDeclaration {
	type?: <Name>
	name: <Name>
	<field-name>: <field-value>
	...
}	content?: <Content>
```

**Syntax:**

```art
<declaration-content> =
    {<Field> | <InlineDeclaration> | <Content>}

<BlockDeclaration> =
    <block-header>
    <declaration-content>
```

**Rules:**

- MUST be interpreted from a Block.
- MUST define a name.
- MAY define a type.
- MAY contain Fields, InlineDeclarations, and arbitrary Content.
- Fields within a BlockDeclaration MUST be interpreted as properties of the declared resource.
- InlineDeclarations define nested declared resources.

#### VocabularyDeclaration

**Schema:**

```art
VocabularyDeclaration {
	term: <Name>
	definition: <NaturalExpression>
	examples?: <ExampleInline:Suffix>
}
```

**Syntax:**

```art
<VocabularyDeclaration> =
	**<Name (term)>** – <NaturalExpression (definition)>. <ExampleInline:Suffix>.
```

**Rules:**

- Single-term declarations scoped to their declaration context.
- Not advertised for discovery outside their scope.

### Context

How to review in this section: check that context constructs follow their syntax and rules.

#### ContextSymbol

**Syntax:**

```art
{BACKTICK} = `
{PERCENT} = %
{DOT} = .

<symbol-reference> =
	{PERCENT}<identifier>

<symbol-member-access> =
	{DOT}<identifier>

<symbol-access> =
	<symbol-member-access>
	| <symbol-index-access>

<ContextSymbol> =
	{BACKTICK}<symbol-reference>[<symbol-access> ...]{BACKTICK}
```

**Rules:**

- MUST start with `%`.
- MUST contain one or more kebab-case identifiers separated by `.`.
- MAY include index access after an identifier.

#### ContextAlias

**Syntax:**

```art
<ContextAlias> =
	<Context> as <ContextSymbol>
```

**Rules:**

- MUST define a target ContextSymbol.
- SHOULD be used when the context value does not have a suitable existing ContextSymbol name.

#### Contextualise

**Syntax:**

```art
<Contextualise> =
	With <ContextSymbol | ContextAlias | ContextValue>, ...
```

<!-- WIP: Directives, Statements, and Procedures are not yet defined. Add validation guidance as they become available. -->

### Directives

WIP

### Statements

WIP

### Procedures

WIP

## Semantics

How to review in this section: check that instructions follow the semantic rules for interpretation and execution.

### Interpretation and Resolution

Resolution mechanisms are entirely artificial and therefore outside the scope of this language. The language defines constructs, notation, and interpretation rules for expressing intent. It does not define how an artificial system resolves symbols, aliases, scope, dependencies, state, context propagation, persistence, execution planning, or other internal mechanisms required to process instructions.

### Routine Invocation

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

### Procedure Inputs

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
