# Conventions for Typescript files

## Formatting rules

The following rules are not enforced by `lint:fix` and MUST be followed by the coder.

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
