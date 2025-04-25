import { RangeInput } from '@noodlestan/context-ui';
import { staticClassList } from '@noodlestan/context-ui-primitives';
import { DataItem } from '@noodlestan/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './RangeInputPage.module.css';

export const RangeInputPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal('');
    const [value, setValue] = createSignal('Foobar');
    const [numValue, setNumValue] = createSignal('5');

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

    const COMPONENT = findComponent('RangeInput');

    return (
        <DemoPage title="RangeInput" classList={staticClassList(styles, 'RangeInputPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DataItem label="value">{emptyValue()}</DataItem>
                <DemoItem>
                    <RangeInput value={emptyValue()} onChangeValue={setEmptyValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="value">
                <DataItem label="value">{value()}</DataItem>
                <DemoItem title="updated via onChangeValue()">
                    <RangeInput value={value()} onChangeValue={setValue} />
                </DemoItem>
                <DemoItem title="updated via onConfirmValue()" note="press ENTER or ESC">
                    <RangeInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="xl">
                    <RangeInput value={value()} onChangeValue={setValue} size="xl" />
                </DemoItem>
                <DemoItem title="l">
                    <RangeInput value={value()} onChangeValue={setValue} size="l" />
                </DemoItem>
                <DemoItem title="m">
                    <RangeInput value={value()} onChangeValue={setValue} size="m" />
                </DemoItem>
                <DemoItem title="s">
                    <RangeInput value={value()} onChangeValue={setValue} size="s" />
                </DemoItem>
                <DemoItem title="xs">
                    <RangeInput value={value()} onChangeValue={setValue} size="xs" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem title="full">
                    <RangeInput value={value()} onChangeValue={setValue} length="full" />
                </DemoItem>
                <DemoItem title="l">
                    <RangeInput value={value()} onChangeValue={setValue} length="l" />
                </DemoItem>
                <DemoItem title="m">
                    <RangeInput value={value()} onChangeValue={setValue} length="m" />
                </DemoItem>
                <DemoItem title="s">
                    <RangeInput value={value()} onChangeValue={setValue} length="s" />
                </DemoItem>
                <DemoItem title="3">
                    <RangeInput value={value()} onChangeValue={setValue} length={3} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="min/max">
                <DataItem label="value">{numValue()}</DataItem>
                <DemoItem title="1/10">
                    <RangeInput value={numValue()} onChangeValue={setNumValue} min={1} max={10} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="modified">
                <DemoItem>
                    <RangeInput value={value()} modified />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem>
                    <RangeInput value={value()} disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="invalid">
                <DemoItem>
                    <RangeInput value={value()} invalid />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onChangeValue">
                <DemoItem note="see console log">
                    <RangeInput value={value()} onChangeValue={handleValueChange} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onConfirmValue">
                <DemoItem note="see console log">
                    <RangeInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onCancelValue">
                <DemoItem note="see console log">
                    <RangeInput value={value()} onCancelValue={handleCancelValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <RangeInput value="Foobar" classList={{ override: true }} />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
