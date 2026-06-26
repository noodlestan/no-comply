const RE_DATA_XP_ATTRIBUTES = /\sdata-xp(?:-id)?="[^"]*"/g;
const RE_CSS_MODULE_CLASS_NAMES = /_([A-Za-z][A-Za-z0-9-]*)_[A-Za-z0-9]+_\d+/g;

export function cleanupRenderedHtml(code: string): string {
	return code.replace(RE_DATA_XP_ATTRIBUTES, '').replace(RE_CSS_MODULE_CLASS_NAMES, '$1');
}
