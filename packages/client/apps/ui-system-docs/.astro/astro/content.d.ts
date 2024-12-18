declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"api/controllers/functions/createUIController.md": {
	id: "api/controllers/functions/createUIController.md";
  slug: "api/controllers/functions/createuicontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/functions/createUIControllerChildAPI.md": {
	id: "api/controllers/functions/createUIControllerChildAPI.md";
  slug: "api/controllers/functions/createuicontrollerchildapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/functions/createUIControllerContainer.md": {
	id: "api/controllers/functions/createUIControllerContainer.md";
  slug: "api/controllers/functions/createuicontrollercontainer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/functions/createUIControllerParentAPI.md": {
	id: "api/controllers/functions/createUIControllerParentAPI.md";
  slug: "api/controllers/functions/createuicontrollerparentapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/functions/createUIControllerRoot.md": {
	id: "api/controllers/functions/createUIControllerRoot.md";
  slug: "api/controllers/functions/createuicontrollerroot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/index.md": {
	id: "api/controllers/index.md";
  slug: "api/controllers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/ShortcutId.md": {
	id: "api/controllers/type-aliases/ShortcutId.md";
  slug: "api/controllers/type-aliases/shortcutid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UICommandController.md": {
	id: "api/controllers/type-aliases/UICommandController.md";
  slug: "api/controllers/type-aliases/uicommandcontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIContextKey.md": {
	id: "api/controllers/type-aliases/UIContextKey.md";
  slug: "api/controllers/type-aliases/uicontextkey";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIContextMap.md": {
	id: "api/controllers/type-aliases/UIContextMap.md";
  slug: "api/controllers/type-aliases/uicontextmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIContextValue.md": {
	id: "api/controllers/type-aliases/UIContextValue.md";
  slug: "api/controllers/type-aliases/uicontextvalue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIController.md": {
	id: "api/controllers/type-aliases/UIController.md";
  slug: "api/controllers/type-aliases/uicontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerChildAPI.md": {
	id: "api/controllers/type-aliases/UIControllerChildAPI.md";
  slug: "api/controllers/type-aliases/uicontrollerchildapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerChildImplementation.md": {
	id: "api/controllers/type-aliases/UIControllerChildImplementation.md";
  slug: "api/controllers/type-aliases/uicontrollerchildimplementation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerChildPrivate.md": {
	id: "api/controllers/type-aliases/UIControllerChildPrivate.md";
  slug: "api/controllers/type-aliases/uicontrollerchildprivate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerCommand.md": {
	id: "api/controllers/type-aliases/UIControllerCommand.md";
  slug: "api/controllers/type-aliases/uicontrollercommand";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerCommandMeta.md": {
	id: "api/controllers/type-aliases/UIControllerCommandMeta.md";
  slug: "api/controllers/type-aliases/uicontrollercommandmeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerContainer.md": {
	id: "api/controllers/type-aliases/UIControllerContainer.md";
  slug: "api/controllers/type-aliases/uicontrollercontainer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerMessage.md": {
	id: "api/controllers/type-aliases/UIControllerMessage.md";
  slug: "api/controllers/type-aliases/uicontrollermessage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerMeta.md": {
	id: "api/controllers/type-aliases/UIControllerMeta.md";
  slug: "api/controllers/type-aliases/uicontrollermeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerMetaWithShortcuts.md": {
	id: "api/controllers/type-aliases/UIControllerMetaWithShortcuts.md";
  slug: "api/controllers/type-aliases/uicontrollermetawithshortcuts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerName.md": {
	id: "api/controllers/type-aliases/UIControllerName.md";
  slug: "api/controllers/type-aliases/uicontrollername";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerParent.md": {
	id: "api/controllers/type-aliases/UIControllerParent.md";
  slug: "api/controllers/type-aliases/uicontrollerparent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerParentAPI.md": {
	id: "api/controllers/type-aliases/UIControllerParentAPI.md";
  slug: "api/controllers/type-aliases/uicontrollerparentapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerParentImplementation.md": {
	id: "api/controllers/type-aliases/UIControllerParentImplementation.md";
  slug: "api/controllers/type-aliases/uicontrollerparentimplementation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIControllerParentPrivate.md": {
	id: "api/controllers/type-aliases/UIControllerParentPrivate.md";
  slug: "api/controllers/type-aliases/uicontrollerparentprivate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/controllers/type-aliases/UIShortcut.md": {
	id: "api/controllers/type-aliases/UIShortcut.md";
  slug: "api/controllers/type-aliases/uishortcut";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/functions/capitalize.md": {
	id: "api/functions/functions/capitalize.md";
  slug: "api/functions/functions/capitalize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/functions/createClassListMapper.md": {
	id: "api/functions/functions/createClassListMapper.md";
  slug: "api/functions/functions/createclasslistmapper";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/functions/forcefullyDisableElement.md": {
	id: "api/functions/functions/forcefullyDisableElement.md";
  slug: "api/functions/functions/forcefullydisableelement";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/functions/getColorStyleByHue.md": {
	id: "api/functions/functions/getColorStyleByHue.md";
  slug: "api/functions/functions/getcolorstylebyhue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/functions/getOpacityScale.md": {
	id: "api/functions/functions/getOpacityScale.md";
  slug: "api/functions/functions/getopacityscale";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/functions/mapClassName.md": {
	id: "api/functions/functions/mapClassName.md";
  slug: "api/functions/functions/mapclassname";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/functions/uuid.md": {
	id: "api/functions/functions/uuid.md";
  slug: "api/functions/functions/uuid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/functions/index.md": {
	id: "api/functions/index.md";
  slug: "api/functions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index.md": {
	id: "api/index.md";
  slug: "api";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/ContextsProvider.md": {
	id: "api/providers/functions/ContextsProvider.md";
  slug: "api/providers/functions/contextsprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/FocusProvider.md": {
	id: "api/providers/functions/FocusProvider.md";
  slug: "api/providers/functions/focusprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/SelectionProvider.md": {
	id: "api/providers/functions/SelectionProvider.md";
  slug: "api/providers/functions/selectionprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/ServiceProvider.md": {
	id: "api/providers/functions/ServiceProvider.md";
  slug: "api/providers/functions/serviceprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/SettingsProvider.md": {
	id: "api/providers/functions/SettingsProvider.md";
  slug: "api/providers/functions/settingsprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/ShortcutsProvider.md": {
	id: "api/providers/functions/ShortcutsProvider.md";
  slug: "api/providers/functions/shortcutsprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createCommandMap.md": {
	id: "api/providers/functions/createCommandMap.md";
  slug: "api/providers/functions/createcommandmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createContextsMap.md": {
	id: "api/providers/functions/createContextsMap.md";
  slug: "api/providers/functions/createcontextsmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createContextsService.md": {
	id: "api/providers/functions/createContextsService.md";
  slug: "api/providers/functions/createcontextsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createFocus.md": {
	id: "api/providers/functions/createFocus.md";
  slug: "api/providers/functions/createfocus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createFocusService.md": {
	id: "api/providers/functions/createFocusService.md";
  slug: "api/providers/functions/createfocusservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createFocusTarget.md": {
	id: "api/providers/functions/createFocusTarget.md";
  slug: "api/providers/functions/createfocustarget";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createSelection.md": {
	id: "api/providers/functions/createSelection.md";
  slug: "api/providers/functions/createselection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createSettings.md": {
	id: "api/providers/functions/createSettings.md";
  slug: "api/providers/functions/createsettings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createShortcutsController.md": {
	id: "api/providers/functions/createShortcutsController.md";
  slug: "api/providers/functions/createshortcutscontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createShortcutsService.md": {
	id: "api/providers/functions/createShortcutsService.md";
  slug: "api/providers/functions/createshortcutsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/createShortcutsfromMeta.md": {
	id: "api/providers/functions/createShortcutsfromMeta.md";
  slug: "api/providers/functions/createshortcutsfrommeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/getEventKeyBinding.md": {
	id: "api/providers/functions/getEventKeyBinding.md";
  slug: "api/providers/functions/geteventkeybinding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/inject.md": {
	id: "api/providers/functions/inject.md";
  slug: "api/providers/functions/inject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/isKeyboardShortcut.md": {
	id: "api/providers/functions/isKeyboardShortcut.md";
  slug: "api/providers/functions/iskeyboardshortcut";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/isParamsSettingSchema.md": {
	id: "api/providers/functions/isParamsSettingSchema.md";
  slug: "api/providers/functions/isparamssettingschema";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/mock.md": {
	id: "api/providers/functions/mock.md";
  slug: "api/providers/functions/mock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/useContexts.md": {
	id: "api/providers/functions/useContexts.md";
  slug: "api/providers/functions/usecontexts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/useFocus.md": {
	id: "api/providers/functions/useFocus.md";
  slug: "api/providers/functions/usefocus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/useSelection.md": {
	id: "api/providers/functions/useSelection.md";
  slug: "api/providers/functions/useselection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/useSettings.md": {
	id: "api/providers/functions/useSettings.md";
  slug: "api/providers/functions/usesettings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/useShortcuts.md": {
	id: "api/providers/functions/useShortcuts.md";
  slug: "api/providers/functions/useshortcuts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/functions/useShortcutsKeyDownListener.md": {
	id: "api/providers/functions/useShortcutsKeyDownListener.md";
  slug: "api/providers/functions/useshortcutskeydownlistener";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/index.md": {
	id: "api/providers/index.md";
  slug: "api/providers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/BaseSetting.md": {
	id: "api/providers/type-aliases/BaseSetting.md";
  slug: "api/providers/type-aliases/basesetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/BooleanSetting.md": {
	id: "api/providers/type-aliases/BooleanSetting.md";
  slug: "api/providers/type-aliases/booleansetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ColorHueSetting.md": {
	id: "api/providers/type-aliases/ColorHueSetting.md";
  slug: "api/providers/type-aliases/colorhuesetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ContextsService.md": {
	id: "api/providers/type-aliases/ContextsService.md";
  slug: "api/providers/type-aliases/contextsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/FocusAPI.md": {
	id: "api/providers/type-aliases/FocusAPI.md";
  slug: "api/providers/type-aliases/focusapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/FocusClientAPI.md": {
	id: "api/providers/type-aliases/FocusClientAPI.md";
  slug: "api/providers/type-aliases/focusclientapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/FocusServiceAPI.md": {
	id: "api/providers/type-aliases/FocusServiceAPI.md";
  slug: "api/providers/type-aliases/focusserviceapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/FocusTarget.md": {
	id: "api/providers/type-aliases/FocusTarget.md";
  slug: "api/providers/type-aliases/focustarget";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/KeyboardShortcut.md": {
	id: "api/providers/type-aliases/KeyboardShortcut.md";
  slug: "api/providers/type-aliases/keyboardshortcut";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/KeyboardShortcutMeta.md": {
	id: "api/providers/type-aliases/KeyboardShortcutMeta.md";
  slug: "api/providers/type-aliases/keyboardshortcutmeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/NumberSetting.md": {
	id: "api/providers/type-aliases/NumberSetting.md";
  slug: "api/providers/type-aliases/numbersetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ObjectFilter.md": {
	id: "api/providers/type-aliases/ObjectFilter.md";
  slug: "api/providers/type-aliases/objectfilter";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/OptionsSetting.md": {
	id: "api/providers/type-aliases/OptionsSetting.md";
  slug: "api/providers/type-aliases/optionssetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ParamsSetting.md": {
	id: "api/providers/type-aliases/ParamsSetting.md";
  slug: "api/providers/type-aliases/paramssetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/RangeSetting.md": {
	id: "api/providers/type-aliases/RangeSetting.md";
  slug: "api/providers/type-aliases/rangesetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/SelectionAPI.md": {
	id: "api/providers/type-aliases/SelectionAPI.md";
  slug: "api/providers/type-aliases/selectionapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/Setting.md": {
	id: "api/providers/type-aliases/Setting.md";
  slug: "api/providers/type-aliases/setting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/SettingGroup.md": {
	id: "api/providers/type-aliases/SettingGroup.md";
  slug: "api/providers/type-aliases/settinggroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/SettingSubGroup.md": {
	id: "api/providers/type-aliases/SettingSubGroup.md";
  slug: "api/providers/type-aliases/settingsubgroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/SettingType.md": {
	id: "api/providers/type-aliases/SettingType.md";
  slug: "api/providers/type-aliases/settingtype";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/SettingValue.md": {
	id: "api/providers/type-aliases/SettingValue.md";
  slug: "api/providers/type-aliases/settingvalue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/SettingsAPI.md": {
	id: "api/providers/type-aliases/SettingsAPI.md";
  slug: "api/providers/type-aliases/settingsapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ShortcutCommandController.md": {
	id: "api/providers/type-aliases/ShortcutCommandController.md";
  slug: "api/providers/type-aliases/shortcutcommandcontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ShortcutControllerMessage.md": {
	id: "api/providers/type-aliases/ShortcutControllerMessage.md";
  slug: "api/providers/type-aliases/shortcutcontrollermessage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ShortcutKeyBinding.md": {
	id: "api/providers/type-aliases/ShortcutKeyBinding.md";
  slug: "api/providers/type-aliases/shortcutkeybinding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ShortcutsControllerAPI.md": {
	id: "api/providers/type-aliases/ShortcutsControllerAPI.md";
  slug: "api/providers/type-aliases/shortcutscontrollerapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/ShortcutsService.md": {
	id: "api/providers/type-aliases/ShortcutsService.md";
  slug: "api/providers/type-aliases/shortcutsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/providers/type-aliases/StringSetting.md": {
	id: "api/providers/type-aliases/StringSetting.md";
  slug: "api/providers/type-aliases/stringsetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/index.md": {
	id: "features/index.md";
  slug: "features";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"getting-started/index.md": {
	id: "getting-started/index.md";
  slug: "getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
