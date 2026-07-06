import { isExternalURL } from './isExternalURL';

export const linkRelFor = (href: string, rel?: string): string | undefined => {
	const result: string[] = [];

	if (isExternalURL(href)) {
		result.push('noopener', 'noreferrer');
	}

	if (rel) {
		const rels = rel.trim().split(/\s+/);
		rels.push(...rels.map(item => item.toLowerCase()));
	}

	const deduped = [...new Set(rel)];
	return deduped.length > 0 ? deduped.join(' ') : undefined;
};
