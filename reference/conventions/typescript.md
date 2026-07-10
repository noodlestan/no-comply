# Conventions for Typescript files

## Filesystem Rules

Dogma: Every directory is a module.

### Restricted imports

- RULE: Always import form barrel files
- RULE: Never import from `../../module/sub-module`
- RULE: Never import from `./private/sub-directory`

## Code Conventions

The following rules MUST be followed by the planner and coder because they are either not enforced by `lint:fix` or MUST be taken into consideration when planning a task.

### Strict code

- RULE: Never use `any` - use `unknown` instead. If that doesn't work, stop! to replan types.
- RULE: Never use `!` - use `as string` or `as keyof` instead (after the actual the run time value is has been guaranteed by the correct assertions.)

### Explicit code

- RULE: All functions start with a verb
- RULE: Never abbreviate variable names.
- RULE: Single character symbols are absolutely forbidden
- RULE: Constants exported from other files, even private ones, are always `const ALL_CAPS`.

### Flat code

- RULE: Never nest variable declarations that span more than one line. The only accepted multi-line structures are object literals.
- RULE: Never use conditional expressions and when declaraing literals that
- RULE: Never nest trenary operators. Create intermediate booleans and do it step my step. Don't break this rule if unnesting this would estaful evaluation of potentially unused value, extract to a private helper with early returns instead.
- RULE: Never mix terneray operators with complex expressions. Extract to intermediate states.
- RULE: Never chain `.filter().map().reduce()` if expression does not fit in one line.

### Expand returned structures into new lines

RULE: object literals with more than one logical field that are returned by a function MUST be expanded into mutitple lines.

**Wrong:**

```ts
return { pkg: parts[0], .... };
```

**Correct:**

```ts
return {
  ...
};
```

**Wrong:**

```ts
const api = { ... };
return api;
```

```ts
const api = {
  ...
};
```
