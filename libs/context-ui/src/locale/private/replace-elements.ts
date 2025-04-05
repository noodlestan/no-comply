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

import type { IDom } from 'html-parse-string';
import type { InitOptions } from 'i18next';

import { hasInterpolation } from './has-interpolation';

export const replaceElements = (ast: IDom, { interpolation }: InitOptions) => {
    return (child: Node, index: number): Node | string | undefined | null => {
        if (typeof child === 'string') {
            if (hasInterpolation(child, interpolation ?? {}))
                return ast.children[index]?.children?.[0]?.content;

            return ast.children[index]?.content;
        }

        child.textContent = ast.children[index]?.children?.[0]?.content ?? null;

        return child;
    };
};
