import { staticClassList } from '@noodlestan/context-ui-types';
import { Display, Flex, Text } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import IconSvg from '../../../../assets/icon.svg';

import styles from './SplashBox.module.css';

export const SplashBox: Component = () => {
    return (
        <Flex
            classList={staticClassList(styles, 'SplashBox')}
            align="center"
            justify="stretch"
            padding="l"
            gap="2xl"
        >
            <Display level={1}>Context UI</Display>
            <Flex flex={1} classList={staticClassList(styles, 'SplashBox--logo')}>
                <IconSvg />
            </Flex>
            <Text variant="medium">Made in Noodlestan</Text>
        </Flex>
    );
};
