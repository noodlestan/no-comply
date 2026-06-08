import { type Accessor, createSignal } from 'solid-js';

type CheckboxExampleControllerOptions = {
	value?: boolean;
};

type CheckboxExampleController = {
	value: Accessor<boolean | undefined>;
	setValue: (value: boolean | undefined) => void;
	handleChange: (ev: Event) => void;
	handleValueChange: (value: boolean) => void;
};

export const createCheckboxExampleController = (
	options: CheckboxExampleControllerOptions = {},
): CheckboxExampleController => {
	const [value, setValue] = createSignal(options.value);

	const handleChange = (ev: Event) => {
		console.info('onChange', ev);
		const target = ev.target as HTMLInputElement;
		setValue(Boolean(target?.checked));
	};

	const handleValueChange = (value: boolean | undefined) => {
		console.info('onValueChange', value);
		setValue(value);
	};

	return { value, setValue, handleChange, handleValueChange };
};
