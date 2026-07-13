# {domain.name} Domain Consumer

TEMPLATE DIRECTIVE: Summarise the domain consumer use cases in one sentence.

TEMPLATE EXAMPLE: **Use Cases:** Locating, reading, and interpreting all types of domain contexts.

**Use Cases:** {consumer use cases summarised}.

**Provides:**

TEMPLATE DIRECTIVE: For each category of procedures in the domain consumer's scope, generate a bullet point with its name.

TEMPLATE EXAMPLE: - Processes

**Capabilities:**

TEMPLATE DIRECTIVE: For each capability in the domain consumer's scope, generate a bullet point with its purpose.

TEMPLATE EXAMPLE: - Work with domain contexts files.

## Mandatory Reading

TEMPLATE DIRECTIVE: For each mandatory reading in the consumer's scope, generate a mandatory reading entry formatted according to the following example.

TEMPLATE EXAMPLE: READ `{mandatory-reading.filepath}` - {mandatory-reading.purpose}.

## Definitions

TEMPLATE DIRECTIVE: Include if the domain consumer's scope contains any definitions.

### Definition of: "{term}"

TEMPLATE DIRECTIVE: For each top-level definition in the consumer's scope, include an H3 with the `{term}`.

TEMPLATE DIRECTIVE: Include any element with no `(#{target})` tags element found between this heading and the one.

TEMPLATE DIRECTIVE: Include any element tagged with `(#consumer)` and found between this heading and the next one.

## {Each Section Title}

TEMPLATE DIRECTIVE: For each H2 section containing items in the consumer's scope, include an H2 stripping out any `(#{target})` tags from its title.

TEMPLATE DIRECTIVE: Include any other that has no `(#{target})` tags element found between this heading and the one.

TEMPLATE DIRECTIVE: Include any element tagged with `(#consumer)` and found between this heading and the next one.

## {Each Section Title Sub-Title}

TEMPLATE DIRECTIVE: For each H3 under the current section containing items in the consumer's scope, include an H3 stripping out any `(#consumer)` or `(#producer)` tags from

TEMPLATE DIRECTIVE: Include any other that has no `(#{target})` tags element found between this heading and the one.

TEMPLATE DIRECTIVE: Include any element tagged with `(#consumer)` and found between this heading and the next one.
