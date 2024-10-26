import { DataItem } from '@noodlestan/ui-system';
import { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import './DataItemPage.css';

const DATA_VALUE = 'The quick brown box jumped over the lazy old dog';

export const DataItemPage: Component = () => {
    const handleClick = () => console.info('Click');

    const COMPONENT = findComponent('DataItem');

    return (
        <DemoPage classList={{ DataItemPage: true }} title="DataItem">
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <DataItem>{DATA_VALUE}</DataItem>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="label">
                <DemoItem>
                    <DataItem label="Lorem ipsum">{DATA_VALUE}</DataItem>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="l">
                    <DataItem label="Lorem ipsum" size="l">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
                <DemoItem title="m">
                    <DataItem label="Lorem ipsum" size="m">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
                <DemoItem title="s">
                    <DataItem label="Lorem ipsum" size="s">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem title="full">
                    <DataItem label="Lorem ipsum" length="full">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
                <DemoItem title="l">
                    <DataItem label="Lorem ipsum" length="l">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
                <DemoItem title="m">
                    <DataItem label="Lorem ipsum" length="m">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
                <DemoItem title="s">
                    <DataItem label="Lorem ipsum" length="s">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
                <DemoItem title="auto">
                    <DataItem label="Lorem ipsum" length="auto">
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onClick">
                <DemoItem note="see console log">
                    <DataItem label="Lorem ipsum" onClick={handleClick}>
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <DataItem label="Lorem ipsum" classList={{ override: true }}>
                        {DATA_VALUE}
                    </DataItem>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
