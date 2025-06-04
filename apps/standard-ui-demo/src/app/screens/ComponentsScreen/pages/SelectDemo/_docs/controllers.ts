import { type Accessor, createSignal } from 'solid-js';

type SelectDemoControllerOptions = {
    value?: string;
};

type SelectDemoController = {
    value: Accessor<string | undefined>;
    setValue: (value: string) => void;
    handleChange: (ev: Event) => void;
    handleValueChange: (value: string) => void;
};

export const createSelectDemoController = (
    options: SelectDemoControllerOptions = {},
): SelectDemoController => {
    const [value, setValue] = createSignal(options.value);

    const handleChange = (ev: Event) => {
        console.info('onChange', ev);
        const target = ev.target as HTMLSelectElement;
        setValue(target?.value || '');
    };

    const handleValueChange = (value: string) => {
        console.info('onValueChange', value);
        setValue(value);
    };

    return { value, setValue, handleChange, handleValueChange };
};
