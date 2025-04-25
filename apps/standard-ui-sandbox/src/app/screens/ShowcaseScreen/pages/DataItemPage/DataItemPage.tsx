import { staticClassList } from '@noodlestan/context-ui-primitives';
import { DataItem } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './DataItemPage.module.css';

const DATA_VALUE = 'The quick brown box jumped over the lazy old dog';

export const DataItemPage: Component = () => {
    const handleClick = () => console.info('Click');

    const COMPONENT = findComponent('DataItem');

    return (
        <DemoPage title="DataItem" classList={staticClassList(styles, 'DataItemPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <DataItem>{DATA_VALUE}</DataItem>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="value">
                <DemoItem note="value is an alias for children">
                    <DataItem value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="label">
                <DemoItem>
                    <DataItem label="Lorem ipsum" value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="l">
                    <DataItem label="Lorem ipsum" size="l" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="m">
                    <DataItem label="Lorem ipsum" size="m" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="s">
                    <DataItem label="Lorem ipsum" size="s" value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem title="full">
                    <DataItem label="Lorem ipsum" length="full" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="l">
                    <DataItem label="Lorem ipsum" length="l" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="m">
                    <DataItem label="Lorem ipsum" length="m" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="s">
                    <DataItem label="Lorem ipsum" length="s" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="auto">
                    <DataItem label="Lorem ipsum" length="auto" value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onClick">
                <DemoItem note="see console log">
                    <DataItem label="Lorem ipsum" onClick={handleClick} value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <DataItem
                        label="Lorem ipsum"
                        classList={{ override: true }}
                        value={DATA_VALUE}
                    />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
