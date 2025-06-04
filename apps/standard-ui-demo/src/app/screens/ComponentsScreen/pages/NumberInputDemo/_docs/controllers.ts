import { type Accessor, createSignal } from 'solid-js';

type NumberInputDemoControllerOptions = {
    value?: string;
};

type NumberInputDemoController = {
    value: Accessor<string | undefined>;
    setValue: (value: string) => void;
    handleChange: (ev: Event) => void;
    handleValueChange: (value: string) => void;
};

export const createNumberInputDemoController = (
    options: NumberInputDemoControllerOptions = {},
): NumberInputDemoController => {
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
