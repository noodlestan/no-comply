---
name: english
description: Use to identify and fix proofreading issues and tone of voice misalignments, and to normalise local paths referenced in the a document.
---

# Skill: English

<!-- WIP: extract normalise paths to another skill and compose it here -->

## Allowed Agent Modes

ALL

## Editing Definitions

An **Files Selected for Editing** is a list of files in scope for being scanned for issues and updated with accepted suggestions and edits.

An **Editing Command** is a command handled by this skill. The supported commands are `proofread` (or `typos`), `polish`, and `normalise paths`.

An **Editing Issue** is a mistake identified by proofreading, a tone of voice misalignment, or a broken path.

An **Edit Suggestion** is a proposed change to a file that fixes an identified editing issue and is presented in a diff format with surrounding context and no explanation.

A **Multiple Edit Suggestion** is a proposed change to a file that fixes an identified editing issue that occurs several times in a file.

A **Path Expression** is a reference to a directory or another file included in the contents of a markdown file – or in a comment block of a source code file – that is used by Agents to identify target files to read or modify. Examples: `../partials/` or `skills/english/SKILL.md`.

A **Path Pattern Expression** is a glob or wildcard expression that that is used by Agents to identify target files to read or modify. Examples: `.agents/domains/**/index.md` or `kinds/resolve*.ts`.

An **Unresolved Editing Issue** is an issue flagged by the proofreading, polishing, or path normalisation processes that the agent is unsure how to correct. It is presented with quoted context, the nature of the issue, a terse explanation of why no suggestion was selected, and abbreviated suggestion options (if any were generated).

## Rules

### Rules for Generating Edit Suggestions

**RULE:** use British English spelling and conventions.

**RULE:** Do not reason about the content being proofread.

**RULE:** Do not read more files to understand the content of the files in scope.

## Processes

### Process for Selecting Files for Review

1. If the user explicitly provides file targets such as file names, directories, or globs, scan only those files.
2. If no explicit file targets provided, infer the target file(s) from the most recent exchanges with the user.
3. If no explicit or inferable file scope exists, ask the user which file(s) to scan.
4. Expand patterns such as globs and wildcards to a flat file list.
5. If the pattern expansion results in an error, ALERT the user and STOP processing any other instructions.
6. Resolve all paths to a path relative to the repository root.
7. Check that all selected files exist.
8. If some of the selected files are not pressent in the filesystem ALERT the user and STOP processing any other instructions.

### Process for Proofreading and Typo Scanning

For each file selected for editing execute the following steps:

1. Read the "Rules for Generating Edit Suggestions" above and apply them according to the next steps.
2. Identify mistakes: typos, grammar issues, punctuation mistakes, and misused idioms.
3. Identify omissions: incomplete sentences and missing words.
4. Identify formatting issues: formatting inconsistent with surrounding text, such as inconsistent use of ALL CAPS, quotes, backticks, or bold/italics.

   - **RULE:** Do not reason about the content being proofread.
   - **RULE:** Do not read more files to understand the content of the files in scope.

5. Identify repeated issues and mark them as eligible for Multiple Edit Suggestions.
6. For each identified issue, generate an Edit Suggestion that fixes the issue while preserving the intent expressed in the content.
7. If more than one Edit Suggestion is possible, and not obvious which is best, flag the item as an Unresolved Editing Issue.
8. If unable to determine the correction, do not invent one, flag the item as an Unresolved Editing Issue.

## Process for Polishing File Contents

For each File Selected for Editing execute the following steps:

1. Use the rules in the tone of voice file to identify misalignments in the content of the files in scope.

- RULE: tone of voice MUST be supplied by the user; if missing, ASK the user for one and WAIT before processing any other instructions.

2. Identify discrepancies between the content and the rules in the provided tone of voice.
3. For each issue identified, generate an Edit Suggestion the issue while preserving the intent expressed in the content.

- RULE: tone edits should still be minimal and local.
- RULE: preserve meaning, structure, and intent unless a local rewrite is required for tone consistency.

4. If a tone of voice edit is subjective or uncertain, flag the issue as an Unresolved Editing Issue.

## Process for Identifying Relevant Path Expressions

<!-- WIP Split into Process for Classifying Path Expressions and Process for Normalising Path Expressions -->

**Before executing:**

1. Read the contents of `.gitinore` in the repository root.
2. Identify root directory names by listing directories at root of the repository.
3. Ignore all directory names matched by entries on the root `.gitignore`.

Example root directory names: `.agents knowledge no-comply tools`.

For each File Selected for Editing, execute the following steps on its contents:

4. If the file contains a `TEMPLATE DIRECTIVE: no-path-expression`, skip the file and do not scan it for path expressions.
5. Identify markdown links expressed in this format `[...](path expression)` and mark them as `Markdown`.
6. Identify JsDoc links expressed in this format `{@link path expression}` and mark them as `JsDoc`.
7. Identify path expressions inside backticks and mark them as `Quoted`. Example: "Create the `controllers/` directory".
8. Identify unquoted path expressions and mark them as `Unqouted`. Example: "Delete the src/index.ts file".
9. Identify path expressions with placeholders and mark them as `Placeholder`. Examples: `{plan.path}/plan-{plan.id}/plan.md` and `{module}/index.ts`.
10. Identify path expressions that start with a root directory name and mark them as `Absolute`.
11. Identify filename path expressions (no trailing slashes) and mark them as `Filename Only`. Example: "Delete the `index.ts` file".
12. Identify path expressions that are relative to the current file and mark them as `Relative`. Examples: `./types.ts`, `../partials`.
13. Identify path expressions that are not marked as `Filename Only` or `Absolute` or `Relative`. Examples: `skills/english/SKILL.md` and `reference/conventions`.
14. Identify path expressions with a file extension and mark them as `File`.
15. Identify path expressions ending with `/` or without extensions and mark them as `Dir`.

For each identified Path Expression, execute the following steps:

1. If a path expression is found on a list item and the full path can be directly resolved from the context surrounding the list, mark the partial expressions in the list as `contextualised`.

Example:

```
Scan the following source code files in the `no-comply/libs/standard-ui/src/` directory to find:
- All occurrences of `tag` in `action/controllers/Pressable/createPressable.ts`.
- All `tag` and `rle` in `action/mixins/IconButton/createIconButtonMixin.ts`
```

2. Likewise, if a path expression is part of a sentence and the full path can be directly resolved from the context surrounding the sentence, mark the partial expressions in the sentence as `contextualised`.

Example: "Inspect the following source code files in the `no-comply/libs/standard-ui/src/` directory: `actions/index.ts`, `focus/index.ts` and `forms/index.ts`"

- `action/controllers/Pressable/createPressable.ts`
- `action/mixins/IconButton/createIconButtonMixin.ts`
- `action/mixins/ToggleAction/createToggleActionMixin.ts`

**Before you finish**:

1. Build a table with the following columns: "source (relative to repository root)"
2. Identiy table entries.
3. Presenr the table with a extra `is duplicate?` column.

## Process for Validating Path Expressions

For each File Selected for Editing, execute the following steps:

2. Ignore external URLs.
3. Resolve partial paths and paths from the location of the file containing the path to make them
4. If unable to resolve the path, or the file does not exist, flag it as broken.
5. If path resolution depends on conventions the agent cannot verify, record that cause along with the broken path.
6. Identify possible corrections for the broken path.
7. If more than one solution exists to fix the broken path, flag this path as an Unresolved Editing Issue.

## Process for Presenting Edit Suggestions

For each identified Edit Suggestions, execute the following steps:

1. Present the suggestions one by one, not grouped by files.
2. Above each suggestion, present the file path relative to the repository root and line number.
3. Use Github-style diff format to present suggestions, including the file extension in the code block. Example: `md`, `ts`, `tsx`, ...
4. Include surrounding text: a minimum of 3 lines of text, centered around the suggestion.

## Process for Presenting Unresolved Editing Issues

For each identified Unresolved Editing Issues:

1. Present the issues one by one, not grouped by files.
2. Above each item, present the nature of the issue, the file path relative to the repository root, and the line number.
3. Use formatted code blocks to present the source text of the issue, including the file extension in the code block. Example: `md`, `ts`, `tsx`, ...
4. Include surrounding text: a minimum of 3 lines of text, centered around the issue.
5. Include a terse explanation of why the agent is uncertain about how to correct the issue.
6. Present abbreviated suggestion options (if any were generated) for the user to choose from.

## Process for Applying Accepted Edits to Files

For each File Selected for Editing:

- RULE: The agent is only allowed to update files when the user accepts all or some suggestions or requests specific edits.

1. Update the files applying the accepted suggestions or requested edits.
2. Respond only with a list of the changed files (file names only, relative to the repository root).

- RULE: When listing updated files the agent MUST NOT summarise what was changed or include parts of the file in the response.

## Commands

### Command: Typos

Goal: detect typos, spelling mistakes, punctuation mistakes, grammar issues, and small wording errors.

**Triggers:**

- When the user says `proofread` or `typos`.

**Steps:**

1. Execute the **Process for Selecting Files for Review** to identify files in scope.
2. Execute the **Process for Proofreading and Typo Scanning** to identify issues and generate suggestions.
3. Execute the **Process for Presenting Edit Suggestions** to present the generated suggestions.
4. Execute the **Process for Presenting Unresolved Editing Issues** to present the unresolved issues.
5. Wait for the user response.

- RULE: Only apply changes if the user accepts all (or some) suggestions or requests other specific edits.

6. Execute the **Process for Applying Accepted Edits to Files** to modify the files.

### Command: Polish

Goal: run typo/grammar corrections and also check tone of voice against a user-supplied target tone.

**Triggers:**

- When the user says `polish`.

**Steps:**

1. Execute the **Process for Selecting Files for Review** to identify files in scope.
2. Execute the **Process for Proofreading and Typo Scanning** to identify issues and generate suggestions.
3. Execute the **Process for Polishing File Contents** to identify tone of voice misalignments and generate suggestions.
4. Execute the **Process for Presenting Edit Suggestions** to present the generated suggestions.
5. Execute the **Process for Presenting Unresolved Editing Issues** to present the unresolved issues.
6. Wait for the user response.

- RULE: Only apply changes if the user accepts all (or some) suggestions or requests other specific edits.

7. Execute the **Process for Applying Accepted Edits to Files** to modify the files.

### Command: Normalise Paths

Goal: normalise paths referenced in files to paths relative to the root of respository and identify paths that can not be resolved to a file in the file system.

**Triggers:**

- When the user says `normalise paths` or `broken paths`.

**Steps:**

1. Execute the **Process for Selecting Files for Review** to identify files Sn Fcope.
2. Execute the **Process for Identifying Relevant Path Expressions** to identify path expressions in the file.
3. Execute the **Process for Normalising Path Expressions** to make them relative to the repository root.
4. Execute the **Process for Validating Path Expressions** to identify broken path expressions.
5. Execute the **Process for Presenting Edit Suggestions** to present the generated sugestions.
6. Execute the **Process for Presenting Unresolved Editing Issues** to present the unresolved issues.
7. Wait for the user response.

- RULE: Only apply changes if the user accepts all (or some) suggestions or requests other specific edits.

8. Execute the **Process for Applying Accepted Edits to Files** to modify the files.
