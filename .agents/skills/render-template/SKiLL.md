---
name: render-template
description: Use to generate structured files from data using a template.
---

# Skill: Render Template

## Allowed Agent Modes

ALL

## Definitions

**Template Rendering Agent**: The agent currently generating a file with a template.

**Template Directive**: A line in a template starting with `TEMPLATE DIRECTIVE:` with instructions for the rendering agent to present content or structure the file. Examples: `TEMPLATE DIRECTIVE: Include a list of changes as a table using terse wording.` or `TEMPLATE DIRECTIVE: Leave blank if not applicable.`.

**Template Example**: A line starting with `EXAMPLE:` providing agents with examples on how to present the content in the template. Example: `EXAMPLE: - Execute npm run lint to validate format.`.

## Process for Reading the Template File

With the provided template file or name, execute the following steps:

1. If the provided input us a template name (not a file name with path), infer the template file name from the most recent exchanges with the user.
1. If unable to infer a template file name, from context, use the `::templates` skill to list templates and locate the resolved file name.
1. If still unable to resolve a concrete template file name, follow the "Process for Alerting the User" with the details of the failed resolution.
1. If no template file name was resolved, follow the "Process for Asking the User" with the details of the failed resolution and ASK for an explicit template name or template file name.
1. Read the template file and validate its structure and instructions.
   - CATCH: if file missing, then THROW ERROR to user and STOP processing.
1. If the template headings structure is not hierarchical and cohesive follow the "Protocol for Halting Execution and Reporting Failure"
   - CATCH: if headings not hierarchical, then THROW ERROR to user and STOP processing.
1. If the template contains ambiguous or contradicting directives follow the "Protocol for Halting Execution and Reporting Failure"
   - CATCH: if directives ambiguous or contradicting, then THROW ERROR to user and STOP processing.

- RULE: if any step in this process produced a "Halting Execution"

<!-- WIP Process for Validating a Template -->

## Process for Rendering Files using Templates

**Before you start:**

- RULE: always follow the **Template:** for the file type being edited.
- CRITICAL RULE: if you can not identify the **Template:** unambigiously, STOP ask the user.
- RULE: do not attempt to localte **Template File** on your own.

**Steps:**

With the provided `input scope` and the validated `template file`, execute the following steps:

1. Identify all lines starting with `TEMPLATE DIRECTIVE:` or `EXAMPLE:` as a template rendering instruction.
2. Follow `TEMPLATE DIRECTIVE: {rendering instructions}` literally thinking how it applies to the content being rendered in the file.
3. Replace `EXAMPLE: {rendering example}` with the corresponding data from the contex.
4. Replace all placeholders that use brackets `{placeholders}` syntax with the data from the context. Examples: `{plan.id}`, or `<step N> — <step title>`.
5. Replace all placeholders that use `$DOLLAR` syntax with the data from the context. Examples: `$SCOPE`.

- RULE: treat every line starting with `::COMMAND:` as a pre-rendered instruction for the sub-agent and include it verbatim in the output.
- RULE: treat all headings as pre-rendered for the sub-agent, unless they contain a `{placeholder}`.
- RULE: treat all other lines, including lines starting with `- RULE:` as pre-rendered for the sub-agent and include them verbatim in the output.

- IMPORTANT RULE: Do not leave any `TEMPLATE DIRECTIVE:` or `EXAMPLE:` lines in the final prompt. This applies to all the content in front of TEMPLATE DIRECTIVE: and EXAMPLE: not just to the directive markers.

6. Check rendered files against these rules.
   - CATCH: if rules violated, then THROW ERROR to user and STOP processing.
7. Check if file file contains all mandatory sections as per template directives.
   - CATCH: if mandatory sections missing, then THROW ERROR to user and STOP processing.

## Commands

### Command: Render With Template (input scope, template file or name)

**Triggers:**

- when the instructions contain `use the **render-template** skill with the {template file or name} to render {input scope}`.
- when the instructions contain `use template {template file or name} to render {input scope}>`.
- when the instructions contain `render {input scope} using the {template file or name} template`.

**Process:**

1. Apply the **Process for Reading the Template File** with the provided `template file or name` to locate and validate the template.
   - CATCH: if template cannot be resolved, then THROW ERROR to user and STOP processing.
2. Follow the **Process for Rendering Files using Templates** to render the `input scope` using the validated template.
   - CATCH: if rendering fails, then THROW ERROR to user and STOP processing.
3. In case of ambiguity, contradictions, or omissions, report the issue to the user.
4. Present the rendered content for review and wait for confirmation.
5. Infer or ask for the save location and save it.
