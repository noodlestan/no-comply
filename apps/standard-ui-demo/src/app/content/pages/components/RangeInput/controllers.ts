import { type Accessor, createSignal } from 'solid-js';

type RangeInputExampleControllerOptions = {
	value?: string;
};

type RangeInputExampleController = {
	value: Accessor<string | undefined>;
	setValue: (value: string) => void;
	handleChange: (ev: Event) => void;
	handleValueChange: (value: string) => void;
};

export const createRangeInputExampleController = (
	options: RangeInputExampleControllerOptions = {},
): RangeInputExampleController => {
	const [value, setValue] = createSignal(options.value);

	const handleChange = (ev: Event) => {
		console.info('onChange', ev);
		const target = ev.target as HTMLInputElement;
		setValue(target?.value);
	};

	const handleValueChange = (value: string | undefined) => {
		console.info('onValueChange', value);
		setValue(value);
	};

	return { value, setValue, handleChange, handleValueChange };
};
