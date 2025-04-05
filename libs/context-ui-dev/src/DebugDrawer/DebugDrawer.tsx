import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { staticClassList } from '@noodlestan/context-ui-types';
import { SurfaceBase } from '@noodlestan/headless-ui';
import { type Component } from 'solid-js';

import { ContextTreePanel } from '../panels';
import { Display, Flex } from '../private';

import styles from './DebugDrawer.module.css';

export const DebugDrawer: Component = () => {
    const region = createAriaRegion();

    return (
        <div classList={staticClassList(styles, 'DebugDrawer')}>
            <SurfaceBase variant="card" {...region.elProps}>
                <Flex direction="column" padding="l" gap="m">
                    <Display level={3} {...region.labelProps}>
                        Debug
                    </Display>
                    <ContextTreePanel />
                </Flex>
            </SurfaceBase>
        </div>
    );
};
