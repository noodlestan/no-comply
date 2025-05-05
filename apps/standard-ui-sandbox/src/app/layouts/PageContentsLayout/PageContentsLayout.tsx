import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps } from '@noodlestan/headless-ui';
import { Flex } from '@noodlestan/standard-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import styles from './PageContentsLayout.module.css';

type Props = ClosedTagProps & {
    variant?: 'stage' | 'page';
};

export const PageContentsLayout: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, ['variant', 'children']);

    const $static = {
        classList: staticClassList(styles, 'PageContentsLayout'),
    };
    const $ = mergeProps($static, $others);

    return (
        <Flex direction="column" flex={1} stretch="full" {...$}>
            {locals.children}
        </Flex>
    );
};
