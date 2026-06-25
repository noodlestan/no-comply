---
name: inspect-project
description: Iteratively analyzes a code project and produces a structured summary of architecture, APIs, and conventions
---

# Skill: Inspect Project

## Goal

Produce a structured understanding of a code library by iteratively analyzing its metadata, source structure, APIs, and conventions.

Focus on:

- Architecture
- Public APIs
- Design conventions
- Underlying engineering principles

## When To Use

Only when requested.

## Instructions

Iterative chat-based analysis

Each phase should return partial results before continuing.

### Before you start

Definition: a project is a package, library, application, or tool containing a `meta` directory.

IMPORTANT: In the `meta` directory of each project there might be markdown files containing pre-extracted information. DO NOT read any of thsese files into context until asked to.

Before executing any filesystem operations ask for confirmation: e.g.: "I would like to look at some files under `api/helpers` in order to ..."

### Step 1 – Project Identification

Identify:

- Package type (library, framework, CLI, app, plugin)
- Language and runtime environment
- Build system and tooling
- Entry points (package.json, main/module/exports, README)

### Step 2 – API Surface Discovery

Identify:

- Public APIs (exports, modules, entry files)
- Core primitives (functions, classes, hooks, utilities)
- Entity types (domain objects, interfaces, models)
- Internal vs external boundaries

Light code scanning is allowed to confirm structure.

Load `<ib>/meta/api.md` file now, if it already exists.

Take note of differences between api meta file and what was identified.

### Step 3 – Convention Extraction

Infer:

- Naming conventions
- File organization patterns
- API design patterns
- Typing / interface conventions
- Composition patterns

Light code scanning is allowed to confirm inferences.

Load the `<ib>/meta/conventions.md` file now, if it already exists, and any files it may extend.

Take note of differences between conventions meta file what was inferred.

### Step 4 – Architecture Inference

Infer:

- Module boundaries
- Layering (core / domain / infrastructure / UI, etc.)
- Dependency flow direction
- Extensibility model
- Coupling style (tight vs modular)

From observed structure, infer:

- Design principles being followed (explicit or implicit)
- Trade-offs (performance vs flexibility, abstraction vs simplicity)
- Consistency of patterns

Light code scanning is allowed to confirm inferences.

Load `<ib>/meta/architecture.md` file if it already exists and any files it may extend.

Take note of differences between architecture meta file what was inferred.

## Interaction Model

The analysis is strictly iterative:

- Each phase produces a report
- The user is given opportunity to refine focus
- Do not proceed silently through all phases in one step
- Ask before deepening exploration when ambiguity exists

## Output Format

Each step should return:

- Current Phase: What is being analyzed
- Findings: Key observations
- Inferred Insights: Hypotheses about structure and design
- Highlighted inconsistencies: Between scan and meta files
- Open Questions: What is still unknown or needs confirmation
- Next Step Proposal: What should be analyzed next

## Success Criteria

The resulting analysis:

- clearly identifies API surface
- explains architecture in structural terms
- captures conventions consistently used in the codebase
- infers underlying design principles
- remains incremental and reviewable at each stage
