import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Surface } from '@no-comply/standard-ui';
import { type ParentComponent } from 'solid-js';

import { MainHeader } from '../../../navigation';

import styles from './ScreenTemplateBase.module.css';

export const ScreenTemplateBase: ParentComponent = props => {
    const classList = staticClassList(styles, 'ScreenTemplateBase--Layout');

    return (
        <Surface variant="stage" stretch="height">
            <Flex direction="column" stretch="full" justify="stretch">
                <MainHeader sidebarHidden />
                <Flex stretch="full" classList={classList}>
                    {props.children}
                </Flex>
            </Flex>
        </Surface>
    );
};
