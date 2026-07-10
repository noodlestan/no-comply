# {task.ame}

DIRECTIVE: replace the H1 by `# {task.name}`

## Metadata

template: `.agents/skills/draft-no-comply-entity-task/no-comply-entity-draft-template.md`

### Skills required:

- `skill.id` — and why.

## Summary

One sentence, heavy on why, optimise for humans.

## Changes

Summary of entities in scope synthesised by the **rehash** skill along with the "Rules for Synthesising" and "Rules for Presenting".

## Entities

### Add `{entity.id}`

**Why:** This new entity will allow ...

**Identity:** Package, Module, Name, Factory

**Composes:** List composables, mixins, or controllers it composes and what it inherits from each.

**Accepts Props:**

- `prop?: Type` (default) — description

**Renders:** (for component entities only)

Structure pseudo code:

```
<element $={combined $root + $others}>
  {children}
</element>
```

**Example Usage:**

```tsx
<Component prop={value} />
```

---

### Modify `{entity.id}`

**Why:** Adding/modifying ... will allow ...

**Identity:** Package, Module, Name

**Impact:** Is this used anywhere? Is it breaking?

**Changes:**

- Key change 1
- Key change 2

**Example Usage:** (if props or API change)

```tsx
<Component newProp={value} />
```

---

### Remove `{entity.id}`

**Why:** Replaced by ...

**Impact:** Not used anywhere / used in X and needs migration.

---

## Notes

### Unrefined

List categorised ideas, risks, blockers, open questions, and deferred decisions.

### Follow ups

List items not in scope but actionable.
