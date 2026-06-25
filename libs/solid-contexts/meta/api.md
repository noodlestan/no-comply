# @no-comply/solid-contexts — API Reference

Generated: 2025-06-25
Author: sub-agent

## Entry Point

```
import { ... } from '@no-comply/solid-contexts';
```

Main entry: `src/index.ts` (TypeScript source, consumed directly by bundlers).

## Exports Summary

14 feature modules, each a flat namespace of Provider components, consumer hooks, service factories, helper functions, and types.

| Module         | Exports                                                                                                                                                                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **container**  | Context factories (`createModeContext`, `createSurfaceContext`, `createThemeContext`), variant helpers (`createModeVariant`, `createSurfaceVariant`, `createThemeVariant`), providers (`ModeProvider`, `SurfaceProvider`, `ThemeProvider`)                             |
| **context**    | Core context types (`BaseContext`, `ContextNode`, `ContextVariant`, `ContextVarsAPI`, `ContextDataAPI`), helpers (`createContextId`, `createActiveContextsMap`, `reduceContextVariantVars`, `reduceContextVariantData`), services (`ActiveContextsService`), providers |
| **controller** | `createUIController`, `createUIControllerChildAPI`, `createUIControllerParentAPI`, `createUIControllerContainer`, `createUIControllerRoot`, `UIController` types                                                                                                       |
| **expose**     | `createExposable`, `exposeAPI`, `ExposeServiceAPI`, `ExposableAPI`, `ExposedAPI`, `ExposeProvider`, `useExposeService`, `useExposeServiceMaybe`                                                                                                                        |
| **focus**      | `createFocusContext`, `createFocusTarget`, `createFocusTargetRef`, `createFocusTargetName`, `createFocusTargetRefSignal`, `FocusTargetConsumerAPI`, `FocusTargetProducerAPI`, `FocusContextProvider`, `FocusTargetsProvider`, `useFocus`, `useFocusTargetConsumer`     |
| **form**       | `FormProvider`, `FieldProvider`, form contexts                                                                                                                                                                                                                         |
| **icons**      | `createIconsService`, `createIconValue`, `resolveIconValue` (aliased as `i`), `IconsProvider`, `useIcons`, `LocalIconsProvider`, `useLocalIcons`, `IconMap`, `IconValue`, `IconComponent`                                                                              |
| **labels**     | `resolveLabelValue` (aliased as `l`), `LocalLabelsProvider`, `useLocalLabels`, `LabelMap`, `LabelValue`                                                                                                                                                                |
| **locale**     | `createLocaleService`, `createTranslateService`, `LocaleProvider`, `useLocale`, `useTranslate`, `Translate` component, `LocaleServiceAPI`, `TranslateServiceAPI`                                                                                                       |
| **modals**     | `ModalsService`, `ModalsProvider`, `useModals`, `ModalsServiceAPI`, `ModalContext`                                                                                                                                                                                     |
| **navigation** | `createNavigationService`, `NavigationProvider`, `useNavigation`, `NavigationServiceAPI`                                                                                                                                                                               |
| **selection**  | `createSelection`, `SelectionProvider`, `useSelection`, `SelectionContext` types                                                                                                                                                                                       |
| **settings**   | `createSettingsService`, `SettingsProvider`, `useSettings`, `SettingsServiceAPI`, `Setting` union types                                                                                                                                                                |
| **shortcuts**  | `createShortcutsService`, `createShortcutsController`, `createShortcutsFromMeta`, `createCommandMap`, `isKeyboardShortcut`, `getEventKeyBinding`, `isAlphaCharacter`, `ShortcutsProvider`, `useShortcuts`, `ShortcutsServiceAPI`, `KeyboardShortcut`                   |

## Main APIs

### container — Context Composition

| API                    | Signature                                                        | Description                                                        |
| ---------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| `createModeContext`    | `(options?: ModeContextOptions) => ModeContextValue`             | Creates a mode (dark/light) context with parent-child tree support |
| `createSurfaceContext` | `(options?: SurfaceContextOptions) => SurfaceContextValue`       | Creates a surface context with parent-child tree support           |
| `createThemeContext`   | `(options?: ThemeContextOptions) => ThemeContextValue`           | Creates a theme context with parent-child tree support             |
| `createModeVariant`    | `(params: { name, extend?, ... }) => ModeContextVariant`         | Creates a mode variant object                                      |
| `createSurfaceVariant` | `(params: { name, extend?, ... }) => SurfaceContextVariant`      | Creates a surface variant object                                   |
| `createThemeVariant`   | `(params: { name, extend?, mode?, ... }) => ThemeContextVariant` | Creates a theme variant object                                     |
| `ModeProvider`         | `Component<{ service?, variants?, children }>`                   | Provides mode context to subtree                                   |
| `SurfaceProvider`      | `Component<{ service?, variants?, children }>`                   | Provides surface context to subtree                                |
| `ThemeProvider`        | `Component<{ service?, variants?, children }>`                   | Provides theme context to subtree                                  |

### context — Core Context Tree

| API                        | Signature                                         | Description                                 |
| -------------------------- | ------------------------------------------------- | ------------------------------------------- |
| `createContextId`          | `(name: string, parent?: ContextId) => ContextId` | Creates a hierarchical context ID           |
| `createActiveContextsMap`  | `<T>(controller, contexts) => T`                  | Maps context keys to controller-scoped keys |
| `reduceContextVariantVars` | `(variants, active) => Styles`                    | Reduces variants into CSS custom properties |
| `reduceContextVariantData` | `(variants, active) => RawDataAttributes`         | Reduces variants into data attributes       |
| `ActiveContextsService`    | Service factory                                   | Tracks active/inactive contexts             |

### controller — UI Controller Hierarchy

| API                           | Signature                                         | Description                                              |
| ----------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| `createUIController`          | `(name, options?) => UIController`                | Creates a combined parent+child controller               |
| `createUIControllerChildAPI`  | `(name, implementation?) => UIControllerChildAPI` | Creates a child controller with lifecycle                |
| `createUIControllerParentAPI` | `(implementation?) => UIControllerParentAPI`      | Creates a parent controller for child tracking           |
| `createUIControllerContainer` | `() => UIControllerContainer`                     | Creates a named controller container (ReactiveMap-based) |
| `createUIControllerRoot`      | `(container, name) => UIControllerParent`         | Creates a root controller with container access          |
| `createUIControllerParentAPI` | `(container, ...) => UIControllerParentAPI`       | Creates a parent API bound to a container                |

### expose — Development API Exposure

| API                     | Signature                                           | Description                                              |
| ----------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| `createExposable`       | `<P>(name, props?) => [props, exposable?, compose]` | Creates an exposable component descriptor                |
| `exposeAPI`             | `<T>(exposable, keys, api) => T`                    | Wraps an API object with tracking and data-xp attributes |
| `createExposeService`   | `(options?) => ExposeServiceAPI`                    | Creates the expose tracking service                      |
| `ExposeProvider`        | `Component<{ service, children }>`                  | Provides expose service to subtree                       |
| `useExposeService`      | `() => ExposeServiceAPI`                            | Gets expose service (throws if not provided)             |
| `useExposeServiceMaybe` | `() => ExposeServiceAPI \| undefined`               | Gets expose service (returns undefined if not provided)  |

### focus — Focus Target Management

| API                          | Signature                            | Description                                             |
| ---------------------------- | ------------------------------------ | ------------------------------------------------------- |
| `createFocusContext`         | `(options?) => FocusContextValue`    | Creates a focus context with parent-child tree          |
| `createFocusTarget`          | `(target) => FocusTargetProducerAPI` | Creates a focus target producer (setTarget/unsetTarget) |
| `createFocusTargetRef`       | `() => FocusTargetConsumerAPI`       | Creates a ref-based focus target                        |
| `createFocusTargetName`      | `(name) => FocusTargetName`          | Creates a named focus target descriptor                 |
| `createFocusTargetRefSignal` | `() => [ref, setRef]`                | Creates a signal-based focus target ref                 |
| `FocusContextProvider`       | `Component<{ service?, children }>`  | Provides focus context                                  |
| `FocusTargetsProvider`       | `Component<{ service, children }>`   | Provides focus targets service                          |
| `useFocus`                   | `() => FocusTargetConsumerAPI`       | Consumes focus context                                  |
| `useFocusTargetConsumer`     | `() => void`                         | Registers as focus target consumer                      |

### form — Form & Field Contexts

| API             | Signature                       | Description                          |
| --------------- | ------------------------------- | ------------------------------------ |
| `FormProvider`  | `Component<FormProviderProps>`  | Provides form context                |
| `FieldProvider` | `Component<FieldProviderProps>` | Provides field context within a form |

### icons — Icon Registry

| API                  | Signature                           | Description                                          |
| -------------------- | ----------------------------------- | ---------------------------------------------------- |
| `createIconsService` | `(initial?) => IconsServiceAPI`     | Creates an icon registry service                     |
| `createIconValue`    | `(icon) => IconValue`               | Wraps an icon component into IconValue               |
| `resolveIconValue`   | `(value, ...args) => IconComponent` | Resolves an IconValue to a component; aliased as `i` |
| `IconsProvider`      | `Component<{ service, children }>`  | Provides global icon registry                        |
| `useIcons`           | `() => IconsServiceAPI`             | Consumes global icon service                         |
| `LocalIconsProvider` | `Component<{ icons, children }>`    | Provides local (scoped) icon map                     |
| `useLocalIcons`      | `() => IconMap`                     | Consumes local icon map                              |

### labels — Label Registry

| API                   | Signature                         | Description                                       |
| --------------------- | --------------------------------- | ------------------------------------------------- |
| `resolveLabelValue`   | `(value, ...args) => string`      | Resolves a LabelValue to a string; aliased as `l` |
| `LocalLabelsProvider` | `Component<{ labels, children }>` | Provides local label map                          |
| `useLocalLabels`      | `() => LabelMap`                  | Consumes local label map                          |

### locale — Internationalization (i18next)

| API                      | Signature                          | Description                                                |
| ------------------------ | ---------------------------------- | ---------------------------------------------------------- |
| `createLocaleService`    | `(options) => LocaleServiceAPI`    | Creates a locale service with locale state and translation |
| `createTranslateService` | `(options) => TranslateServiceAPI` | Creates an i18next-based translation service               |
| `LocaleProvider`         | `Component<{ service, children }>` | Provides locale to subtree                                 |
| `useLocale`              | `() => LocaleServiceAPI`           | Consumes locale service                                    |
| `useTranslate`           | `() => TranslateServiceAPI`        | Consumes translate service                                 |
| `Translate`              | `Component<{ key, options? }>`     | Renders a translated string with interpolation             |

### modals — Modal Stack

| API              | Signature                          | Description                 |
| ---------------- | ---------------------------------- | --------------------------- |
| `ModalsService`  | Service factory                    | Creates modal stack service |
| `ModalsProvider` | `Component<{ service, children }>` | Provides modal service      |
| `useModals`      | `() => ModalsServiceAPI`           | Consumes modal service      |

### navigation — URL-Based Navigation

| API                       | Signature                           | Description                  |
| ------------------------- | ----------------------------------- | ---------------------------- |
| `createNavigationService` | `(options) => NavigationServiceAPI` | Creates a navigation service |
| `NavigationProvider`      | `Component<{ service, children }>`  | Provides navigation context  |
| `useNavigation`           | `() => NavigationServiceAPI`        | Consumes navigation service  |

### selection — Selection Context

| API                 | Signature                          | Description                 |
| ------------------- | ---------------------------------- | --------------------------- |
| `createSelection`   | `(options?) => SelectionValue`     | Creates a selection context |
| `SelectionProvider` | `Component<{ service, children }>` | Provides selection context  |
| `useSelection`      | `() => SelectionValue`             | Consumes selection context  |

### settings — Settings Registry

| API                     | Signature                          | Description                       |
| ----------------------- | ---------------------------------- | --------------------------------- |
| `createSettingsService` | `(initial?) => SettingsServiceAPI` | Creates a typed settings registry |
| `SettingsProvider`      | `Component<{ service, children }>` | Provides settings service         |
| `useSettings`           | `() => SettingsServiceAPI`         | Consumes settings service         |

### shortcuts — Keyboard Shortcuts

| API                         | Signature                                          | Description                                    |
| --------------------------- | -------------------------------------------------- | ---------------------------------------------- |
| `createShortcutsService`    | `(options) => ShortcutsServiceAPI`                 | Creates a keyboard shortcut service            |
| `createShortcutsController` | `(service, controllers) => ShortcutsControllerAPI` | Creates a shortcut controller bound to service |
| `createShortcutsFromMeta`   | `(metas) => KeyboardShortcut[]`                    | Builds shortcuts from controller metadata      |
| `createCommandMap`          | `(controllers) => Map`                             | Creates a command name → controller map        |
| `isKeyboardShortcut`        | `(ev) => string \| undefined`                      | Detects if event is a keyboard shortcut        |
| `getEventKeyBinding`        | `(ev) => string`                                   | Serializes a keyboard event to string          |
| `isAlphaCharacter`          | `(key) => boolean`                                 | Checks if key is an alphabetic character       |
| `ShortcutsProvider`         | `Component<{ service, children }>`                 | Provides shortcut service                      |
| `useShortcuts`              | `() => ShortcutsServiceAPI`                        | Consumes shortcut service                      |

### system — System Context

| API                          | Signature                               | Description                                                  |
| ---------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| `createSystemContextService` | `(options?) => SystemContextServiceAPI` | Creates system context service (color scheme, locale, focus) |
| `SystemContextProvider`      | `Component<{ service?, children }>`     | Provides system context                                      |
| `useSystemContext`           | `() => SystemContextServiceAPI`         | Consumes system context                                      |

## Helpers

| Helper                           | Module    | Description                                 |
| -------------------------------- | --------- | ------------------------------------------- |
| `createIconValue(i)`             | icons     | Wraps an icon component                     |
| `resolveIconValue(v, ...a)`      | icons     | Resolves icon to component; exported as `i` |
| `resolveLabelValue(v, ...a)`     | labels    | Resolves label to string; exported as `l`   |
| `createContextId(n, p?)`         | context   | Creates hierarchical context ID             |
| `reduceContextVariantVars(v, a)` | context   | Variants → CSS custom properties            |
| `reduceContextVariantData(v, a)` | context   | Variants → data attributes                  |
| `createActiveContextsMap(c, m)`  | context   | Maps context keys for controller            |
| `createModeVariant(p)`           | container | Creates mode variant object                 |
| `createSurfaceVariant(p)`        | container | Creates surface variant object              |
| `createThemeVariant(p)`          | container | Creates theme variant object                |
| `createFocusTargetRef()`         | focus     | Creates a ref-based focus target            |
| `createFocusTargetName(n)`       | focus     | Creates a named focus target                |
| `createFocusTargetRefSignal()`   | focus     | Creates signal-based focus ref              |
| `createFocusTarget(t)`           | focus     | Creates focus target producer               |
| `createCommandMap(c)`            | shortcuts | Builds command → controller map             |
| `createShortcutsFromMeta(m)`     | shortcuts | Builds keyboard shortcuts from meta         |
| `getEventKeyBinding(e)`          | shortcuts | Serializes KeyboardEvent                    |
| `isKeyboardShortcut(e)`          | shortcuts | Checks if event is a shortcut               |
| `isAlphaCharacter(k)`            | shortcuts | Checks alphabetic character                 |
| `exposeAPI(e, k, a)`             | expose    | Wraps API with tracking                     |
| `createExposable(n, p)`          | expose    | Creates exposable descriptor                |

## Types

All types are exported from their respective module's `types.ts` file as named exports. Key types:

| Type                                      | Module     | Description                                               |
| ----------------------------------------- | ---------- | --------------------------------------------------------- |
| `BaseContext`                             | context    | `{ type: string }`                                        |
| `ContextNode`                             | context    | Tree node: id, value, parent, children                    |
| `ContextVariant`                          | context    | `{ type, name, extend }`                                  |
| `ContextVarsAPI`                          | context    | `contextVars() => Styles`                                 |
| `ContextDataAPI`                          | context    | `contextData() => RawDataAttributes`                      |
| `UIController`                            | controller | Combined parent + child controller                        |
| `UIControllerChildAPI`                    | controller | Lifecycle: activate/deactivate/override/suspend/resume    |
| `UIControllerParentAPI`                   | controller | Child tracking                                            |
| `UIControllerContainer`                   | controller | Map of named controllers                                  |
| `ExposableAPI`                            | expose     | `{ id, name, parent, props, compose, composes }`          |
| `ExposedAPI`                              | expose     | Generic `T & { _id? }`                                    |
| `ExposeServiceAPI`                        | expose     | Track/untrack/list/byId                                   |
| `FocusTarget`                             | focus      | `() => void`                                              |
| `FocusTargetConsumerAPI`                  | focus      | `[setFocus]` tuple                                        |
| `FocusTargetProducerAPI`                  | focus      | `[setTarget, unsetTarget]` tuple                          |
| `IconMap` / `IconValue` / `IconComponent` | icons      | Icon registry types                                       |
| `LabelMap` / `LabelValue`                 | labels     | Label registry types                                      |
| `LocaleServiceAPI`                        | locale     | Locale management + translation                           |
| `TranslateServiceAPI`                     | locale     | i18next-based translation                                 |
| `NavigationServiceAPI`                    | navigation | `current()`, `isCurrent()`                                |
| `ModalsServiceAPI`                        | modals     | Modal stack CRUD                                          |
| `SettingsServiceAPI`                      | settings   | Settings CRUD                                             |
| `Setting` (union)                         | settings   | `BooleanSetting \| NumberSetting \| StringSetting \| ...` |
| `KeyboardShortcut`                        | shortcuts  | `UIShortcut & { keyBinding }`                             |
| `ShortcutsServiceAPI`                     | shortcuts  | Key binding + controller dispatch                         |
| `SystemContextServiceAPI`                 | system     | `colorScheme`, `locale`, `hasFocus` accessors             |
