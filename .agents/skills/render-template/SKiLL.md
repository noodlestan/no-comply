---
name: render-template
description: Use to generate structured files from data using a template.
---

# Skill: Render Template

## Allowed Agent Modes

ALL

## Definitions

**Template Rendering Agent**: The agent currently generating a file with a template.

**Template Directive**: A line in a template starting with `DIRECTIVE: ` with instructions for the rendering agent to present content or structure the file. Examples: `DIRECTIVE: Include a list of changes as a table using terse wording.` or `DIRECTIVE: Leave blank if not applicable.`.

**Template Example**: A line starting with `EXAMPLE: ` providing agents with examples on how to present the content in the template. Example: `EXAMPLE: - Execute npm run lint to validate format.`.

## Process for Rendering Files using Templates

**Before you start:**

- RULE: always follow the **Template:** for the file type being edited.
- CRITICAL RULE: if you can not identify the **Template:** unambigiously, STOP ask the user.
- RULE: do not attempt to localte **Template File** on your own.

1. Identify all lines starting with `DIRECTIVE: ` or `EXAMPLE: ` as a template rendering instruction.
2. Follow `DIRECTIVE: <rendering instruction>` literally thinking how it applies to the content being rendered in the file.
3. Replace `EXAMPLE: <rendering example>` with actual
4. Replace all placeholders that use angle brackets `<placeholders>` or `$DOLLAR` syntax with the data from the context. Examples: `<plan-id>`, `$SCOPE`, or `<step N> — <step title>`.

- RULE: treat every line starting with `::COMMAND: ` as a pre-rendered instruction for the sub-agent and include it verbatim in the output.
- RULE: treat all headings as pre-rendered for the sub-agent, unless they contain a `<placeholder>`.
- RULE: treat all other lines, including lines starting with `- RULE:` as pre-rendered for the sub-agent and include them verbatim in the output.

- IMPORTANT RULE: Do not leave any `DIRECTIVE: ` or `EXAMPLE: ` lines in the final prompt. This applies to all the content in front of DIRECTIVE: and EXAMPLE: not just to the directive markers.

5. Check rendered files against these rules.
6. Check if file file contains all mandatory sections as per template directives.

## Commands

### Command: `Use Template`, `Render with template`

When the user says `use template <template file or name> to render` or `::render <template file or name>`, execute the following steps:

1. infer or ask for the template file name
2. read the template file
3. infer or ask for the content being used to render the file
4. follow the "Process for Rendering Files using Templates" to render the identified content using the selected template
5. in case of ambiguity, contradictions, or omissions, report the issue to the user
6. present the rendered content for review and wait for confirmation
7. infer or ask for the save location and save it
