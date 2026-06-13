import type { NoComplyEntityData } from '@no-comply/meta';
import type { ToggleActionIcons, ToggleActionLabels } from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-contexts';
import { createClassList } from '@no-comply/solid-primitives';
import { Flex, Surface, Text, ToggleButton } from '@no-comply/standard-ui';
import {
	type TypeDeclaration,
	createResolveTypeContext,
	resolveTypeDeclaration,
} from '@purrception/lang-ts';
import { CodeBlock } from '@purrtrait/solid-code';
import SplitIcon from 'lucide-solid/icons/trending-up-down';
import UndoIcon from 'lucide-solid/icons/undo';
import { type Component, Show, createEffect, createSignal } from 'solid-js';

import { getSymbolEntityMaybe } from '../../../../providers';

import styles from './DeclarationCodeBlock.module.scss';

type DeclarationCodeBlockProps = {
	type: TypeDeclaration;
	entity: NoComplyEntityData;
	resolve?: 'show' | true | false;
};

const LABELS: ToggleActionLabels = {
	on: 'See Original',
	off: 'Resolve references',
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(UndoIcon),
	off: createIconValue(SplitIcon),
};

export const DeclarationCodeBlock: Component<DeclarationCodeBlockProps> = props => {
	const classList = createClassList(styles, () => ['DeclarationCodeBlock']);

	const [resolve, setResolve] = createSignal(false);

	createEffect(() => {
		if (typeof props.resolve === 'boolean') {
			setResolve(props.resolve);
		}
	});

	const context = () => createResolveTypeContext(getSymbolEntityMaybe, props.entity);
	const node = () => (resolve() ? resolveTypeDeclaration(context(), props.type) : props.type);

	const handleResolveClick = () => {
		setResolve(r => !r);
	};

	return (
		<Surface variant="card" padding="xs" classList={classList()}>
			<Show when={props.resolve === 'show'}>
				<Surface variant="panel" padding="s">
					<Flex direction="row-reverse" gap="m" align="center" justify="end">
						{resolve() ? <Text variant="small">Viewing resolved types</Text> : <span />}
						<ToggleButton
							value={resolve()}
							labels={LABELS}
							icons={ICONS}
							onPress={handleResolveClick}
						/>
					</Flex>
				</Surface>
			</Show>
			<CodeBlock lang="ts" nodes={[node()]} context={props.entity} />
		</Surface>
	);
};
