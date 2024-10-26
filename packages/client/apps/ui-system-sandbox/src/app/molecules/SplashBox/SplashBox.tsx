import { Display, Flex, Icon, Text } from '@noodlestan/ui-system';
import { ApertureIcon } from 'lucide-solid';
import { Component } from 'solid-js';

import './SplashBox.css';

export const SplashBox: Component = () => {
    const classList = () => ({
        SplashBox: true,
    });
    return (
        <Flex classList={classList()} align="center" justify="stretch" padding="l" gap="2xl">
            <Display size="xl">UI System</Display>
            <Icon size="l" icon={ApertureIcon} classList={{ 'SplashBox--icon': true }} />
            <Text size="l">Made in Noodlestan</Text>
        </Flex>
    );
};
