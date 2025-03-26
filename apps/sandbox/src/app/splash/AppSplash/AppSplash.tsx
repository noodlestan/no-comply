import { Flex, Surface } from '@noodlestan/context-ui';
import { type Component } from 'solid-js';

import { Spinner } from '../../atoms';
import { SplashBox } from '../../molecules';

import './AppSplash.css';

export const AppSplash: Component = () => {
    return (
        <div classList={{ AppSplash: true }}>
            <Surface tag="main" variant="page" classList={{ 'AppSplash--page': true }}>
                <Flex direction="column" align="center" justify="center">
                    <Flex
                        classList={{ 'AppSplash--splash': true }}
                        direction="column"
                        align="center"
                        justify="center"
                    >
                        <SplashBox />
                    </Flex>
                    <div class="AppSplash--spinner">
                        <Spinner speed="slow" size="l" when={true} />
                    </div>
                </Flex>
            </Surface>
        </div>
    );
};
