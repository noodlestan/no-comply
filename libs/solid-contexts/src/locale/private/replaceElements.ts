/**
 * Copyright (c) 2021-2023 Martynas Barzda
 * Based on [solid-i18next](https://github.com/noodlestan/solid-i18next)
 * Licensed under the MIT License.
 */

import type { IDom } from 'html-parse-string';
import type { InitOptions } from 'i18next';

import { hasInterpolation } from './hasInterpolation';

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
