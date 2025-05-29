import { type ParentComponent, children } from 'solid-js';

import { translateJSX } from '../../private';
import { useTranslate } from '../../providers';

import type { TranslateProps } from './types';

export const Translate: ParentComponent<TranslateProps> = props => {
    const { t, i18next } = useTranslate();

    return (
        <>
            {typeof props.children === 'string'
                ? t(props.key, props.children, props.options)
                : translateJSX(
                      { i18n: i18next, t, props },
                      children(() => props.children)() as Node[],
                  )}
        </>
    );
};
