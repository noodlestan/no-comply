import { TextInput } from '@noodlestan/ui-system';
import { Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import './TextInputPage.css';

export const TextInputPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal('');
    const [value, setValue] = createSignal('Foobar');
    const [numValue, setNumValue] = createSignal('15');
    const [passwordValue, setPasswordValue] = createSignal('Foobar');
    const [emailValue, setEmailValue] = createSignal('foo@bar.com');

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

    const COMPONENT = findComponent('TextInput');

    return (
        <DemoPage classList={{ TextInputPage: true }} title="TextInput">
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <TextInput value={emptyValue()} onChangeValue={setEmptyValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="value">
                <DemoItem title="updated via onChangeValue()">
                    <TextInput value={value()} onChangeValue={setValue} />
                </DemoItem>
                <DemoItem title="updated via onConfirmValue()" note="press ENTER or ESC">
                    <TextInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="type">
                <DemoItem title="number">
                    <TextInput type="number" value={numValue()} onChangeValue={setNumValue} />
                </DemoItem>
                <DemoItem title="password">
                    <TextInput
                        type="password"
                        value={passwordValue()}
                        onChangeValue={setPasswordValue}
                    />
                </DemoItem>
                <DemoItem title="email">
                    <TextInput type="email" value={emailValue()} onChangeValue={setEmailValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="placeholder">
                <DemoItem>
                    <TextInput placeholder="E.g§.: Foobar" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="xl">
                    <TextInput value={value()} onChangeValue={setValue} size="xl" />
                </DemoItem>
                <DemoItem title="l">
                    <TextInput value={value()} onChangeValue={setValue} size="l" />
                </DemoItem>
                <DemoItem title="m">
                    <TextInput value={value()} onChangeValue={setValue} size="m" />
                </DemoItem>
                <DemoItem title="s">
                    <TextInput value={value()} onChangeValue={setValue} size="s" />
                </DemoItem>
                <DemoItem title="xs">
                    <TextInput value={value()} onChangeValue={setValue} size="xs" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem title="full">
                    <TextInput value={value()} onChangeValue={setValue} length="full" />
                </DemoItem>
                <DemoItem title="l">
                    <TextInput value={value()} onChangeValue={setValue} length="l" />
                </DemoItem>
                <DemoItem title="m">
                    <TextInput value={value()} onChangeValue={setValue} length="m" />
                </DemoItem>
                <DemoItem title="s">
                    <TextInput value={value()} onChangeValue={setValue} length="s" />
                </DemoItem>
                <DemoItem title="3">
                    <TextInput value={value()} onChangeValue={setValue} length={3} />
                </DemoItem>
                <DemoItem title="auto" note="maxLength set to 3">
                    <TextInput
                        value={value()}
                        onChangeValue={setValue}
                        length="auto"
                        maxLength={3}
                    />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="maxLength">
                <DemoItem title="10">
                    <TextInput value={value()} onChangeValue={setValue} maxLength={6} />
                </DemoItem>
                <DemoItem title="10" note="input resized when length='auto'">
                    <TextInput
                        value={value()}
                        onChangeValue={setValue}
                        length="auto"
                        maxLength={6}
                    />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="min/max">
                <DemoItem title="1/10">
                    <TextInput
                        type="number"
                        value={numValue()}
                        onChangeValue={setNumValue}
                        min={1}
                        max={10}
                    />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="modified">
                <DemoItem>
                    <TextInput value={value()} modified />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem>
                    <TextInput value={value()} disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="invalid">
                <DemoItem>
                    <TextInput value={value()} invalid />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onChangeValue">
                <DemoItem note="see console log">
                    <TextInput value={value()} onChangeValue={handleValueChange} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onConfirmValue">
                <DemoItem note="see console log">
                    <TextInput value={value()} onConfirmValue={handleConfirmValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onCancelValue">
                <DemoItem note="see console log">
                    <TextInput value={value()} onCancelValue={handleCancelValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <TextInput value="Foobar" classList={{ override: true }} />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
