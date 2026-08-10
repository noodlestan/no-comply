# Task: VisuallyHidden — add `when` prop

template: `.agents/skills/write-no-comply-entity-task/no-comply-entity-task-template.md`

## Summary

Add a `when?: boolean` prop to `VisuallyHidden` that conditionally applies visually-hidden styles. When `when={false}`, renders children normally (not hidden). Default `when={true}` preserves current behavior.

## Table of Changes

- MODIFY `component:solid-composables:visually-hidden` — add `when` prop (non-breaking)

## Refined

**Scope:** Single prop addition to `VisuallyHiddenProps` + conditional class in render.

**Constraints:** `when={false}` must not add any hidden styles or wrapper attributes. No breaking change to existing usage.

## Acceptance Criteria

- `when={true}` (default) — current behavior, visually hidden
- `when={false}` — renders as normal visible content
- Works with both component (`<VisuallyHidden>`) and mixin (`createVisuallyHiddenMixin`)
