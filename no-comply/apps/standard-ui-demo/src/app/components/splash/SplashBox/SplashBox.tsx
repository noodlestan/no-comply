import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Flex, Text } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import IconSvg from '../../../../../assets/icon.svg';

import styles from './SplashBox.module.scss';

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
			<Display level={1} size="medium" id={props.labelId}>
				Standard UI
			</Display>
			<Flex flex={1} classList={staticClassList(styles, '-Logo')}>
				<IconSvg />
			</Flex>
			<Text size="medium">Made in Noodlestan</Text>
		</Flex>
	);
};
