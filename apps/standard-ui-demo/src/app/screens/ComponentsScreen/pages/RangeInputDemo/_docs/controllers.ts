import { type Accessor, createSignal } from 'solid-js';

type RangeInputDemoControllerOptions = {
    value?: string;
};

type RangeInputDemoController = {
    value: Accessor<string | undefined>;
    setValue: (value: string) => void;
    handleValueChange: (value: string) => void;
};

export const createRangeInputDemoController = (
    options: RangeInputDemoControllerOptions = {},
): RangeInputDemoController => {
    const [value, setValue] = createSignal(options.value);

    const handleValueChange = (value: string) => {
        console.info('onValueChange', value);
        setValue(value);
    };

    return { value, setValue, handleValueChange };
};
