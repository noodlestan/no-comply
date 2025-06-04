import { type Accessor, createSignal } from 'solid-js';

type NumberInputDemoControllerOptions = {
    value?: string;
};

type NumberInputDemoController = {
    value: Accessor<string | undefined>;
    setValue: (value: string) => void;
    handleValueChange: (value: string) => void;
};

export const createNumberInputDemoController = (
    options: NumberInputDemoControllerOptions = {},
): NumberInputDemoController => {
    const [value, setValue] = createSignal(options.value);

    const handleValueChange = (value: string) => {
        console.info('onValueChange', value);
        setValue(value);
    };

    return { value, setValue, handleValueChange };
};
