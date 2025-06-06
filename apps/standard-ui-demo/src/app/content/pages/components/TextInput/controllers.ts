import { type Accessor, createSignal } from 'solid-js';

type TextInputExampleControllerOptions = {
    value?: string;
};

type TextInputExampleController = {
    value: Accessor<string | undefined>;
    setValue: (value: string) => void;
    handleValueChange: (value: string) => void;
};

export const createTextInputExampleController = (
    options: TextInputExampleControllerOptions = {},
): TextInputExampleController => {
    const [value, setValue] = createSignal(options.value);

    const handleValueChange = (value: string) => {
        console.info('onValueChange', value);
        setValue(value);
    };

    return { value, setValue, handleValueChange };
};
