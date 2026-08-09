import { AlignFirstLine } from '@no-comply/solid-composables';
import { type ClosedTagProps, combineProps, staticClassList } from '@no-comply/solid-primitives';
import { type ContentSize, Display, Icon } from '@no-comply/standard-ui';
import HomeIcon from 'lucide-solid/icons/home';
import { type Component, type JSX, splitProps } from 'solid-js';

import styles from './ExampleLayoutChild.module.scss';

type Props = ClosedTagProps & {
	title?: JSX.Element;
	size?: ContentSize;
	content?: JSX.Element;
};

export const ExampleLayoutChild: Component<Props> = props => {
	const [locals, $others] = splitProps(props, ['title', 'content', 'size']);

	const $root = {
		classList: staticClassList(styles, 'ExampleLayoutChild'),
	};

	const $ = combineProps($others, $root);

	return (
		<div {...$}>
			{locals.content ? (
				locals.content
			) : (
				<AlignFirstLine data-example-layout-child-content>
					<Icon size={props.size} icon={HomeIcon} alignFirstLine="measure" />
					<Display size={props.size} alignFirstLine="target">
						{props.title ?? 'Lorem Ipsum'}
					</Display>
				</AlignFirstLine>
			)}
		</div>
	);
};
