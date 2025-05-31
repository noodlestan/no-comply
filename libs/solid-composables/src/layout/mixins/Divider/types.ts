import type { AriaSeparatorAPI, AriaSeparatorProps } from '@no-comply/solid-accessibility';

export type DividerMixinProps = AriaSeparatorProps;

export type DividerMixinAPI = AriaSeparatorAPI & {
    $root: AriaSeparatorAPI['$root'] & {
        'data-separator': '';
    };
};
