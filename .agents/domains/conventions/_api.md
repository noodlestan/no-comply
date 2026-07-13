# Conventions Domain API

## Summary

The Conventions API provides definitions and processes for managing project conventions—rules and directives applied during planning, coding, documentation, and review. Consumers can read definitions of conventions files and drafts, and follow the process for writing convention drafts. Producers can define new conventions, write convention drafts, and follow the full process for writing conventions.

## Hoisted

These items published to the domain listing (making them immediately discoverable by all agents) and also in both the consumer and producer API surfaces.

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Conventions File | A type of Reference File that contains rules and directives applied when planning, writing code, documentation, and other artefacs, and submitting work for review. | definitions/index.md | ✅ |
| Definition | Conventions Draft | A proposal to add or modify existing conventions that surfaced from friction experienced during a task, review, or correction session. | definitions/index.md | ✅ |

### Processes

| Type | Name | Purpose | Input | Output | Path | Status |
| ---- | ---- | ------- | ----- | ------ | ---- | ------ |
| Process | Process for writing Conventions Drafts | Draft convention proposals from friction. | friction notes | conventions draft | processes/index.md | ✅ |

## All

No items.

## Consumer

No items.

## Producer

These items are published in the producer scope only.

### Processes

| Type | Name | Purpose | Input | Output | Path | Status |
| ---- | ---- | ------- | ----- | ------ | ---- | ------ |
| Process | Process for writing Conventions | Write final conventions from drafts. | conventions draft | conventions file | processes/index.md | ✅ |
