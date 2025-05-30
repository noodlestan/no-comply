import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Surface } from '@no-comply/standard-ui';
import { type ParentComponent } from 'solid-js';

import { MainHeader } from '../../../navigation';

import styles from './ScreenTemplateBase.module.scss';

export const ScreenTemplateBase: ParentComponent = props => {
    const classList = staticClassList(styles, 'ScreenTemplateBase');
    const layoutClassList = staticClassList(styles, '-Layout');

    return (
        <Surface variant="stage" stretch="height" classList={classList}>
            <Flex direction="column" stretch="full" justify="stretch">
                <MainHeader sidebarHidden />
                <Flex stretch="full" classList={layoutClassList}>
                    {props.children}
                </Flex>
            </Flex>
        </Surface>
    );
};
