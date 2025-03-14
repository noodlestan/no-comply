import { DataValue } from '@noodlestan/ui-system';
import { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import './DataValuePage.css';

const DATA_VALUE = 'The quick brown box jumped over the lazy old dog';

export const DataValuePage: Component = () => {
    const handleClick = () => console.info('Click');

    const COMPONENT = findComponent('DataValue');

    return (
        <DemoPage classList={{ DataValuePage: true }} title="DataValue">
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <DataValue>{DATA_VALUE}</DataValue>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="value">
                <DemoItem note="value is an alias for children">
                    <DataValue value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="l">
                    <DataValue size="l" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="m">
                    <DataValue size="m" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="s">
                    <DataValue size="s" value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem title="full">
                    <DataValue length="full" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="l">
                    <DataValue length="l" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="m">
                    <DataValue length="m" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="s">
                    <DataValue length="s" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="auto">
                    <DataValue length="auto" value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onClick">
                <DemoItem note="See console log">
                    <DataValue onClick={handleClick} value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <DataValue classList={{ override: true }} value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
