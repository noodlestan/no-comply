import { staticClassList } from '@no-comply/solid-primitives';
import { Checkbox } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './CheckboxDemoPage.module.scss';

export const CheckboxDemoPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal();
    const [value, setValue] = createSignal(true);

    const handleValueChange = (value: boolean) => {
        console.info('onChangeValue', value);
        setValue(value);
    };

    const COMPONENT = findComponent('Checkbox');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'CheckboxDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem>
                    <Checkbox checked={Boolean(emptyValue())} onChangeValue={setEmptyValue} />
                </DemoItem>
            </DemoSection>
            <DemoSection title="value">
                <DemoItem title="updated via onChangeValue()">
                    <Checkbox checked={value()} onChangeValue={setValue} />
                </DemoItem>
            </DemoSection>
            <DemoSection title="size">
                <DemoItem title="l">
                    <Checkbox checked={value()} onChangeValue={setValue} size="l" />
                </DemoItem>
                <DemoItem title="m">
                    <Checkbox checked={value()} onChangeValue={setValue} size="m" />
                </DemoItem>
                <DemoItem title="s">
                    <Checkbox checked={value()} onChangeValue={setValue} size="s" />
                </DemoItem>
            </DemoSection>
            <DemoSection title="modified">
                <DemoItem row>
                    <Checkbox checked modified />
                    <Checkbox modified />
                </DemoItem>
            </DemoSection>
            <DemoSection title="disabled">
                <DemoItem row>
                    <Checkbox checked disabled />
                    <Checkbox disabled />
                </DemoItem>
            </DemoSection>
            <DemoSection title="invalid">
                <DemoItem row>
                    <Checkbox checked invalid />
                    <Checkbox invalid />
                </DemoItem>
            </DemoSection>
            <DemoSection title="onChangeValue">
                <DemoItem note="see console log">
                    <Checkbox checked={value()} onChangeValue={handleValueChange} />
                </DemoItem>
            </DemoSection>
            <DemoSection title="classList">
                <DemoItem note="Should override text color">
                    <Checkbox checked={true} classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
