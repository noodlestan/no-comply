import { Callout, DataItem, NumberInput } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

export const NumberInputDemoPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal('');
    const [value, setValue] = createSignal('15');

    const handleValueChange = (value: string) => {
        console.info('onChangeValue', value);
        setValue(value);
    };

    const handleConfirmValue = (value: string) => {
        console.info('onConfirmValue', value);
        setValue(value);
    };

    const handleCancelValue = () => {
        console.info('onCancelValue');
    };

    const COMPONENT = findComponent('NumberInput');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <Callout title="values">
                <DataItem label="Raw value">{value()}</DataItem>
                <DataItem label="Number value">{Number(value())}</DataItem>
            </Callout>

            <DemoSection title="defaults">
                <DemoItem>
                    <NumberInput value={emptyValue()} onChangeValue={setEmptyValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="value">
                <DemoItem title="updated via onChangeValue()">
                    <NumberInput value={value()} onChangeValue={setValue} />
                </DemoItem>
                <DemoItem title="updated via onConfirmValue()" note="press ENTER or ESC">
                    <NumberInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="placeholder">
                <DemoItem>
                    <NumberInput placeholder="E.g.: 1234" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
                <DemoItem title="xl">
                    <NumberInput value={value()} onChangeValue={setValue} size="xl" />
                </DemoItem>
                <DemoItem title="l">
                    <NumberInput value={value()} onChangeValue={setValue} size="l" />
                </DemoItem>
                <DemoItem title="m">
                    <NumberInput value={value()} onChangeValue={setValue} size="m" />
                </DemoItem>
                <DemoItem title="s">
                    <NumberInput value={value()} onChangeValue={setValue} size="s" />
                </DemoItem>
                <DemoItem title="xs">
                    <NumberInput value={value()} onChangeValue={setValue} size="xs" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="length">
                <DemoItem title="full">
                    <NumberInput value={value()} onChangeValue={setValue} length="full" />
                </DemoItem>
                <DemoItem title="l">
                    <NumberInput value={value()} onChangeValue={setValue} length="l" />
                </DemoItem>
                <DemoItem title="m">
                    <NumberInput value={value()} onChangeValue={setValue} length="m" />
                </DemoItem>
                <DemoItem title="s">
                    <NumberInput value={value()} onChangeValue={setValue} length="s" />
                </DemoItem>
                <DemoItem title="3">
                    <NumberInput value={value()} onChangeValue={setValue} length={3} />
                </DemoItem>
                <DemoItem title="auto" note="maxLength set to 3">
                    <NumberInput
                        value={value()}
                        onChangeValue={setValue}
                        length="auto"
                        maxLength={3}
                    />
                </DemoItem>
            </DemoSection>

            <DemoSection title="maxLength">
                <DemoItem title="6" note="input resized when length='auto'">
                    <NumberInput value={value()} onChangeValue={setValue} maxLength={6} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="min/max">
                <DemoItem title="1/10">
                    <NumberInput value={value()} onChangeValue={setValue} min={1} max={10} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="steps">
                <DemoItem title="0.1" note="min: -1, max: 1">
                    <NumberInput
                        value={value()}
                        onChangeValue={setValue}
                        step={0.1}
                        min={-1}
                        max={1}
                    />
                </DemoItem>
                <DemoItem title="5" note="min: 0, max: 50">
                    <NumberInput
                        value={value()}
                        onChangeValue={setValue}
                        step={5}
                        min={0}
                        max={50}
                    />
                </DemoItem>
            </DemoSection>

            <DemoSection title="modified">
                <DemoItem>
                    <NumberInput value={value()} modified />
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem>
                    <NumberInput value={value()} disabled />
                </DemoItem>
            </DemoSection>

            <DemoSection title="invalid">
                <DemoItem>
                    <NumberInput value={value()} invalid />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onChangeValue">
                <DemoItem note="see console log">
                    <NumberInput value={value()} onChangeValue={handleValueChange} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onConfirmValue">
                <DemoItem note="see console log">
                    <NumberInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onCancelValue">
                <DemoItem note="see console log">
                    <NumberInput value={value()} onCancelValue={handleCancelValue} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
