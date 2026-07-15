# Structured Contexts Domain API

## Summary

The Structured Contexts API provides foundational definitions and formatting procedures for working with structured, reusable context in agent systems. Consumers can read definitions of context files and artificial procedures, and apply formatting procedures to render references to skills, processes, commands, and templates. Producers can read all consumer capabilities and additionally define new artificial procedures (commands, processes, templates, formatters) and generate formatted references for domain-specific artifacts.

## Hoisted

No items.

## All

These items are published in both the consumer and producer API surfaces.

### Formatters

| Type | Name | Purpose | Input | Output | Path | Status |
| ---- | ---- | ------- | ----- | ------ | ---- | ------ |
| Formatter | Formatter for Skill References | A formatted skill invocation reference. | summary | validated entity | formatters/references.md | ✅ |
| Formatter | Formatter for Process References | A formatted process invocation reference. | process | formatted reference | formatters/references.md | ✅ |
| Formatter | Formatter for Command References | A formatted command invocation reference. | summary | validated entity | formatters/references.md | ✅ |
| Formatter | Formatter for Template References | A formatted template invocation reference. | summary | validated entity | formatters/references.md | ✅ |

## Consumer

These items are published in the consumer scope only.

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Context File | A file that contains structured, reusable context such as Skills, Agent Mode files, and files under the `.agents/domains/` directory. | definitions/index.md | ✅ |

## Producer

These items are published in the producer scope only.

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Artificial Procedure | A reusable set of instructions in a context file that provides a way to reuse the instructions in different contexts. A procedure is one of: `Command`, `Process`, `Template` of `Formatter` | definitions/index.md | ✅ |
| Definition | Definitions related to Structured Contexts | Artificial Command, Artificial Process, Artificial Template, Artificial Formatter | definitions/index.md | ✅ |
