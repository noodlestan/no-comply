# Structured Contexts API

**Use Cases:** Generating, validating, and improving structured context files. (#producer)
**Use Cases:** Locating, reading, and interpreting all types of structured contexts. (#consumer)

**Provides:**

- Definitions (#producer) (#consumer)
- Processes (#producer) (#consumer)
- Commands (#producer) (#consumer)
- Templates (#producer)

**Capabilities:**

- Work with structured record files. (#consumer)
- Maintain conventions for contexts files. (#producer)
- Review contexts files consistency with conventions. (#producer)

## Mandatory Reading

READ `.agents/domains/_structured-contexts/formatters/references.md` - declares processes to format references to artificial procedures such as commands, processes, and templates. (#producer) (#consumer)

## Definitions

### Definition of "Context File" (#producer) (#consumer)

**Context File:** A file that contains structured, reusable context such as Skills, Agent Mode files, and files under the .agents/domains/ directory. Context Files define instructions, processes, conventions, templates, and other knowledge required to locate, validate, generate, and interpret resources within their domain.

### Definition of "Artificial Procedure"

**Artificial Procedure:** A reusable set of instructions in a context file that provides a way to reuse the instructions in different contexts. A procedure is one of: `Command`, `Process`, `Template` of `Formatter` (#producer)

**Artificial Command:** A reusable instruction that directs an agent to perform a specific action. Example invocation: "With the collected notes, use the **Write Task** command to prepare a task draft." (#producer)

**Artificial Process:** A reusable sequence of steps for performing a task or reaching a result. Example invocation: "With the delegation reports, execute the **Process for Consolidating Feedback** to generate the plan feedback summary.". (#producer)

**Artificial Template:** A reusable document structure containing fixed content and directives for generating output. Example invocation: "Use the **Plan Template** template to generate the plan outline.". (#producer)

**Artificial Formatter:** A reusable routine that renders structured input into a canonical textual representation. Example invocation: "Render each required skill id and purpose using the **Skill Reference Formatter**." (#producer)

## Delegated Formatters (#consumer) (#producer)

**Triggers:**

- When the instructions contain **Use the Formatter for Skill References**
- When the instructions contain **Use the Formatter for Process References**
- When the instructions contain **Use the Formatter for Command References**
- When the instructions contain **Use the Formatter for Template References**

**Process:**

1. Load the reference formatters from `.agents/domains/_structured-contexts/formatters/references.md`.
2. Identify the corresponding instructions in the file, under the formatter's H3 Section.
3. Delegate the input to the corresponding formatter to yield
