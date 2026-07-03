import type { NoComplyEntityData } from '@no-comply/meta';
import type { ToggleActionIcons, ToggleActionLabelsProp } from '@no-comply/solid-composables';
import { createClassList, createIconValue } from '@no-comply/solid-primitives';
import { Flex, Surface, Text, ToggleButton } from '@no-comply/standard-ui';
import {
	PurrceptionLanguageId,
	type TypeDeclaration,
	createResolveTypeContext,
	resolveTypeDeclaration,
} from '@purrception/lang-ts';
import SplitIcon from 'lucide-solid/icons/trending-up-down';
import UndoIcon from 'lucide-solid/icons/undo';
import { type Component, Show, createEffect, createSignal } from 'solid-js';

import { useMeta } from '../../../../providers';
import { CodeBlock } from '../CodeBlock';

import styles from './CodeDeclaration.module.scss';

type CodeDeclarationProps = {
	type: TypeDeclaration;
	entity: NoComplyEntityData;
	resolve?: 'show' | true | false;
};

const LABELS: ToggleActionLabelsProp = {
	on: 'See Original',
	off: 'Resolve references',
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(UndoIcon),
	off: createIconValue(SplitIcon),
};

export const CodeDeclaration: Component<CodeDeclarationProps> = props => {
	const classList = createClassList(styles, () => ['CodeDeclaration']);

	const { resolveSymbolEntity } = useMeta();

	const [resolve, setResolve] = createSignal(false);

	createEffect(() => {
		if (typeof props.resolve === 'boolean') {
			setResolve(props.resolve);
		}
	});

	const context = () => createResolveTypeContext(resolveSymbolEntity, props.entity);
	const node = () => (resolve() ? resolveTypeDeclaration(context(), props.type) : props.type);

	const handleResolveClick = () => {
		setResolve(r => !r);
	};

	return (
		<Surface variant="card" padding="xs" classList={classList()}>
			<Show when={props.resolve === 'show'}>
				<Surface variant="panel" padding="s">
					<Flex direction="row-reverse" gap="m" align="center" justify="end">
						{resolve() ? <Text size="small">Viewing resolved types</Text> : <span />}
						<ToggleButton
							value={resolve()}
							labels={LABELS}
							icons={ICONS}
							onPress={handleResolveClick}
						/>
					</Flex>
				</Surface>
			</Show>
			<CodeBlock nodes={[node()]} lang={PurrceptionLanguageId} context={props.entity} />
		</Surface>
	);
};
