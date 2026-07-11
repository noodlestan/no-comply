import { Text } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

type Props = {
	key: string;
	value: string | string[];
};

const formatTagValue = (value: string | string[]): string => {
	const v = Array.isArray(value) ? value.join(', ') : value;
	return v ? `: ${v}` : '';
};

export const JSDocTag: Component<Props> = props => {
	const value = () => formatTagValue(props.value);

	return <Text>{`${props.key}${value()}`}</Text>;
};
