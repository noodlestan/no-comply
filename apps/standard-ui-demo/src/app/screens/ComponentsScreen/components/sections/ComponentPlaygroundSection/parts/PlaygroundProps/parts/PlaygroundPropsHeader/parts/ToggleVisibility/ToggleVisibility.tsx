import {
	type ToggleActionIcons,
	type ToggleActionLabels,
	createToggleAction,
} from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-contexts';
import {
	combineProps,
	computedProps,
	createClassList,
	shortId,
	staticClassList,
} from '@no-comply/solid-primitives';
import { AlignFirstLine, Flex, Icon, LabelAligned, createButton } from '@no-comply/standard-ui';
import Eye from 'lucide-solid/icons/eye';
import EyeOff from 'lucide-solid/icons/eye-off';
import { type Component } from 'solid-js';

import styles from './ToggleVisibility.module.scss';

type Props = {
	value: boolean;
	labels?: ToggleActionLabels;
	icons?: ToggleActionIcons;
	onValueChange: (value: boolean) => void;
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(Eye),
	off: createIconValue(EyeOff),
};

const LABELS: ToggleActionLabels = {
	on: 'Hide',
	off: 'Show',
};

export const ToggleVisibility: Component<Props> = props => {
	const id = shortId();

	const handleButtonPress = () => props.onValueChange(!props.value);

	const { $root: $buttonRoot } = createButton({
		variant: 'plain',
		size: 'small',
		onPress: handleButtonPress,
	});

	const toggleActionProps = computedProps({
		value: () => props.value,
		labels: () => Object.assign({}, LABELS, props.labels),
		icons: () => Object.assign({}, ICONS, props.icons),
	});
	const { _icon: toggleIcon } = createToggleAction(toggleActionProps);

	const classList = createClassList(styles, () => ({ 'is-on': Boolean(props.value) }));
	const $root = computedProps({
		classList,
	});

	const $icon = {
		classList: staticClassList(styles, '-Icon'),
	};

	const $ = combineProps($buttonRoot, $root);
	const _icon = combineProps(toggleIcon, $icon);

	const layoutClassList = staticClassList(styles, '-Layout');

	return (
		<button {...$}>
			<AlignFirstLine height="xs" type="label" variant="small">
				<Flex direction="row" gap="xs" align="start" tag="span" classList={layoutClassList}>
					<Icon {..._icon} />
					<LabelAligned for={id}>{_icon.label}</LabelAligned>
					{/* <Checkbox id={id} checked={props.value} onValueChange={props.onValueChange} /> */}
				</Flex>
			</AlignFirstLine>
		</button>
	);
};
