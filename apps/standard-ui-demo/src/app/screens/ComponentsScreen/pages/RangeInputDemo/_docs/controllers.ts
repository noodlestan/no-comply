import { type Accessor, createSignal } from 'solid-js';

type RangeInputDemoControllerOptions = {
    value?: string;
};

type RangeInputDemoController = {
    value: Accessor<string | undefined>;
    setValue: (value: string) => void;
    handleChange: (ev: Event) => void;
    handleValueChange: (value: string) => void;
};

export const createRangeInputDemoController = (
    options: RangeInputDemoControllerOptions = {},
): RangeInputDemoController => {
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
