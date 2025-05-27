import type { TextTagName } from '@noodlestan/context-ui-aria';

import type { DisplayMixinAPI, DisplayMixinProps } from '../../mixins';

export type DisplayOwnProps = {
    tag?: TextTagName;
};

export type DisplayProps = DisplayMixinProps & DisplayOwnProps;

export type DisplayAPI = {
    $root: DisplayMixinAPI['$root'] & {
        component: TextTagName;
    };
};
