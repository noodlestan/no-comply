# no-comply architecture

## Introduction

This document describes cross-cutting architecture patterns that apply to all project types in the no-comply monorepo. It covers design principles, layering, dependency flow, and external dependencies that are shared across metadata extraction, code layout, compilation, and UI libraries. For project-type-specific architecture details, see the respective group files.

## General

Architecture shared across all project types.

### Design Principles

- **Composition over inheritance** — Entity shapes, layout trees, prop objects, and service factories are all built by composing base types and small functions rather than using class hierarchies. Applied consistently across metadata extraction, code layout, compilation, and UI libraries.

- **Separation of concerns** — Data shapes are separated from operations, which are separated from querying, which are separated from internal implementation. Build tooling is isolated from consumer packages. Each pipeline phase lives in its own module.

- **Explicit context over invisible state** — All dependencies are threaded through context objects or function parameters. No global state, no DI container, no singletons. Context flows sideways through function parameters.

- **Function composition over class hierarchy** — Everything is functions returning plain objects. No classes, no inheritance. Services are factory functions returning typed plain objects.

- **Type safety through generics and discriminated unions** — Generic type parameters flow through pipelines end-to-end. All type representations use a `kind` string discriminator enabling exhaustiveness checking.

- **Immutable transformations** — All resolvers and transforms produce new objects via spread; no in-place mutation.

- **Factory pattern** — Services are factory functions returning typed plain objects. Entity extractors share uniform factory signatures. Build systems compose configs, helpers, and plugins through factory functions.

- **Encapsulation via private directories** — Internal implementation details hidden behind barrel exports. `private/` directories are never re-exported. Domains never import from other domains' `private/` directories.

- **Graceful degradation** — Resolution failures produce warnings and return original nodes rather than crashing. Circular references throw explicitly.

### Layering

- **Strictly acyclic downward flow** — All packages enforce unidirectional dependency flow. No circular dependencies exist at the public boundary. Internal `private/` directories may have tight coupling within a module, but no cycles cross module boundaries.

- **Foundation at bottom, consumers at top** — Core primitives and type definitions sit at the bottom. Domain-specific logic, orchestration, and rendering layers build upward. No package depends on a package at the same or higher layer.

### Dependency Flow

- **Zero outbound dependencies from primitives** — Base type packages have no dependencies, making circular dependencies structurally impossible. All downstream packages depend on primitives for foundational types.

- **One-directional cross-package flow** — Dependencies flow inward-to-outward from foundational types through infrastructure to leaf consumers. Nothing depends on leaf packages.

### External Dependencies

- **TypeScript** — Compiler API (`^5.9.3`) used across metadata extraction and code layout packages for AST processing, type guards, and source file creation.

- **SolidJS** — Reactive UI framework (`^1.9.5`) peer dependency for all UI libraries, composables, and the demo application. Provides JSX, components, context, and signals.

