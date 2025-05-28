import {
    type ClosedTagProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import styles from './PageContentsLayout.module.scss';

type Props = ClosedTagProps;

export const PageContentsLayout: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, ['children']);

    const $static = {
        classList: staticClassList(styles, 'PageContentsLayout'),
    };
    const $ = mergeProps($static, $others);

    return (
        <Flex direction="column" {...$}>
            {locals.children}
        </Flex>
    );
};
