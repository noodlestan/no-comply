import { TextInput, type TextInputProps } from '@no-comply/standard-ui';
import { type TSXNode, evaluateValue } from '@purrtrait/client-tsx';
import { type Component, createSignal } from 'solid-js';

import { STATIC_SCOPE } from '../../../../../../app/controllers/RenderExample';
import type { CompilerAPI } from '../../../../../TSXCompilerModule';

type Props = Pick<TextInputProps, 'id' | 'size' | 'value' | 'disabled' | 'onValueChange'> & {
	'aria-label'?: string;
	compiler?: CompilerAPI;
};

export const ComponentPropInput: Component<Props> = props => {
	const [invalid, setInvalid] = createSignal(false);

	const handleValueChange = (inputValue: string) => {
		const compiler = props.compiler;
		if (!compiler) {
			props.onValueChange?.(inputValue);
			return;
		}
		const node: TSXNode = { type: 'jsx', serialized: inputValue } as TSXNode;
		try {
			evaluateValue(compiler, node, STATIC_SCOPE);
			setInvalid(false);
			props.onValueChange?.(inputValue);
		} catch {
			setInvalid(true);
		}
	};

	return (
		<TextInput
			id={props.id}
			size={props.size}
			value={props.value}
			disabled={props.disabled}
			invalid={invalid()}
			onValueChange={handleValueChange}
			aria-label={props['aria-label']}
		/>
	);
};
