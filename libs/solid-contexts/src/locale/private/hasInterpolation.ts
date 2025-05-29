/**
 * Copyright (c) 2021-2023 Martynas Barzda
 * Based on [solid-i18next](https://github.com/noodlestan/solid-i18next)
 * Licensed under the MIT License.
 */

import type { InterpolationOptions } from 'i18next';

export const hasInterpolation = (
    value: string,
    { prefix, suffix }: InterpolationOptions,
): boolean => {
    return value.includes(prefix as string) && value.includes(suffix as string);
};
