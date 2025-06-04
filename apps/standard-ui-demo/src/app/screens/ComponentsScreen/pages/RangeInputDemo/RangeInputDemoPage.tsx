import { DataItem, RangeInput } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

export const RangeInputDemoPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal('');
    const [value, setValue] = createSignal('Foobar');
    const [numValue, setNumValue] = createSignal('5');

    const handleValueChange = (value: string) => {
        console.info('onValueChange', value);
        setValue(value);
    };

    const handleConfirmValue = (value: string) => {
        console.info('onConfirmValue', value);
        setValue(value);
    };

    const handleCancelValue = () => {
        console.info('onCancelValue');
    };

    const COMPONENT = findComponent('RangeInput');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <DemoSection title="defaults">
                <DataItem label="value">{emptyValue()}</DataItem>
                <DemoItem>
                    <RangeInput value={emptyValue()} onValueChange={setEmptyValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="value">
                <DataItem label="value">{value()}</DataItem>
                <DemoItem title="updated via onValueChange()">
                    <RangeInput value={value()} onValueChange={setValue} />
                </DemoItem>
                <DemoItem title="updated via onConfirmValue()" note="press ENTER or ESC">
                    <RangeInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
                <DemoItem title="xl">
                    <RangeInput value={value()} onValueChange={setValue} size="xl" />
                </DemoItem>
                <DemoItem title="l">
                    <RangeInput value={value()} onValueChange={setValue} size="l" />
                </DemoItem>
                <DemoItem title="m">
                    <RangeInput value={value()} onValueChange={setValue} size="m" />
                </DemoItem>
                <DemoItem title="s">
                    <RangeInput value={value()} onValueChange={setValue} size="s" />
                </DemoItem>
                <DemoItem title="xs">
                    <RangeInput value={value()} onValueChange={setValue} size="xs" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="length">
                <DemoItem title="full">
                    <RangeInput value={value()} onValueChange={setValue} length="full" />
                </DemoItem>
                <DemoItem title="l">
                    <RangeInput value={value()} onValueChange={setValue} length="l" />
                </DemoItem>
                <DemoItem title="m">
                    <RangeInput value={value()} onValueChange={setValue} length="m" />
                </DemoItem>
                <DemoItem title="s">
                    <RangeInput value={value()} onValueChange={setValue} length="s" />
                </DemoItem>
                <DemoItem title="3">
                    <RangeInput value={value()} onValueChange={setValue} length={3} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="min/max">
                <DataItem label="value">{numValue()}</DataItem>
                <DemoItem title="1/10">
                    <RangeInput value={numValue()} onValueChange={setNumValue} min={1} max={10} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="modified">
                <DemoItem>
                    <RangeInput value={value()} modified />
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem>
                    <RangeInput value={value()} disabled />
                </DemoItem>
            </DemoSection>

            <DemoSection title="invalid">
                <DemoItem>
                    <RangeInput value={value()} invalid />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onValueChange">
                <DemoItem note="see console log">
                    <RangeInput value={value()} onValueChange={handleValueChange} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onConfirmValue">
                <DemoItem note="see console log">
                    <RangeInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onCancelValue">
                <DemoItem note="see console log">
                    <RangeInput value={value()} onCancelValue={handleCancelValue} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
