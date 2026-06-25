---
updated: 2026-06-25
by: OpenCode/Qwen
---

# Modules

### Dependency risks

- `@babel/standalone` declared as peer dependency — not pinned (user-managed)
- `assert` declared as peer dependency — required by `@babel/standalone`

## Performance

### Bundle size

- `@babel/standalone` adds ~3-4MB to bundle when used (documented in README)

## Testing

### Unit coverage

- No tests exist despite Vitest being configured

### Integration tests

- None

---

## Architectural debt

### Context system coupling

- N/A

### Extraction pipeline

- `private/config.json` is an opencode config file left in the source tree (unrelated to the library)

---

## Conventions

### Naming consistency

- Consistent across all files: `camelCase` for functions, `PascalCase` for types, file names match exports

### File structure

- Clean separation: one function per file, `private/` for internals, `helpers/` for semi-public

---

## Known issues

### Reactive loops

- N/A

### Dev tooling

- None observed
