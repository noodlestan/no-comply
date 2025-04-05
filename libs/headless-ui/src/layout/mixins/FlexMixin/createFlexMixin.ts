import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@noodlestan/context-ui-types';

import styles from './FlexMixin.module.css';
import type { FlexMixinAPI, FlexMixinProps } from './types';

const defaultProps: PickRequired<FlexMixinProps, 'direction' | 'align' | 'justify'> = {
    direction: 'column',
    align: 'stretch',
    justify: 'start',
};

export function createFlexMixin(props: FlexMixinProps): FlexMixinAPI {
    const direction = () => props.direction ?? defaultProps.direction;
    const align = () => props.align ?? defaultProps.align;
    const justify = () => props.justify ?? defaultProps.justify;

    const classList = createClassList(styles, () => ({
        Flex: true,
        [`Flex-direction-${direction()}`]: true,
        [`Flex-align-${align()}`]: true,
        [`Flex-justify-${justify()}`]: true,
        [`Flex-shrink`]: props.shrink === true,
        [`Flex-no-shrink`]: props.shrink === false,
        [`Flex-wrap`]: Boolean(props.wrap),
        [`Flex-inline`]: Boolean(props.inline),
        [`Flex-flex`]: props.flex !== undefined,
    }));

    const elProps = createComputedProps({ classList });

    return {
        elProps,
    };
}
