import type { FlexAlign } from '@no-comply/solid-composables';
import {
	type ClosedTagProps,
	type Styles,
	combineProps,
	computedProps,
	createClassList,
	shortId,
} from '@no-comply/solid-primitives';
import {
	Display,
	type DisplayLevel,
	Flex,
	type FlexGap,
	Label,
	type LayoutPadding,
	Text,
} from '@no-comply/standard-ui';
import { type JSX, type ParentComponent, Show, splitProps } from 'solid-js';

import styles from './DocsItem.module.scss';

export type DocsItemProps = ClosedTagProps & {
	title?: string;
	level?: DisplayLevel;
	defaultValue?: boolean;
	note?: string;
	row?: boolean;
	gap?: FlexGap;
	padding?: LayoutPadding;
	align?: FlexAlign;
	width?: string;
	height?: string;
	maxHeight?: string;
	minHeight?: string;
	styled?: boolean;
	styles?: Styles;
	slot?: () => JSX.Element;
};

export const DocsItem: ParentComponent<DocsItemProps> = props => {
	const [locals, $others] = splitProps(props, [
		'title',
		'defaultValue',
		'note',
		'row',
		'gap',
		'padding',
		'align',
		'width',
		'height',
		'maxHeight',
		'minHeight',
		'styled',
		'styles',
		'slot',
		'children',
	]);

	const labelId = () => (locals.title ? shortId() : undefined);

	const contentsStyle = () => ({
		...locals.styles,
		'max-width': locals.width ?? 'unset',
		height: locals.height ?? 'unset',
		'max-height': locals.maxHeight ?? 'unset',
		'min-height': locals.minHeight ?? 'unset',
	});

	const classList = createClassList(styles, () => ({
		DocsItem: true,
		styled: Boolean(locals.styled),
	}));
	const $root = computedProps({
		classList,
	});

	const $ = combineProps($others, $root);

	return (
		<Flex gap="m" aria-labelledby={labelId()} {...$}>
			<Show when={locals.title}>
				<Display level={props.level ?? 4} id={labelId()}>
					{locals.title}
					<Show when={locals.defaultValue}>
						<Label variant="small" tag="span">
							(default)
						</Label>
					</Show>
				</Display>
			</Show>

			<Show when={locals.slot}>{locals.slot?.()}</Show>

			<Flex
				gap={locals.gap}
				direction={locals.row ? 'row' : 'column'}
				padding={locals.padding}
				align={locals.align}
				style={contentsStyle()}
				data-demo-item-contents
			>
				{locals.children}
			</Flex>

			<Show when={locals.note}>
				<Text variant="small">{locals.note}</Text>
			</Show>
		</Flex>
	);
};
