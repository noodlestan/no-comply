# Structured Contexts Definitions

## Definitions

### Definition of: "Context File" (#consumer)

**Context File** – A file that contains structured, reusable context such as Skills, Agent Mode files, and files under the `.agents/domains/` directory. Context Files define instructions, processes, conventions, templates, and other knowledge required to locate, validate, generate, and interpret resources within their domain.

### Definition of: "Artificial Procedure" (#producer)

**Artificial Procedure** – A reusable set of instructions in a context file that provides a way to reuse the instructions in different contexts. A procedure is one of: `Command`, `Process`, `Template` of `Formatter`

### Definitions related to Structured Contexts (#producer)

**Artificial Command** – A reusable instruction that directs an agent to perform a specific action. Example invocation: "With the collected notes, use the **Write Task** command to prepare a task draft."

**Artificial Process** – A reusable sequence of steps for performing a task or reaching a result. Example invocation: "With the delegation reports, execute the **Process for Consolidating Feedback** to generate the plan feedback summary."

**Artificial Template** – A reusable document structure containing fixed content and directives for generating output. Example invocation: "Use the **Plan Template** template to generate the plan outline."

**Artificial Formatter** – A reusable routine that renders structured input into a canonical textual representation. Example invocation: "Render each required skill id and purpose using the **Skill Reference Formatter**."
