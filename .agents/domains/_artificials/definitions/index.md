# Artificials Definitions

## Definitions

### Definition of: "Artificial" (#all)

**Artificial** – Standardised instructions classified per type or agent supporting resource (such as templates)

### Definitions related to Artificials (#producer)

**Context File** – A file that contains structured, reusable context such as Skills, Agent Mode files, and files under the `.agents/domains/` directory. Context Files define instructions, processes, conventions, templates, and other knowledge required to locate, validate, generate, and interpret resources within their domain.

**Artificial Structure** – A named definition that specifies the schema and semantics of an artificial resource.

**Artificial Resource** – An instance of an artificial structure that can be referenced by its name.

**Artificial Procedure** – An executable reusable set of instructions in a context file that provides a way to reuse the instructions in different contexts. A procedure is one of: `Command`, `Process`, `Renderer`.

### Definitions of Artificial Procedures (#producer)

**Artificial Command** – A reusable instruction that directs an agent to perform a specific action. Example invocation: "With the collected notes, use the **Write Task** command to prepare a task draft."

**Artificial Process** – A reusable sequence of steps for performing a task or reaching a result. Example invocation: "With the delegation reports, execute the **Process for Consolidating Feedback** to generate the plan feedback summary."

**Artificial Template** – A reusable document structure containing fixed content and directives for generating output. Example invocation: "Use the **Plan Template** template to generate the plan outline."

<!-- WIP add Renderer -->

**Artificial Formatter** – A reusable routine that renders structured input into a canonical textual representation. Example invocation: "Render each required skill id and purpose using the **Skill Reference Formatter**."
