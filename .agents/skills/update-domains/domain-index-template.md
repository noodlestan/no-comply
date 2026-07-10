# Domains Listing Template

DIRECTIVE: replace the H1 by `# Domains Listing`

This file lists the available work domains and indexes each domain's primary definitions, concepts, and commands.

**IMPORTANT:** The concepts referenced by this index are essential for understanding and applying instructions correctly.

**RULE:** Agents MUST use the commands listed below as the primary source of truth for exploring context, locating knowledge, and executing authoritative processes.

The commands provide capabilities such as:

- Specialized knowledge-discovery processes that replace ineffective filesystem scans and codebase inference. Example: `Locate conventions applicable to this {scope}`.
- High-level commands that encapsulate recurring cross-domain agent tasks, replacing ad hoc instruction sequences. Example: `Write conventions proposal for {situation}`. or `Report issue in instructions {prompt context}`.
- Standardized processes and commands for interacting with structured context resources (e.g.: backlogs, tasks, plans) in a systematic, consistent, and reliable manner. Example: `Move {task} to done`.

## Domains

DIRECTIVE: Include a bullet point per domain using this pattern `[<domain name>](<domain file path>) - <domain description>`

EXAMPLE: - [Backlogs](/.agents/domains/backlogs/index.md) - Defines common concepts, processes, and rules for working with filesystem based backlogs.

## Definitions

DIRECTIVE: - list merged definitions with `(#hoist)` replaced with "(#hoisted from `<domain>`)"

## Rules for `<rules scope>`

DIRECTIVE - list rules hoisted from domain VERBATIM (removing the `(#hoist) tag`)

## How to update this file and agent platform Links

- Use **update-domains** skill to update this index file.
