import { type ClosedTagProps, combineProps, staticClassList } from '@no-comply/solid-primitives';
import {
	AlignFirstLine,
	type ContentSize,
	DisplayAligned,
	type DisplayVariant,
	Icon,
	type SizeScale,
} from '@no-comply/standard-ui';
import HomeIcon from 'lucide-solid/icons/home';
import { type Component, type JSX, splitProps } from 'solid-js';

import styles from './ExampleLayoutChild.module.scss';

type Props = ClosedTagProps & {
	title?: JSX.Element;
	size?: ContentSize;
	content?: JSX.Element;
};

const LABEL_VARIANT_FROM_CONTENT_SIZE: Record<ContentSize, DisplayVariant> = {
	small: 'xs',
	normal: 's',
	medium: 'm',
	large: 'l',
};

const SIZE_SCALE_FROM_CONTENT_SIZE: Record<ContentSize, SizeScale> = {
	small: 'xs',
	normal: 's',
	medium: 'm',
	large: 'l',
};

export const ExampleLayoutChild: Component<Props> = props => {
	const [locals, $others] = splitProps(props, ['title', 'content', 'size']);

	const $root = {
		classList: staticClassList(styles, 'ExampleLayoutChild'),
	};

	const $ = combineProps($others, $root);

	const variant = () => LABEL_VARIANT_FROM_CONTENT_SIZE[props.size ?? 'normal'];
	const height = () => SIZE_SCALE_FROM_CONTENT_SIZE[props.size ?? 'normal'];

	return (
		<div {...$}>
			{locals.content ? (
				locals.content
			) : (
				<AlignFirstLine
					data-example-layout-child-content
					height={height()}
					type="display"
					variant={variant()}
				>
					<Icon size={props.size} icon={HomeIcon} aligned />
					<DisplayAligned>{props.title ?? 'Lorem Ipsum'}</DisplayAligned>
				</AlignFirstLine>
			)}
		</div>
	);
};
