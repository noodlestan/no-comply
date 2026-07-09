---
name: english
description: Use to proofread repository files for British English typos, grammar, tone of voice, and broken local links.
---

# Skill: English

The purpose of this skill is to scan one or more repository files for issues and presenting fixes, suggestions, or doubts, without rewriting the whole file.

## Allowed Agent Modes

ALL

## Editing Definitions

An **Editing Command** is a command handled by this skill. The supported commands are `proofread`, `typos`, `polish`, and `broken links`.

## Rules for updating files

- RULE: the agent is only allowed to update files when the user accepts all or some suggestions.
- RULE: when updating files the agent MUST report back the list of file names only
- RULE: when listing updated files the agent MUST NOT summarise what was changed or include parts of the file in the response.

## Rules for selecting files for review

Use the rules below to determine the files to scan.

- RULE: if the user explicitly names files, directories, or globs, scan only those files.
- RULE: otherwise infer the target file(s) from the recent session context.
- RULE: if no explicit or inferable file scope exists, ask the user which file(s) to scan.
- RULE: all reported file paths must be relative to the repository root.
- RULE: only scan text files relevant to the command.

## Rules for proofreading and typo scanning

Use the rules below for `proofread` and `typos` command:

- RULE: use British English spelling and conventions.
- RULE: do not rewrite for style, structure, or tone unless the command is `polish`.
- RULE: prefer minimal corrections that preserve the author’s wording.
- RULE: if the agent is unsure of the correction, do not invent one, flag the item as not having a suggested correction for presenting it differently.

## Rules for polishing

Use the rules below for `polish` command:

- RULE: tone of voice must be supplied by the user; if missing, ask for it before running `polish`.
- RULE: tone edits should still be minimal and local.
- RULE: preserve meaning, structure, and intent unless a local rewrite is required for tone consistency.
- RULE: if a tone edit is subjective or uncertain, present it as an uncertain issue instead of a correction.

## Rules for broken link scanning

Use the rules below for `broken links` command:

- RULE: only check links that are relative to the current file such as `./path` or `../path`, or repository-absolute paths such as `src/...`.
- RULE: ignore external URLs.
- RULE: resolve relative links from the location of the file containing the link.
- RULE: if unable to resolve the link, or the file does not exist, flag it as broken.
- RULE: if link resolution depends on conventions the agent cannot verify, record that cause along with the broke link.

## Rules for presenting editing results

Use the rules below for all commands.

- RULE: present the items one by one, not grouped by files.
- RULE: each item must be preceed the file path relative to the repository root and line number.
- RULE: when presenting a suggestion: use Github-style diff format to present corrections.
- RULE: when uncertain about a suggestion

## Rules for presenting uncertain proofreading issues

Use the rules below when the agent is unsure how to correct spelling, grammar, or wording.

- RULE: present
- RULE: below the snippet explain why the text may be wrong and why the agent is uncertain about how to correct it.

## Commands

### Command: `typos`

Goal: detect typos, spelling mistakes, punctuation mistakes, grammar issues, and small wording errors.

When the user says `proofread` or `typos`

1. Resolve the file scope from explicit paths/globs or infer it from recent session context.
2. Apply the "Rules for selecting files for review".
3. Apply the "Rules for proofreading and typo scanning".
4. Apply the "Rules for presenting editing results" to present the findings.

### Command: `polish`

Goal: find local links in repository files that point to files that do not exist.

When the user says `polish`

1. Resolve the file scope from explicit paths/globs or infer it from recent session context.
2. If the user did not supply a tone of voice file, ask for it and stop.
3. Apply the "Rules for selecting files for review".
4. Apply the "Rules for proofreading and typo scanning".
5. Apply the "Rules for polishing".
6. Apply the "Rules for presenting editing results" to present the findings.

### Command `broken links`

Goal: run typo/grammar corrections and also check tone of voice against a user-supplied target tone.

When the user says `broken links`

1. Resolve the file scope from explicit paths/globs or infer it from recent session context.
2. Apply the "Rules for selecting files for review".
3. Apply the "Rules for broken link scanning".
4. Apply the "Rules for presenting editing results" to present the findings.
