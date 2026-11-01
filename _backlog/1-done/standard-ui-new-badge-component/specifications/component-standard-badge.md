# ADD component:standard:badge

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/**`

## Why

Documentation pages need a way to tag content using different colors. The Badge component provides a simple, themed `<span>` for rendering tags, labels, and status indicators.

## Example Usage (component)

```tsx
<Badge palette="color-1" size="medium">
  {tag.name}
</Badge>
```

## Identity

Package: `@no-comply/standard-ui`
Module: `content/components/Badge/`
Name: `Badge`
Factory: `createBadge`
CSS Module?: YES
Id: `component:standard:badge`

### Responsibility

Compose `BadgeMixin` and render a `<span>` with composed styles and children.

## Composes

- `BadgeMixin` — entry point for badge, owns `.Badge` structural styles, composes a number of mixins.

## Accepts Props

**Own props:**

- none

**Composed props:**

- all Props fron `BadgeMixin`

## Computes

nothing

## Component

Is a `ParentComponent` rendering a single `<span>` element with children.

### Props

Accepts `ClosedTagProps` as `$others`.

### Renders

**Structure**

```
<span $={combined $root + $others}>
  {children}
</span>
```

**Responsibilities**

- The `<span>` is the visual root carrying all class lists.
- Children are rendered as-is (text or inline elements).
