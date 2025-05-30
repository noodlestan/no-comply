import { staticClassList } from '@no-comply/solid-primitives';
import { TextInput } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './TextInputDemoPage.module.scss';

export const TextInputDemoPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal('');
    const [value, setValue] = createSignal('Foobar');
    const [numValue, setNumValue] = createSignal('15');
    const [passwordValue, setPasswordValue] = createSignal('Foobar');
    const [emailValue, setEmailValue] = createSignal('foo@bar.com');

    const handleValueChange = (value: string) => {
        console.info('onChangeValue', value);
        setValue(value);
    };

    const COMPONENT = findComponent('TextInput');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'TextInputDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem>
                    <TextInput value={emptyValue()} onChangeValue={setEmptyValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="value">
                <DemoItem title="updated via onChangeValue()">
                    <TextInput value={value()} onChangeValue={setValue} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="type">
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
            </DemoSection>

            <DemoSection title="placeholder">
                <DemoItem>
                    <TextInput placeholder="E.g§.: Foobar" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
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
            </DemoSection>

            <DemoSection title="length">
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
            </DemoSection>

            <DemoSection title="maxLength">
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
            </DemoSection>

            <DemoSection title="min/max">
                <DemoItem title="1/10">
                    <TextInput
                        type="number"
                        value={numValue()}
                        onChangeValue={setNumValue}
                        min={1}
                        max={10}
                    />
                </DemoItem>
            </DemoSection>

            <DemoSection title="modified">
                <DemoItem>
                    <TextInput value={value()} modified />
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem>
                    <TextInput value={value()} disabled />
                </DemoItem>
            </DemoSection>

            <DemoSection title="invalid">
                <DemoItem>
                    <TextInput value={value()} invalid />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onChangeValue">
                <DemoItem note="see console log">
                    <TextInput value={value()} onChangeValue={handleValueChange} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem note="Should override text color">
                    <TextInput value="Foobar" classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
