import { type ParentComponent, children as childrenMemo } from 'solid-js';

import { translateJSX } from '../../private';
import { useTranslate } from '../../providers';

import type { TranslateProps } from './types';

export const Translate: ParentComponent<TranslateProps> = props => {
	const { t, i18next } = useTranslate();
	const children = childrenMemo(() => props.children);

	return (
		<>
			{(() => {
				const resolved = children();
				return typeof resolved === 'string'
					? t(props.key, resolved, props.options)
					: translateJSX({ i18n: i18next, t, props }, resolved as Node[]);
			})()}
		</>
	);
};
