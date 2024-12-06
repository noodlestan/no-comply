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
"api/atoms/index.md": {
	id: "api/atoms/index.md";
  slug: "api/atoms";
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
"api/dialogs/index.md": {
	id: "api/dialogs/index.md";
  slug: "api/dialogs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/error-boundary/index.md": {
	id: "api/error-boundary/index.md";
  slug: "api/error-boundary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/forms/index.md": {
	id: "api/forms/index.md";
  slug: "api/forms";
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
"api/icons/index.md": {
	id: "api/icons/index.md";
  slug: "api/icons";
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
"api/index/classes/ThemesError.md": {
	id: "api/index/classes/ThemesError.md";
  slug: "api/index/classes/themeserror";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Banner.md": {
	id: "api/index/functions/Banner.md";
  slug: "api/index/functions/banner";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/BannerMessage.md": {
	id: "api/index/functions/BannerMessage.md";
  slug: "api/index/functions/bannermessage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Button.md": {
	id: "api/index/functions/Button.md";
  slug: "api/index/functions/button";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Canvas.md": {
	id: "api/index/functions/Canvas.md";
  slug: "api/index/functions/canvas";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Checkbox.md": {
	id: "api/index/functions/Checkbox.md";
  slug: "api/index/functions/checkbox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ColorSchemeProvider.md": {
	id: "api/index/functions/ColorSchemeProvider.md";
  slug: "api/index/functions/colorschemeprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ContextsProvider.md": {
	id: "api/index/functions/ContextsProvider.md";
  slug: "api/index/functions/contextsprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/DataItem.md": {
	id: "api/index/functions/DataItem.md";
  slug: "api/index/functions/dataitem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/DataValue.md": {
	id: "api/index/functions/DataValue.md";
  slug: "api/index/functions/datavalue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Display.md": {
	id: "api/index/functions/Display.md";
  slug: "api/index/functions/display";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Divider.md": {
	id: "api/index/functions/Divider.md";
  slug: "api/index/functions/divider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ErrorBoundary.md": {
	id: "api/index/functions/ErrorBoundary.md";
  slug: "api/index/functions/errorboundary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ExpandButton.md": {
	id: "api/index/functions/ExpandButton.md";
  slug: "api/index/functions/expandbutton";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/FadeIn.md": {
	id: "api/index/functions/FadeIn.md";
  slug: "api/index/functions/fadein";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Fieldset.md": {
	id: "api/index/functions/Fieldset.md";
  slug: "api/index/functions/fieldset";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/FieldsetLabel.md": {
	id: "api/index/functions/FieldsetLabel.md";
  slug: "api/index/functions/fieldsetlabel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Flex.md": {
	id: "api/index/functions/Flex.md";
  slug: "api/index/functions/flex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/FocusProvider.md": {
	id: "api/index/functions/FocusProvider.md";
  slug: "api/index/functions/focusprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/FocusTrap.md": {
	id: "api/index/functions/FocusTrap.md";
  slug: "api/index/functions/focustrap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Focusable.md": {
	id: "api/index/functions/Focusable.md";
  slug: "api/index/functions/focusable";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/FocusableHover.md": {
	id: "api/index/functions/FocusableHover.md";
  slug: "api/index/functions/focusablehover";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Icon.md": {
	id: "api/index/functions/Icon.md";
  slug: "api/index/functions/icon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/IconButton.md": {
	id: "api/index/functions/IconButton.md";
  slug: "api/index/functions/iconbutton";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/IconsProvider.md": {
	id: "api/index/functions/IconsProvider.md";
  slug: "api/index/functions/iconsprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Label.md": {
	id: "api/index/functions/Label.md";
  slug: "api/index/functions/label";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Link.md": {
	id: "api/index/functions/Link.md";
  slug: "api/index/functions/link";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/List.md": {
	id: "api/index/functions/List.md";
  slug: "api/index/functions/list";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Modal.md": {
	id: "api/index/functions/Modal.md";
  slug: "api/index/functions/modal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ModalDialog.md": {
	id: "api/index/functions/ModalDialog.md";
  slug: "api/index/functions/modaldialog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ModalOverlay.md": {
	id: "api/index/functions/ModalOverlay.md";
  slug: "api/index/functions/modaloverlay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ModalsService.md": {
	id: "api/index/functions/ModalsService.md";
  slug: "api/index/functions/modalsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/NavLink.md": {
	id: "api/index/functions/NavLink.md";
  slug: "api/index/functions/navlink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/NumberInput.md": {
	id: "api/index/functions/NumberInput.md";
  slug: "api/index/functions/numberinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Overlay.md": {
	id: "api/index/functions/Overlay.md";
  slug: "api/index/functions/overlay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/RangeInput.md": {
	id: "api/index/functions/RangeInput.md";
  slug: "api/index/functions/rangeinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/RootProvider.md": {
	id: "api/index/functions/RootProvider.md";
  slug: "api/index/functions/rootprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Screen.md": {
	id: "api/index/functions/Screen.md";
  slug: "api/index/functions/screen";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Scrollable.md": {
	id: "api/index/functions/Scrollable.md";
  slug: "api/index/functions/scrollable";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Select.md": {
	id: "api/index/functions/Select.md";
  slug: "api/index/functions/select";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/SelectionProvider.md": {
	id: "api/index/functions/SelectionProvider.md";
  slug: "api/index/functions/selectionprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ServiceProvider.md": {
	id: "api/index/functions/ServiceProvider.md";
  slug: "api/index/functions/serviceprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/SettingsProvider.md": {
	id: "api/index/functions/SettingsProvider.md";
  slug: "api/index/functions/settingsprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ShortcutsProvider.md": {
	id: "api/index/functions/ShortcutsProvider.md";
  slug: "api/index/functions/shortcutsprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Squeeze.md": {
	id: "api/index/functions/Squeeze.md";
  slug: "api/index/functions/squeeze";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Surface.md": {
	id: "api/index/functions/Surface.md";
  slug: "api/index/functions/surface";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/SurfaceProvider.md": {
	id: "api/index/functions/SurfaceProvider.md";
  slug: "api/index/functions/surfaceprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/Text.md": {
	id: "api/index/functions/Text.md";
  slug: "api/index/functions/text";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/TextInput.md": {
	id: "api/index/functions/TextInput.md";
  slug: "api/index/functions/textinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ThemeGreen.md": {
	id: "api/index/functions/ThemeGreen.md";
  slug: "api/index/functions/themegreen";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/ThemeProvider.md": {
	id: "api/index/functions/ThemeProvider.md";
  slug: "api/index/functions/themeprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/TokensProvider.md": {
	id: "api/index/functions/TokensProvider.md";
  slug: "api/index/functions/tokensprovider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/TransitionGroupsService.md": {
	id: "api/index/functions/TransitionGroupsService.md";
  slug: "api/index/functions/transitiongroupsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/TreeList.md": {
	id: "api/index/functions/TreeList.md";
  slug: "api/index/functions/treelist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/capitalize.md": {
	id: "api/index/functions/capitalize.md";
  slug: "api/index/functions/capitalize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/classListFromClassNames.md": {
	id: "api/index/functions/classListFromClassNames.md";
  slug: "api/index/functions/classlistfromclassnames";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/contextClassList.md": {
	id: "api/index/functions/contextClassList.md";
  slug: "api/index/functions/contextclasslist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/contextClassNames.md": {
	id: "api/index/functions/contextClassNames.md";
  slug: "api/index/functions/contextclassnames";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/contextTokens.md": {
	id: "api/index/functions/contextTokens.md";
  slug: "api/index/functions/contexttokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/contextVars.md": {
	id: "api/index/functions/contextVars.md";
  slug: "api/index/functions/contextvars";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createClassListMapper.md": {
	id: "api/index/functions/createClassListMapper.md";
  slug: "api/index/functions/createclasslistmapper";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createCommandMap.md": {
	id: "api/index/functions/createCommandMap.md";
  slug: "api/index/functions/createcommandmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createContextsMap.md": {
	id: "api/index/functions/createContextsMap.md";
  slug: "api/index/functions/createcontextsmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createContextsService.md": {
	id: "api/index/functions/createContextsService.md";
  slug: "api/index/functions/createcontextsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createControlledTransition.md": {
	id: "api/index/functions/createControlledTransition.md";
  slug: "api/index/functions/createcontrolledtransition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createFadeEnterTransition.md": {
	id: "api/index/functions/createFadeEnterTransition.md";
  slug: "api/index/functions/createfadeentertransition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createFadeLeaveTransition.md": {
	id: "api/index/functions/createFadeLeaveTransition.md";
  slug: "api/index/functions/createfadeleavetransition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createFocus.md": {
	id: "api/index/functions/createFocus.md";
  slug: "api/index/functions/createfocus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createFocusService.md": {
	id: "api/index/functions/createFocusService.md";
  slug: "api/index/functions/createfocusservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createFocusTarget.md": {
	id: "api/index/functions/createFocusTarget.md";
  slug: "api/index/functions/createfocustarget";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createIcons.md": {
	id: "api/index/functions/createIcons.md";
  slug: "api/index/functions/createicons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createListState.md": {
	id: "api/index/functions/createListState.md";
  slug: "api/index/functions/createliststate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createSelection.md": {
	id: "api/index/functions/createSelection.md";
  slug: "api/index/functions/createselection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createSettings.md": {
	id: "api/index/functions/createSettings.md";
  slug: "api/index/functions/createsettings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createShortcutsController.md": {
	id: "api/index/functions/createShortcutsController.md";
  slug: "api/index/functions/createshortcutscontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createShortcutsService.md": {
	id: "api/index/functions/createShortcutsService.md";
  slug: "api/index/functions/createshortcutsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createShortcutsfromMeta.md": {
	id: "api/index/functions/createShortcutsfromMeta.md";
  slug: "api/index/functions/createshortcutsfrommeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createStyleTransition.md": {
	id: "api/index/functions/createStyleTransition.md";
  slug: "api/index/functions/createstyletransition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createTimedTransition.md": {
	id: "api/index/functions/createTimedTransition.md";
  slug: "api/index/functions/createtimedtransition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createTreeFolder.md": {
	id: "api/index/functions/createTreeFolder.md";
  slug: "api/index/functions/createtreefolder";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createTreeNode.md": {
	id: "api/index/functions/createTreeNode.md";
  slug: "api/index/functions/createtreenode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createTreeState.md": {
	id: "api/index/functions/createTreeState.md";
  slug: "api/index/functions/createtreestate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createUIController.md": {
	id: "api/index/functions/createUIController.md";
  slug: "api/index/functions/createuicontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createUIControllerChildAPI.md": {
	id: "api/index/functions/createUIControllerChildAPI.md";
  slug: "api/index/functions/createuicontrollerchildapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createUIControllerContainer.md": {
	id: "api/index/functions/createUIControllerContainer.md";
  slug: "api/index/functions/createuicontrollercontainer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createUIControllerParentAPI.md": {
	id: "api/index/functions/createUIControllerParentAPI.md";
  slug: "api/index/functions/createuicontrollerparentapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createUIControllerRoot.md": {
	id: "api/index/functions/createUIControllerRoot.md";
  slug: "api/index/functions/createuicontrollerroot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createVerticalGrowEnterTransition.md": {
	id: "api/index/functions/createVerticalGrowEnterTransition.md";
  slug: "api/index/functions/createverticalgrowentertransition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/createVerticalGrowLeaveTransition.md": {
	id: "api/index/functions/createVerticalGrowLeaveTransition.md";
  slug: "api/index/functions/createverticalgrowleavetransition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/forcefullyDisableElement.md": {
	id: "api/index/functions/forcefullyDisableElement.md";
  slug: "api/index/functions/forcefullydisableelement";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/getColorStyleByHue.md": {
	id: "api/index/functions/getColorStyleByHue.md";
  slug: "api/index/functions/getcolorstylebyhue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/getEventKeyBinding.md": {
	id: "api/index/functions/getEventKeyBinding.md";
  slug: "api/index/functions/geteventkeybinding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/getListSelectionUntil.md": {
	id: "api/index/functions/getListSelectionUntil.md";
  slug: "api/index/functions/getlistselectionuntil";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/getOpacityScale.md": {
	id: "api/index/functions/getOpacityScale.md";
  slug: "api/index/functions/getopacityscale";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/getTreeNodesToExpand.md": {
	id: "api/index/functions/getTreeNodesToExpand.md";
  slug: "api/index/functions/gettreenodestoexpand";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/getTreeSelectionUntil.md": {
	id: "api/index/functions/getTreeSelectionUntil.md";
  slug: "api/index/functions/gettreeselectionuntil";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/inject.md": {
	id: "api/index/functions/inject.md";
  slug: "api/index/functions/inject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/isFolderItem.md": {
	id: "api/index/functions/isFolderItem.md";
  slug: "api/index/functions/isfolderitem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/isKeyboardShortcut.md": {
	id: "api/index/functions/isKeyboardShortcut.md";
  slug: "api/index/functions/iskeyboardshortcut";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/mapClassName.md": {
	id: "api/index/functions/mapClassName.md";
  slug: "api/index/functions/mapclassname";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/mock.md": {
	id: "api/index/functions/mock.md";
  slug: "api/index/functions/mock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/resolveListItemComponent.md": {
	id: "api/index/functions/resolveListItemComponent.md";
  slug: "api/index/functions/resolvelistitemcomponent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useColorSchemeContext.md": {
	id: "api/index/functions/useColorSchemeContext.md";
  slug: "api/index/functions/usecolorschemecontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useContexts.md": {
	id: "api/index/functions/useContexts.md";
  slug: "api/index/functions/usecontexts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useFocus.md": {
	id: "api/index/functions/useFocus.md";
  slug: "api/index/functions/usefocus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useIcons.md": {
	id: "api/index/functions/useIcons.md";
  slug: "api/index/functions/useicons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useModalShowEffect.md": {
	id: "api/index/functions/useModalShowEffect.md";
  slug: "api/index/functions/usemodalshoweffect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useSelection.md": {
	id: "api/index/functions/useSelection.md";
  slug: "api/index/functions/useselection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useSettings.md": {
	id: "api/index/functions/useSettings.md";
  slug: "api/index/functions/usesettings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useShortcuts.md": {
	id: "api/index/functions/useShortcuts.md";
  slug: "api/index/functions/useshortcuts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useShortcutsKeyDownListener.md": {
	id: "api/index/functions/useShortcutsKeyDownListener.md";
  slug: "api/index/functions/useshortcutskeydownlistener";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useSurfacesContext.md": {
	id: "api/index/functions/useSurfacesContext.md";
  slug: "api/index/functions/usesurfacescontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useThemeContext.md": {
	id: "api/index/functions/useThemeContext.md";
  slug: "api/index/functions/usethemecontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useTokensContext.md": {
	id: "api/index/functions/useTokensContext.md";
  slug: "api/index/functions/usetokenscontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/useTransitionClassList.md": {
	id: "api/index/functions/useTransitionClassList.md";
  slug: "api/index/functions/usetransitionclasslist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/functions/uuid.md": {
	id: "api/index/functions/uuid.md";
  slug: "api/index/functions/uuid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/index.md": {
	id: "api/index/index.md";
  slug: "api/index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/BannerLength.md": {
	id: "api/index/type-aliases/BannerLength.md";
  slug: "api/index/type-aliases/bannerlength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/BannerMessageProps.md": {
	id: "api/index/type-aliases/BannerMessageProps.md";
  slug: "api/index/type-aliases/bannermessageprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/BannerProps.md": {
	id: "api/index/type-aliases/BannerProps.md";
  slug: "api/index/type-aliases/bannerprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/BannerSize.md": {
	id: "api/index/type-aliases/BannerSize.md";
  slug: "api/index/type-aliases/bannersize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/BannerVariant.md": {
	id: "api/index/type-aliases/BannerVariant.md";
  slug: "api/index/type-aliases/bannervariant";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/BaseSetting.md": {
	id: "api/index/type-aliases/BaseSetting.md";
  slug: "api/index/type-aliases/basesetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/BooleanSetting.md": {
	id: "api/index/type-aliases/BooleanSetting.md";
  slug: "api/index/type-aliases/booleansetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ButtonElement.md": {
	id: "api/index/type-aliases/ButtonElement.md";
  slug: "api/index/type-aliases/buttonelement";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ButtonLength.md": {
	id: "api/index/type-aliases/ButtonLength.md";
  slug: "api/index/type-aliases/buttonlength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ButtonProps.md": {
	id: "api/index/type-aliases/ButtonProps.md";
  slug: "api/index/type-aliases/buttonprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ButtonSize.md": {
	id: "api/index/type-aliases/ButtonSize.md";
  slug: "api/index/type-aliases/buttonsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ButtonTag.md": {
	id: "api/index/type-aliases/ButtonTag.md";
  slug: "api/index/type-aliases/buttontag";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ButtonVariant.md": {
	id: "api/index/type-aliases/ButtonVariant.md";
  slug: "api/index/type-aliases/buttonvariant";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/CanvasProps.md": {
	id: "api/index/type-aliases/CanvasProps.md";
  slug: "api/index/type-aliases/canvasprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/CheckboxProps.md": {
	id: "api/index/type-aliases/CheckboxProps.md";
  slug: "api/index/type-aliases/checkboxprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ColorHueSetting.md": {
	id: "api/index/type-aliases/ColorHueSetting.md";
  slug: "api/index/type-aliases/colorhuesetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ColorSchemeName.md": {
	id: "api/index/type-aliases/ColorSchemeName.md";
  slug: "api/index/type-aliases/colorschemename";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ContextsService.md": {
	id: "api/index/type-aliases/ContextsService.md";
  slug: "api/index/type-aliases/contextsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DataItemProps.md": {
	id: "api/index/type-aliases/DataItemProps.md";
  slug: "api/index/type-aliases/dataitemprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DataItemSize.md": {
	id: "api/index/type-aliases/DataItemSize.md";
  slug: "api/index/type-aliases/dataitemsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DataValueLength.md": {
	id: "api/index/type-aliases/DataValueLength.md";
  slug: "api/index/type-aliases/datavaluelength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DataValueProps.md": {
	id: "api/index/type-aliases/DataValueProps.md";
  slug: "api/index/type-aliases/datavalueprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DataValueSize.md": {
	id: "api/index/type-aliases/DataValueSize.md";
  slug: "api/index/type-aliases/datavaluesize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DisplayLevel.md": {
	id: "api/index/type-aliases/DisplayLevel.md";
  slug: "api/index/type-aliases/displaylevel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DisplayProps.md": {
	id: "api/index/type-aliases/DisplayProps.md";
  slug: "api/index/type-aliases/displayprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DisplaySize.md": {
	id: "api/index/type-aliases/DisplaySize.md";
  slug: "api/index/type-aliases/displaysize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DividerLength.md": {
	id: "api/index/type-aliases/DividerLength.md";
  slug: "api/index/type-aliases/dividerlength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DividerProps.md": {
	id: "api/index/type-aliases/DividerProps.md";
  slug: "api/index/type-aliases/dividerprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/DividerVariant.md": {
	id: "api/index/type-aliases/DividerVariant.md";
  slug: "api/index/type-aliases/dividervariant";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ErrorBoundaryProps.md": {
	id: "api/index/type-aliases/ErrorBoundaryProps.md";
  slug: "api/index/type-aliases/errorboundaryprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ExpandButtonProps.md": {
	id: "api/index/type-aliases/ExpandButtonProps.md";
  slug: "api/index/type-aliases/expandbuttonprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FadeInProps.md": {
	id: "api/index/type-aliases/FadeInProps.md";
  slug: "api/index/type-aliases/fadeinprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FieldsetLabelProps.md": {
	id: "api/index/type-aliases/FieldsetLabelProps.md";
  slug: "api/index/type-aliases/fieldsetlabelprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FieldsetLabelSize.md": {
	id: "api/index/type-aliases/FieldsetLabelSize.md";
  slug: "api/index/type-aliases/fieldsetlabelsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FieldsetProps.md": {
	id: "api/index/type-aliases/FieldsetProps.md";
  slug: "api/index/type-aliases/fieldsetprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FlexAlign.md": {
	id: "api/index/type-aliases/FlexAlign.md";
  slug: "api/index/type-aliases/flexalign";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FlexDirection.md": {
	id: "api/index/type-aliases/FlexDirection.md";
  slug: "api/index/type-aliases/flexdirection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FlexGap.md": {
	id: "api/index/type-aliases/FlexGap.md";
  slug: "api/index/type-aliases/flexgap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FlexJustify.md": {
	id: "api/index/type-aliases/FlexJustify.md";
  slug: "api/index/type-aliases/flexjustify";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FlexOverflow.md": {
	id: "api/index/type-aliases/FlexOverflow.md";
  slug: "api/index/type-aliases/flexoverflow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FlexPadding.md": {
	id: "api/index/type-aliases/FlexPadding.md";
  slug: "api/index/type-aliases/flexpadding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FlexProps.md": {
	id: "api/index/type-aliases/FlexProps.md";
  slug: "api/index/type-aliases/flexprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusAPI.md": {
	id: "api/index/type-aliases/FocusAPI.md";
  slug: "api/index/type-aliases/focusapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusClientAPI.md": {
	id: "api/index/type-aliases/FocusClientAPI.md";
  slug: "api/index/type-aliases/focusclientapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusServiceAPI.md": {
	id: "api/index/type-aliases/FocusServiceAPI.md";
  slug: "api/index/type-aliases/focusserviceapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusTarget.md": {
	id: "api/index/type-aliases/FocusTarget.md";
  slug: "api/index/type-aliases/focustarget";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusTrapProps.md": {
	id: "api/index/type-aliases/FocusTrapProps.md";
  slug: "api/index/type-aliases/focustrapprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusableHoverProps.md": {
	id: "api/index/type-aliases/FocusableHoverProps.md";
  slug: "api/index/type-aliases/focusablehoverprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusableProps.md": {
	id: "api/index/type-aliases/FocusableProps.md";
  slug: "api/index/type-aliases/focusableprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/FocusableTag.md": {
	id: "api/index/type-aliases/FocusableTag.md";
  slug: "api/index/type-aliases/focusabletag";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/IconButtonProps.md": {
	id: "api/index/type-aliases/IconButtonProps.md";
  slug: "api/index/type-aliases/iconbuttonprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/IconComponent.md": {
	id: "api/index/type-aliases/IconComponent.md";
  slug: "api/index/type-aliases/iconcomponent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/IconMap.md": {
	id: "api/index/type-aliases/IconMap.md";
  slug: "api/index/type-aliases/iconmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/IconProps.md": {
	id: "api/index/type-aliases/IconProps.md";
  slug: "api/index/type-aliases/iconprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/IconSize.md": {
	id: "api/index/type-aliases/IconSize.md";
  slug: "api/index/type-aliases/iconsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/IconsAPI.md": {
	id: "api/index/type-aliases/IconsAPI.md";
  slug: "api/index/type-aliases/iconsapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/KeyboardShortcut.md": {
	id: "api/index/type-aliases/KeyboardShortcut.md";
  slug: "api/index/type-aliases/keyboardshortcut";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/KeyboardShortcutMeta.md": {
	id: "api/index/type-aliases/KeyboardShortcutMeta.md";
  slug: "api/index/type-aliases/keyboardshortcutmeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/LabelProps.md": {
	id: "api/index/type-aliases/LabelProps.md";
  slug: "api/index/type-aliases/labelprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/LabelSize.md": {
	id: "api/index/type-aliases/LabelSize.md";
  slug: "api/index/type-aliases/labelsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/LinkProps.md": {
	id: "api/index/type-aliases/LinkProps.md";
  slug: "api/index/type-aliases/linkprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ListItemComponent.md": {
	id: "api/index/type-aliases/ListItemComponent.md";
  slug: "api/index/type-aliases/listitemcomponent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ListItemComponentFn.md": {
	id: "api/index/type-aliases/ListItemComponentFn.md";
  slug: "api/index/type-aliases/listitemcomponentfn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ListItemComponentProps.md": {
	id: "api/index/type-aliases/ListItemComponentProps.md";
  slug: "api/index/type-aliases/listitemcomponentprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ListItemComponentSolid.md": {
	id: "api/index/type-aliases/ListItemComponentSolid.md";
  slug: "api/index/type-aliases/listitemcomponentsolid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ListKeyboardControllerAPI.md": {
	id: "api/index/type-aliases/ListKeyboardControllerAPI.md";
  slug: "api/index/type-aliases/listkeyboardcontrollerapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ListState.md": {
	id: "api/index/type-aliases/ListState.md";
  slug: "api/index/type-aliases/liststate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ModalDialogProps.md": {
	id: "api/index/type-aliases/ModalDialogProps.md";
  slug: "api/index/type-aliases/modaldialogprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ModalProps.md": {
	id: "api/index/type-aliases/ModalProps.md";
  slug: "api/index/type-aliases/modalprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/NavLinkProps.md": {
	id: "api/index/type-aliases/NavLinkProps.md";
  slug: "api/index/type-aliases/navlinkprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/NavLinkSize.md": {
	id: "api/index/type-aliases/NavLinkSize.md";
  slug: "api/index/type-aliases/navlinksize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/NumberInputLength.md": {
	id: "api/index/type-aliases/NumberInputLength.md";
  slug: "api/index/type-aliases/numberinputlength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/NumberInputProps.md": {
	id: "api/index/type-aliases/NumberInputProps.md";
  slug: "api/index/type-aliases/numberinputprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/NumberInputSize.md": {
	id: "api/index/type-aliases/NumberInputSize.md";
  slug: "api/index/type-aliases/numberinputsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/NumberSetting.md": {
	id: "api/index/type-aliases/NumberSetting.md";
  slug: "api/index/type-aliases/numbersetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ObjectFilter.md": {
	id: "api/index/type-aliases/ObjectFilter.md";
  slug: "api/index/type-aliases/objectfilter";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/OptionsSetting.md": {
	id: "api/index/type-aliases/OptionsSetting.md";
  slug: "api/index/type-aliases/optionssetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/RangeInputLength.md": {
	id: "api/index/type-aliases/RangeInputLength.md";
  slug: "api/index/type-aliases/rangeinputlength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/RangeInputProps.md": {
	id: "api/index/type-aliases/RangeInputProps.md";
  slug: "api/index/type-aliases/rangeinputprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/RangeInputSize.md": {
	id: "api/index/type-aliases/RangeInputSize.md";
  slug: "api/index/type-aliases/rangeinputsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/RangeSetting.md": {
	id: "api/index/type-aliases/RangeSetting.md";
  slug: "api/index/type-aliases/rangesetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/RootProviderProps.md": {
	id: "api/index/type-aliases/RootProviderProps.md";
  slug: "api/index/type-aliases/rootproviderprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ScreenProps.md": {
	id: "api/index/type-aliases/ScreenProps.md";
  slug: "api/index/type-aliases/screenprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ScrollableProps.md": {
	id: "api/index/type-aliases/ScrollableProps.md";
  slug: "api/index/type-aliases/scrollableprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SelectLength.md": {
	id: "api/index/type-aliases/SelectLength.md";
  slug: "api/index/type-aliases/selectlength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SelectProps.md": {
	id: "api/index/type-aliases/SelectProps.md";
  slug: "api/index/type-aliases/selectprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SelectSize.md": {
	id: "api/index/type-aliases/SelectSize.md";
  slug: "api/index/type-aliases/selectsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SelectionAPI.md": {
	id: "api/index/type-aliases/SelectionAPI.md";
  slug: "api/index/type-aliases/selectionapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/Setting.md": {
	id: "api/index/type-aliases/Setting.md";
  slug: "api/index/type-aliases/setting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SettingGroup.md": {
	id: "api/index/type-aliases/SettingGroup.md";
  slug: "api/index/type-aliases/settinggroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SettingSubGroup.md": {
	id: "api/index/type-aliases/SettingSubGroup.md";
  slug: "api/index/type-aliases/settingsubgroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SettingType.md": {
	id: "api/index/type-aliases/SettingType.md";
  slug: "api/index/type-aliases/settingtype";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SettingValue.md": {
	id: "api/index/type-aliases/SettingValue.md";
  slug: "api/index/type-aliases/settingvalue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SettingsAPI.md": {
	id: "api/index/type-aliases/SettingsAPI.md";
  slug: "api/index/type-aliases/settingsapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ShortcutCommandController.md": {
	id: "api/index/type-aliases/ShortcutCommandController.md";
  slug: "api/index/type-aliases/shortcutcommandcontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ShortcutControllerMessage.md": {
	id: "api/index/type-aliases/ShortcutControllerMessage.md";
  slug: "api/index/type-aliases/shortcutcontrollermessage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ShortcutId.md": {
	id: "api/index/type-aliases/ShortcutId.md";
  slug: "api/index/type-aliases/shortcutid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ShortcutKeyBinding.md": {
	id: "api/index/type-aliases/ShortcutKeyBinding.md";
  slug: "api/index/type-aliases/shortcutkeybinding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ShortcutsControllerAPI.md": {
	id: "api/index/type-aliases/ShortcutsControllerAPI.md";
  slug: "api/index/type-aliases/shortcutscontrollerapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ShortcutsService.md": {
	id: "api/index/type-aliases/ShortcutsService.md";
  slug: "api/index/type-aliases/shortcutsservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SqueezeProps.md": {
	id: "api/index/type-aliases/SqueezeProps.md";
  slug: "api/index/type-aliases/squeezeprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/StringSetting.md": {
	id: "api/index/type-aliases/StringSetting.md";
  slug: "api/index/type-aliases/stringsetting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SurfaceProps.md": {
	id: "api/index/type-aliases/SurfaceProps.md";
  slug: "api/index/type-aliases/surfaceprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SurfaceTokenMap.md": {
	id: "api/index/type-aliases/SurfaceTokenMap.md";
  slug: "api/index/type-aliases/surfacetokenmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SystemSurface.md": {
	id: "api/index/type-aliases/SystemSurface.md";
  slug: "api/index/type-aliases/systemsurface";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/SystemTheme.md": {
	id: "api/index/type-aliases/SystemTheme.md";
  slug: "api/index/type-aliases/systemtheme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TextColor.md": {
	id: "api/index/type-aliases/TextColor.md";
  slug: "api/index/type-aliases/textcolor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TextInputLength.md": {
	id: "api/index/type-aliases/TextInputLength.md";
  slug: "api/index/type-aliases/textinputlength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TextInputProps.md": {
	id: "api/index/type-aliases/TextInputProps.md";
  slug: "api/index/type-aliases/textinputprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TextInputSize.md": {
	id: "api/index/type-aliases/TextInputSize.md";
  slug: "api/index/type-aliases/textinputsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TextProps.md": {
	id: "api/index/type-aliases/TextProps.md";
  slug: "api/index/type-aliases/textprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TextSize.md": {
	id: "api/index/type-aliases/TextSize.md";
  slug: "api/index/type-aliases/textsize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ThemeModeTokens.md": {
	id: "api/index/type-aliases/ThemeModeTokens.md";
  slug: "api/index/type-aliases/thememodetokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/ThemeTokens.md": {
	id: "api/index/type-aliases/ThemeTokens.md";
  slug: "api/index/type-aliases/themetokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TokenMap.md": {
	id: "api/index/type-aliases/TokenMap.md";
  slug: "api/index/type-aliases/tokenmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TransitionAPI.md": {
	id: "api/index/type-aliases/TransitionAPI.md";
  slug: "api/index/type-aliases/transitionapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TransitionOptions.md": {
	id: "api/index/type-aliases/TransitionOptions.md";
  slug: "api/index/type-aliases/transitionoptions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TransitionState.md": {
	id: "api/index/type-aliases/TransitionState.md";
  slug: "api/index/type-aliases/transitionstate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TransitionStatus.md": {
	id: "api/index/type-aliases/TransitionStatus.md";
  slug: "api/index/type-aliases/transitionstatus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/Tree.md": {
	id: "api/index/type-aliases/Tree.md";
  slug: "api/index/type-aliases/tree";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeFolder.md": {
	id: "api/index/type-aliases/TreeFolder.md";
  slug: "api/index/type-aliases/treefolder";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeItem.md": {
	id: "api/index/type-aliases/TreeItem.md";
  slug: "api/index/type-aliases/treeitem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeListKeyboardControllerAPI.md": {
	id: "api/index/type-aliases/TreeListKeyboardControllerAPI.md";
  slug: "api/index/type-aliases/treelistkeyboardcontrollerapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeNode.md": {
	id: "api/index/type-aliases/TreeNode.md";
  slug: "api/index/type-aliases/treenode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeNodeComponentProps.md": {
	id: "api/index/type-aliases/TreeNodeComponentProps.md";
  slug: "api/index/type-aliases/treenodecomponentprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeNodeItemComponent.md": {
	id: "api/index/type-aliases/TreeNodeItemComponent.md";
  slug: "api/index/type-aliases/treenodeitemcomponent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeNodeItemComponentFn.md": {
	id: "api/index/type-aliases/TreeNodeItemComponentFn.md";
  slug: "api/index/type-aliases/treenodeitemcomponentfn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeNodeItemComponentSolid.md": {
	id: "api/index/type-aliases/TreeNodeItemComponentSolid.md";
  slug: "api/index/type-aliases/treenodeitemcomponentsolid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeObject.md": {
	id: "api/index/type-aliases/TreeObject.md";
  slug: "api/index/type-aliases/treeobject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/TreeState.md": {
	id: "api/index/type-aliases/TreeState.md";
  slug: "api/index/type-aliases/treestate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UICommandController.md": {
	id: "api/index/type-aliases/UICommandController.md";
  slug: "api/index/type-aliases/uicommandcontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIContextKey.md": {
	id: "api/index/type-aliases/UIContextKey.md";
  slug: "api/index/type-aliases/uicontextkey";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIContextMap.md": {
	id: "api/index/type-aliases/UIContextMap.md";
  slug: "api/index/type-aliases/uicontextmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIContextValue.md": {
	id: "api/index/type-aliases/UIContextValue.md";
  slug: "api/index/type-aliases/uicontextvalue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIController.md": {
	id: "api/index/type-aliases/UIController.md";
  slug: "api/index/type-aliases/uicontroller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerChildAPI.md": {
	id: "api/index/type-aliases/UIControllerChildAPI.md";
  slug: "api/index/type-aliases/uicontrollerchildapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerChildImplementation.md": {
	id: "api/index/type-aliases/UIControllerChildImplementation.md";
  slug: "api/index/type-aliases/uicontrollerchildimplementation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerChildPrivate.md": {
	id: "api/index/type-aliases/UIControllerChildPrivate.md";
  slug: "api/index/type-aliases/uicontrollerchildprivate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerCommand.md": {
	id: "api/index/type-aliases/UIControllerCommand.md";
  slug: "api/index/type-aliases/uicontrollercommand";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerCommandMeta.md": {
	id: "api/index/type-aliases/UIControllerCommandMeta.md";
  slug: "api/index/type-aliases/uicontrollercommandmeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerContainer.md": {
	id: "api/index/type-aliases/UIControllerContainer.md";
  slug: "api/index/type-aliases/uicontrollercontainer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerMessage.md": {
	id: "api/index/type-aliases/UIControllerMessage.md";
  slug: "api/index/type-aliases/uicontrollermessage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerMeta.md": {
	id: "api/index/type-aliases/UIControllerMeta.md";
  slug: "api/index/type-aliases/uicontrollermeta";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerMetaWithShortcuts.md": {
	id: "api/index/type-aliases/UIControllerMetaWithShortcuts.md";
  slug: "api/index/type-aliases/uicontrollermetawithshortcuts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerName.md": {
	id: "api/index/type-aliases/UIControllerName.md";
  slug: "api/index/type-aliases/uicontrollername";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerParent.md": {
	id: "api/index/type-aliases/UIControllerParent.md";
  slug: "api/index/type-aliases/uicontrollerparent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerParentAPI.md": {
	id: "api/index/type-aliases/UIControllerParentAPI.md";
  slug: "api/index/type-aliases/uicontrollerparentapi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerParentImplementation.md": {
	id: "api/index/type-aliases/UIControllerParentImplementation.md";
  slug: "api/index/type-aliases/uicontrollerparentimplementation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIControllerParentPrivate.md": {
	id: "api/index/type-aliases/UIControllerParentPrivate.md";
  slug: "api/index/type-aliases/uicontrollerparentprivate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/type-aliases/UIShortcut.md": {
	id: "api/index/type-aliases/UIShortcut.md";
  slug: "api/index/type-aliases/uishortcut";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/variables/ColorSchemeContext.md": {
	id: "api/index/variables/ColorSchemeContext.md";
  slug: "api/index/variables/colorschemecontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/variables/SurfaceContext.md": {
	id: "api/index/variables/SurfaceContext.md";
  slug: "api/index/variables/surfacecontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/variables/ThemeContext.md": {
	id: "api/index/variables/ThemeContext.md";
  slug: "api/index/variables/themecontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/variables/TokensContext.md": {
	id: "api/index/variables/TokensContext.md";
  slug: "api/index/variables/tokenscontext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/variables/surfacesStore.md": {
	id: "api/index/variables/surfacesStore.md";
  slug: "api/index/variables/surfacesstore";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index/variables/themesStore.md": {
	id: "api/index/variables/themesStore.md";
  slug: "api/index/variables/themesstore";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/layouts/index.md": {
	id: "api/layouts/index.md";
  slug: "api/layouts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/organisms/index.md": {
	id: "api/organisms/index.md";
  slug: "api/organisms";
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
"api/root/index.md": {
	id: "api/root/index.md";
  slug: "api/root";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/surface/index.md": {
	id: "api/surface/index.md";
  slug: "api/surface";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/theme-green/index.md": {
	id: "api/theme-green/index.md";
  slug: "api/theme-green";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/transitions/index.md": {
	id: "api/transitions/index.md";
  slug: "api/transitions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/types/index.md": {
	id: "api/types/index.md";
  slug: "api/types";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/types/type-aliases/DataAttributes.md": {
	id: "api/types/type-aliases/DataAttributes.md";
  slug: "api/types/type-aliases/dataattributes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/types/type-aliases/ObjectWithId.md": {
	id: "api/types/type-aliases/ObjectWithId.md";
  slug: "api/types/type-aliases/objectwithid";
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
