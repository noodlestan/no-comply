import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Display, Flex, Text } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import IconSvg from '../../../../assets/icon.svg';

import styles from './SplashBox.module.css';

type Props = {
    labelId: string;
};

export const SplashBox: Component<Props> = props => {
    return (
        <Flex
            classList={staticClassList(styles, 'SplashBox')}
            align="center"
            justify="stretch"
            padding="l"
            gap="2xl"
        >
            <Display level={1} id={props.labelId}>
                Context UI
            </Display>
            <Flex flex={1} classList={staticClassList(styles, 'SplashBox--logo')}>
                <IconSvg />
            </Flex>
            <Text variant="medium">Made in Noodlestan</Text>
        </Flex>
    );
};
