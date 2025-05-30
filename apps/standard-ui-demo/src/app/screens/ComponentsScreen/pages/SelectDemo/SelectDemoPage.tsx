import { staticClassList } from '@no-comply/solid-primitives';
import { DataItem, Select } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './SelectDemoPage.module.scss';

const Options: Component = () => {
    return (
        <>
            <option value="foo">Foo</option>
            <option value="bar">Bar</option>
            <option value="3">Lorem ipsum</option>
        </>
    );
};

export const SelectDemoPage: Component = () => {
    const [emptyValue, setEmptyValue] = createSignal('');
    const [value, setValue] = createSignal('bar');

    const handleValueChange = (value: string) => {
        console.info('onChangeValue', value);
        setValue(value);
    };

    const COMPONENT = findComponent('Select');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'SelectDemoPage')}
        >
            <DemoSection title="defaults">
                <DataItem label="value">{emptyValue() || 'undefined'}</DataItem>
                <DemoItem>
                    <Select value={emptyValue()} onChangeValue={setEmptyValue}>
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="placeholder">
                <DataItem label="value">{emptyValue() ?? 'undefined'}</DataItem>
                <DemoItem>
                    <Select
                        placeholder="Chose wisely"
                        value={emptyValue()}
                        onChangeValue={setEmptyValue}
                    >
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="value">
                <DataItem label="value">{value()}</DataItem>
                <DemoItem title="updated via onChangeValue()">
                    <Select value={value()} onChangeValue={setValue}>
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
                <DemoItem title="xl">
                    <Select value={value()} onChangeValue={setValue} size="xl">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="l">
                    <Select value={value()} onChangeValue={setValue} size="l">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="m">
                    <Select value={value()} onChangeValue={setValue} size="m">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="s">
                    <Select value={value()} onChangeValue={setValue} size="s">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="xs">
                    <Select value={value()} onChangeValue={setValue} size="xs">
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="length">
                <DemoItem title="full">
                    <Select value={value()} onChangeValue={setValue} length="full">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="l">
                    <Select value={value()} onChangeValue={setValue} length="l">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="m">
                    <Select value={value()} onChangeValue={setValue} length="m">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="s">
                    <Select value={value()} onChangeValue={setValue} length="s">
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="3" row>
                    <Select value={value()} onChangeValue={setValue} length={3}>
                        <Options />
                    </Select>
                </DemoItem>
                <DemoItem title="auto">
                    <Select value={value()} onChangeValue={setValue} length="auto">
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="modified">
                <DemoItem>
                    <Select value={value()} modified>
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem>
                    <Select value={value()} disabled>
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="invalid">
                <DemoItem>
                    <Select value={value()} invalid>
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="onChangeValue">
                <DemoItem note="see console log">
                    <Select value={value()} onChangeValue={handleValueChange}>
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem note="Should override text color">
                    <Select value={value()} classList={staticClassList(styles, 'override')}>
                        <Options />
                    </Select>
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
