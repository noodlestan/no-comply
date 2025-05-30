import { type ClosedTagProps, mergeProps, staticClassList } from '@no-comply/solid-primitives';
import { Flex, type FlexProps } from '@no-comply/standard-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import styles from './PageContentsLayout.module.scss';

type Props = ClosedTagProps & FlexProps;

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
