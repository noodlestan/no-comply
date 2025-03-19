import { Display, Flex, Text } from '@noodlestan/ui-system';
import { Component } from 'solid-js';

import IconSvg from '../../../../assets/icon.svg';

import './SplashBox.css';

export const SplashBox: Component = () => {
    const classList = () => ({
        SplashBox: true,
    });
    return (
        <Flex classList={classList()} align="center" justify="stretch" padding="l" gap="2xl">
            <Display size="xl">Context UI</Display>
            <Flex flex={1} classList={{ 'SplashBox--Logo': true }}>
                <IconSvg />
            </Flex>
            <Text size="l">Made in Noodlestan</Text>
        </Flex>
    );
};
