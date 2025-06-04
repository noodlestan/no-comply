import { type Accessor, createSignal } from 'solid-js';

type TextInputDemoControllerOptions = {
    value?: string;
};

type TextInputDemoController = {
    value: Accessor<string | undefined>;
    setValue: (value: string) => void;
    handleValueChange: (value: string) => void;
};

export const createTextInputDemoController = (
    options: TextInputDemoControllerOptions = {},
): TextInputDemoController => {
    const [value, setValue] = createSignal(options.value);

    const handleValueChange = (value: string) => {
        console.info('onValueChange', value);
        setValue(value);
    };

    return { value, setValue, handleValueChange };
};
