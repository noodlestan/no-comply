import { mergeProps } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps } from '@noodlestan/headless-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';
import { Display } from '../../../typography';

import { CALLOUT_PROPS } from './constants';
import { createCallout } from './createCallout';
import type { CalloutProps } from './types';

type Props = ClosedTagProps & CalloutProps;

export const Callout: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...CALLOUT_PROPS, 'children']);

    const { $root, iconProps, $label } = createCallout(locals);
    const $ = mergeProps($root, $others);

    return (
        <Surface variant="message" {...$} labelledby={$label.id}>
            <Flex direction="row" align="center" padding="s" gap="m" justify="between">
                <Flex direction="row" align="center" padding="s" gap="m">
                    <Icon {...iconProps} />
                    <Display level={4} {...$label}>
                        {locals.children}
                    </Display>
                </Flex>
                {/* TODO close button */}
                <button>Close</button>
            </Flex>
        </Surface>
    );
};
