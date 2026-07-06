import { createSurfaceVariant } from '@no-comply/solid-contexts';

export const STANDARD_UI_SURFACE_STAGE = createSurfaceVariant({
	name: 'stage',
});

export const STANDARD_UI_SURFACE_PAGE = createSurfaceVariant({
	name: 'page',
});

export const STANDARD_UI_SURFACE_CARD = createSurfaceVariant({
	name: 'card',
});
export const STANDARD_UI_SURFACE_CARD_ROUNDED = createSurfaceVariant({
	name: 'card-rounded',
	extend: ['card'],
});

export const STANDARD_UI_SURFACE_PANEL = createSurfaceVariant({
	name: 'panel',
});

export const STANDARD_UI_SURFACE_INVERSE = createSurfaceVariant({
	name: 'inverse',
});

export const STANDARD_UI_SURFACE_MESSAGE = createSurfaceVariant({
	name: 'message',
});

export const STANDARD_UI_SURFACE_TOAST = createSurfaceVariant({
	name: 'toast',
	extend: ['message'],
});

export const STANDARD_UI_SURFACE_DIALOG = createSurfaceVariant({
	name: 'dialog',
	extend: ['panel'],
});

export const STANDARD_UI_SURFACE_MENU = createSurfaceVariant({
	name: 'menu',
	extend: ['panel'],
});

export const STANDARD_UI_SURFACES = [
	STANDARD_UI_SURFACE_STAGE,
	STANDARD_UI_SURFACE_PAGE,
	STANDARD_UI_SURFACE_CARD,
	STANDARD_UI_SURFACE_CARD_ROUNDED,
	STANDARD_UI_SURFACE_PANEL,
	STANDARD_UI_SURFACE_INVERSE,
	STANDARD_UI_SURFACE_MESSAGE,
	STANDARD_UI_SURFACE_TOAST,
	STANDARD_UI_SURFACE_DIALOG,
	STANDARD_UI_SURFACE_MENU,
];
