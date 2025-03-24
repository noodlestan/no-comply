/**
MIT License

Copyright (c) 2021-2023 Martynas Barzda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import type { IDom, parse } from 'html-parse-string';
import type { TFunction, i18n } from 'i18next';
import type { ParentProps } from 'solid-js';

import type { TranslateProps } from '../components';

import { replaceElements } from './replace-elements';
import { translateWithInterpolation } from './translate-with-interpolation';

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
