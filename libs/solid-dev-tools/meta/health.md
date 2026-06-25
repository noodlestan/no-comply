# Health Check

- updated: 25/06/2026
- by: sub-agent

## Security

## Performance

**#reactivity** `createDebugContextTree` rebuilds entire tree on every context change via `createMemo` — large context hierarchies may cause repaint delays

## Accessibility

## Architecture

**#coupling** Tightly bound to `@no-comply/solid-contexts` API — not portable outside the No Comply ecosystem

**#null-state** `DebugContextTreePanel` assumes a context tree root is always available — no loading, empty, or error states

**#distribution** Package publishes raw TS source, shifting compilation responsibility to consumers

## Conventions

## Testing

**#coverage** No test files exist despite vitest being configured

## DevX

## Documentation

## Dependencies

**#brittle** SCSS import `@no-comply/standard-ui/scss/mixins/color.scss` is a deep import path that may break if internal structure changes

**#tree-shaking** `DebugStyles` component uses a bare import of `global.scss` — side-effect import may not tree-shake cleanly

## Issues

## CI/CD
