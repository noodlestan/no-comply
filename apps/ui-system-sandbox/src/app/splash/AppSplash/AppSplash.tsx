import { FadeIn, Flex, Surface } from '@noodlestan/ui-system';
import { Component } from 'solid-js';

import { Spinner } from '../../atoms';
import { SplashBox } from '../../molecules';

import './AppSplash.css';

export const AppSplash: Component = () => {
    return (
        <div classList={{ AppSplash: true }}>
            <FadeIn speed="slow">
                <Surface variant="page" classList={{ 'AppSplash--page': true }}>
                    <Flex tag="main" direction="column" align="center" justify="center">
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
            </FadeIn>
        </div>
    );
};
