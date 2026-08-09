import {
	createListKeyboardController,
	createRovingIndex,
	usePopover,
} from '@no-comply/solid-composables';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';
import { type Component, For, type JSX, createSignal, onMount } from 'solid-js';

import { AnchoredPopover } from '../../../popover/components/AnchoredPopover';
import { createInputBoxMixin, createInputStateMixin, createSizedInputBoxMixin } from '../../mixins';
import { ListInputBoxItem } from '../ListInputBoxItem';

import styles from './ListInputBox.module.scss';
import type { ListInputBoxProps } from './types';

type ListContentProps = {
	$content: Record<string, unknown>;
	keyboard: ReturnType<typeof createListKeyboardController>;
	items: () => string[];
	roving: ReturnType<typeof createRovingIndex>;
	selectedKey: () => string | undefined;
	onValueChange: (key: string) => void;
	setDismissPopup: (fn: () => void) => void;
	children: (props: { key: string }) => JSX.Element;
};

const ListContent: Component<ListContentProps> = props => {
	const popover = usePopover();

	onMount(() => {
		props.setDismissPopup(() => () => popover.dismiss());
	});

	return (
		<div {...props.$content} {...props.keyboard.$root} role="listbox">
			<For each={props.items()}>
				{(key, index) => (
					<ListInputBoxItem
						selected={key === props.selectedKey()}
						tabIndex={index() === props.roving.index() ? 0 : -1}
						onPress={() => {
							props.onValueChange(key);
						}}
					>
						{props.children({ key })}
					</ListInputBoxItem>
				)}
			</For>
		</div>
	);
};

export const ListInputBox: Component<ListInputBoxProps> = props => {
	const selectedKey = () => props.value?.() ?? props.items()[0];

	const roving = createRovingIndex({
		items: props.items,
		loop: false,
		initialIndex: (() => {
			const key = props.value?.() ?? props.items()[0];
			return key ? props.items().indexOf(key) : 0;
		})(),
	});

	const [dismissPopup, setDismissPopup] = createSignal<() => void>();

	const keyboard = createListKeyboardController({
		roving,
		onSelect: (index: number) => {
			const key = props.items()[index];
			if (key) {
				props.onValueChange(key);
			}
			dismissPopup()?.();
		},
	});

	const { $root: $inputBoxRoot } = createInputBoxMixin({ disabled: props.disabled });
	const { $root: $inputStateRoot } = createInputStateMixin({
		disabled: props.disabled,
		invalid: props.invalid,
	});
	const { $root: $sizedRoot } = createSizedInputBoxMixin({
		size: props.size,
	});

	const classList = createClassList(styles, () => ({
		ListInputBox: true,
		'is-disabled': Boolean(props.disabled),
	}));

	const $root = computedProps({ classList });

	const $ = combineProps($inputBoxRoot, $inputStateRoot, $sizedRoot, $root);

	const handleTriggerKeyDown = (ev: KeyboardEvent) => {
		if (props.disabled) return;
		if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
			ev.preventDefault();
		}
	};

	const triggerLabel = () => selectedKey() || 'Select...';

	return (
		<AnchoredPopover
			direction="block"
			anchor="end-start"
			trigger={$trigger => (
				<button
					{...$trigger}
					classList={$.classList}
					onKeyDown={handleTriggerKeyDown}
					disabled={props.disabled}
				>
					{triggerLabel()}
				</button>
			)}
		>
			{$content => (
				<ListContent
					$content={$content}
					keyboard={keyboard}
					items={props.items}
					roving={roving}
					selectedKey={selectedKey}
					onValueChange={props.onValueChange}
					setDismissPopup={setDismissPopup}
					children={props.children}
				/>
			)}
		</AnchoredPopover>
	);
};
