import { mergeProps, staticClassList } from '@noodlestan/context-ui-types';
import { createScrollableMixin } from '@noodlestan/headless-ui';

import styles from './Scrollable.module.css';
import type { ScrollableAPI, ScrollableProps } from './types';

export const createScrollable = (props: ScrollableProps): ScrollableAPI => {
    const scrollableProps = {
        classList: staticClassList(styles, 'Scrollable'),
    };

    const { elProps: scrollableMixinElProps } = createScrollableMixin(props);
    return {
        elProps: mergeProps(props, scrollableMixinElProps, scrollableProps),
    };
};
