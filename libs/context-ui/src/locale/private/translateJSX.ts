/**
 * Copyright (c) 2021-2023 Martynas Barzda
 * Based on [solid-i18next](https://github.com/noodlestan/solid-i18next)
 * Licensed under the MIT License.
 */
import type { IDom, parse } from 'html-parse-string';
import type { TFunction, i18n } from 'i18next';
import type { ParentProps } from 'solid-js';

import type { TranslateProps } from '../components';

import { replaceElements } from './replaceElements';
import { translateWithInterpolation } from './translateWithInterpolation';

export let parseHTML: typeof parse;

(async () => {
    try {
        const module = await import('html-parse-string');
        parseHTML = module.parse;
    } catch {}
})();

export const translateJSX = (
    {
        i18n: { options },
        t,
        props,
    }: { t: TFunction; props: ParentProps<TranslateProps>; i18n: i18n },
    children: Node[],
): string | unknown[] | undefined => {
    const translation = t(props.key, props.options);

    if (!props.children) {
        return translation;
    }

    if (translation === props.key)
        return children.map(translateWithInterpolation(t, options, props));

    try {
        const [ast] = parseHTML(`<0>${translation}</0>`);
        return children.map(replaceElements(ast as IDom, options));
    } catch {
        console.error('In order to use JSX nesting, install html-parse-string');
    }
};
