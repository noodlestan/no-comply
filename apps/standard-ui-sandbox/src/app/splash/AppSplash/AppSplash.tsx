import { staticClassList } from '@noodlestan/context-ui-types';
import { Flex, Surface } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { Spinner } from '../../atoms';
import { SplashBox } from '../../molecules';

import styles from './AppSplash.module.css';

export const AppSplash: Component = () => {
    return (
        <div classList={staticClassList(styles, 'AppSplash')}>
            <Surface component="main" variant="page">
                <Flex direction="column" align="center" justify="center" stretch="full">
                    <Flex data-splash-box direction="column" align="center" justify="center">
                        <SplashBox />
                    </Flex>
                    <div data-splash-spinner>
                        <Spinner speed="slow" size="l" when={true} />
                    </div>
                </Flex>
            </Surface>
        </div>
    );
};
