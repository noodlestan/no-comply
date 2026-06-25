# @no-comply/solid-contexts — Module Map

Generated: 2025-06-25
Author: sub-agent

```
src/
  index.ts                        — Package entry: re-exports all 14 feature modules

  container/
    contexts/
      Mode/
        createModeContext.ts       — Factory: creates mode context with parent-child tree
        types.ts                   — ModeContextOptions, ModeContextValue, ModeContextVariant
      Surface/
        createSurfaceContext.ts    — Factory: creates surface context with parent-child tree
        types.ts                   — SurfaceContextOptions, SurfaceContextValue, SurfaceContextVariant
      Theme/
        createThemeContext.ts      — Factory: creates theme context with parent-child tree
        types.ts                   — ThemeContextOptions, ThemeContextValue, ThemeContextVariant
    helpers/
      createModeVariant.ts         — Creates a mode variant object
      createSurfaceVariant.ts      — Creates a surface variant object
      createThemeVariant.ts        — Creates a theme variant object
    providers/
      ModeContext/
        ModeContextProvider.tsx    — Provides mode context to subtree
        useMode.tsx                — Consumes mode context
      SurfaceContext/
        SurfaceContextProvider.tsx — Provides surface context to subtree
        useSurface.tsx             — Consumes surface context
      ThemeContext/
        ThemeContextProvider.tsx   — Provides theme context to subtree
        useTheme.tsx               — Consumes theme context

  context/
    contexts/
      ContextTree/
        createContextNode.ts       — Factory: creates a context tree node
        createContextRoot.ts       — Factory: creates a context tree root
        types.ts                   — ContextTree types
    effects/
      createContextDataEffect.tsx  — Solid effect: applies context data attributes to element
      createContextVarsEffect.tsx  — Solid effect: applies context CSS vars to element
    helpers/
      createActiveContextsMap.ts   — Maps context keys to controller-scoped keys
      createContextId.ts           — Creates hierarchical context ID string
      reduceContextVariantData.ts  — Reduces variants → data attributes
      reduceContextVariantVars.ts  — Reduces variants → CSS custom properties
    providers/
      ActiveContexts/
        ActiveContextsProvider.tsx — Provides active contexts tracking
        useActiveContexts.tsx      — Consumes active contexts
      ContextTree/
        ContextNodeProvider.tsx    — Provides context node to subtree
        ContextRootProvider.tsx    — Provides context root
        useContextTreeNode.ts     — Consumes context tree node
        useContextTreeRoot.ts     — Consumes context tree root
      ContextVariants/
        ContextVariantsProvider.tsx — Provides variant resolution
        useContextVariantsConsumer.ts — Consumes variants (reads current)
        useContextVariantsProducer.ts — Produces variants (provides new)
    services/
      ActiveContexts/
        createActiveContextsService.ts — Factory: creates active contexts service
        types.ts                   — ActiveContextsService types
    types.ts                        — Core types: BaseContext, ContextNode, ContextVariant, etc.

  controller/
    helpers/
      createUIController.ts          — Factory: creates combined parent+child controller
      createUIControllerChildAPI.ts  — Factory: creates child controller with lifecycle
      createUIControllerContainer.ts — Factory: creates ReactiveMap-based controller container
      createUIControllerParentAPI.ts — Factory: creates parent controller for child tracking
      createUIControllerRoot.ts      — Factory: creates root controller with container
    types.ts                         — UIController, UIControllerChildAPI, etc.

  expose/
    constants.ts                     — EXPOSED_DATA_PROPS constant array
    helpers/
      createExposable.ts             — Creates exposable component descriptor
      exposeAPI.ts                   — Wraps API with data-xp tracking attributes
    providers/
      Expose/
        ExposeProvider.tsx           — Provides expose service to subtree
        useExposeService.ts          — Consumes expose service (throws if missing)
        useExposeServiceMaybe.ts     — Consumes expose service (returns undefined)
    services/
      Expose/
        createExposeService.ts       — Factory: creates expose tracking service
        types.ts                     — ExposeServiceAPI, ExposedItem
    types.ts                         — ExposableAPI, ExposedAPI, ExposedDataProps

  focus/
    contexts/
      Focus/
        constants.ts                 — Focus context constants
        createFocusContext.ts        — Factory: creates focus context with parent-child tree
        types.ts                     — Re-exports private types
    helpers/
      createFocusTarget.ts           — Creates focus target producer (setTarget/unsetTarget)
      createFocusTargetName.ts       — Creates named focus target descriptor
      createFocusTargetRef.ts        — Creates ref-based focus target consumer
      createFocusTargetRefSignal.ts  — Creates signal-based focus target ref
    providers/
      FocusContext/
        FocusContextProvider.tsx     — Provides focus context
        useFocus.tsx                 — Consumes focus context
      FocusTargets/
        FocusTargetsProvider.tsx     — Provides focus targets service
        useFocusTargetConsumer.ts    — Registers as focus target consumer
        useFocusTargetContext.ts     — Consumes focus targets context
    services/
      FocusTargets/
        createFocusTargetsService.ts — Factory: creates focus targets service
        types.ts                     — FocusTargetsService types
    types.ts                         — FocusTarget, FocusTargetConsumerAPI, FocusTargetProducerAPI

  form/
    contexts/
      Field/
        constants.ts                 — Field context constants
        createFieldContext.ts        — Factory: creates field context
        types.ts                     — FieldContext types
      Form/
        constants.ts                 — Form context constants
        createFormContext.ts         — Factory: creates form context
        types.ts                     — FormContext types
    providers/
      FieldContext/
        FieldContextProvider.tsx     — Provides field context
        useField.ts                  — Consumes field context
      FormContext/
        FormContextProvider.tsx      — Provides form context
        useForm.ts                   — Consumes form context
        useFormMaybe.ts              — Consumes form context (optional)

  icons/
    helpers/
      createIconValue.ts             — Wraps IconComponent into IconValue
      resolveIconValue.ts            — Resolves IconValue to component (exported as `i`)
    providers/
      Icons/
        IconsProvider.tsx            — Provides global icon registry
        useIcons.ts                  — Consumes global icon service
      LocalIcons/
        LocalIconsProvider.tsx       — Provides scoped icon map
        useLocalIcons.ts             — Consumes local icon map
    services/
      Icons/
        createIconsService.ts        — Factory: creates icon registry
        types.ts                     — IconsServiceAPI
    types.ts                         — IconComponent, IconValue, IconMap

  labels/
    helpers/
      resolveLabelValue.ts           — Resolves LabelValue to string (exported as `l`)
    providers/
      LocalLabels/
        LocalLabelsProvider.tsx      — Provides scoped label map
        useLocalLabels.ts            — Consumes local label map
    types.ts                         — LabelValue, LabelMap

  locale/
    components/
      Translate/
        Translate.tsx                — Renders translated string with interpolation
        types.ts                     — TranslateProps
    providers/
      Locale/
        LocaleProvider.tsx           — Provides locale service
        useLocale.ts                 — Consumes locale service
        useTranslate.ts              — Consumes translate service
    services/
      Locale/
        createLocaleService.ts       — Factory: creates locale service
        types.ts                     — LocaleServiceAPI, LocaleServiceOptions
      TranslateService/
        createTranslateService.ts    — Factory: creates i18next-based translate service
        types.ts                     — TranslateServiceAPI, TranslateComponent

  modals/
    contexts/
      Modal/
        constants.ts                 — Modal context constants
        createModalContext.ts        — Factory: creates modal context
        types.ts                     — ModalContext, ModalContextOptions
    providers/
      ModalContext/
        ModalContextProvider.tsx     — Provides single modal context
        useModal.tsx                 — Consumes modal context
      Modals/
        ModalsProvider.tsx           — Provides modal stack service
        useModals.tsx                — Consumes modal stack service
    services/
      Modals/
        ModalsService.ts             — Factory: creates modal stack service
        types.ts                     — ModalsServiceAPI

  navigation/
    providers/
      Navigation/
        NavigationProvider.tsx       — Provides navigation context
        useNavigation.tsx            — Consumes navigation service
    services/
      Navigation/
        createNavigationService.ts   — Factory: creates URL-based navigation service
        types.ts                     — NavigationServiceAPI, NavigationServiceOptions

  selection/
    contexts/
      Selection/
        createSelection.ts           — Factory: creates selection context
        types.ts                     — Selection types
    providers/
      SelectionContext/
        SelectionProvider.tsx        — Provides selection context
        useSelection.tsx             — Consumes selection context

  settings/
    providers/
      Settings/
        SettingsProvider.tsx         — Provides settings service
        useSettings.tsx              — Consumes settings service
        useSettingSafely.tsx         — Consumes single setting with fallback
        helpers/
          isParamsSettingSchema.ts   — Type guard for params setting schema
    services/
      Settings/
        createSettingsService.ts     — Factory: creates typed settings registry
        types.ts                     — SettingsServiceAPI, Setting union, SettingGroup

  shortcuts/
    helpers/
      createCommandMap.ts            — Builds command name → controller map
      createShortcutsController.ts   — Creates bound shortcut controller
      createShortcutsFromMeta.ts     — Builds KeyboardShortcut[] from controller metadata
      getEventKeyBinding.ts          — Serializes KeyboardEvent to string
      isAlphaCharacter.ts            — Checks if key is alphabetic
      isKeyboardShortcut.ts          — Detects if event is a keyboard shortcut
    providers/
      Shortcuts/
        ShortcutsProvider.tsx        — Provides shortcut service
        useShortcuts.tsx             — Consumes shortcut service
        useShortcutsKeyDownListener.ts — Registers keydown listener
    services/
      Shortcuts/
        createShortcutsService.ts    — Factory: creates keyboard shortcut service
        types.ts                     — ShortcutsServiceAPI
    types.ts                         — KeyboardShortcut, ShortcutControllerMessage

  system/
    providers/
      SystemContext/
        SystemContextProvider.tsx    — Provides system context (with optional default service)
        useSystemContext.tsx         — Consumes system context
    services/
      SystemContext/
        createSystemContextService.ts — Factory: creates system context service
        types.ts                     — SystemContextServiceAPI, SystemColorSchemeName

  private/
    string/
      capitalize.ts                  — Internal: capitalizes first letter of string
```
