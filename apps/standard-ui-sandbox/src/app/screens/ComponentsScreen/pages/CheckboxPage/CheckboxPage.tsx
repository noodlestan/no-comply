import { Checkbox } from '@noodlestan/context-ui';
import { staticClassList } from '@noodlestan/context-ui-primitives';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './CheckboxPage.module.css';

export const CheckboxPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal();
    const [value, setValue] = createSignal(true);

    const handleValueChange = (value: boolean) => {
        console.info('onChangeValue', value);
        setValue(value);
    };

    const COMPONENT = findComponent('Checkbox');

    return (
        <DemoPage title="Checkbox" classList={staticClassList(styles, 'CheckboxPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Checkbox checked={Boolean(emptyValue())} onChangeValue={setEmptyValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="value">
                <DemoItem title="updated via onChangeValue()">
                    <Checkbox checked={value()} onChangeValue={setValue} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="l">
                    <Checkbox checked={value()} onChangeValue={setValue} size="l" />
                </DemoItem>
                <DemoItem title="m">
                    <Checkbox checked={value()} onChangeValue={setValue} size="m" />
                </DemoItem>
                <DemoItem title="s">
                    <Checkbox checked={value()} onChangeValue={setValue} size="s" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="modified">
                <DemoItem row>
                    <Checkbox checked modified />
                    <Checkbox modified />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem row>
                    <Checkbox checked disabled />
                    <Checkbox disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="invalid">
                <DemoItem row>
                    <Checkbox checked invalid />
                    <Checkbox invalid />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onChangeValue">
                <DemoItem note="see console log">
                    <Checkbox checked={value()} onChangeValue={handleValueChange} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Checkbox checked={true} classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
