import { staticClassList } from '@no-comply/solid-primitives';
import { DataValue } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './DataValueDemoPage.module.scss';

const DATA_VALUE = 'The quick brown box jumped over the lazy old dog';

export const DataValueDemoPage: Component = () => {
    const handleClick = () => console.info('Click');

    const COMPONENT = findComponent('DataValue');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'DataValueDemoPage')}
        >
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
                    <DataValue size="large" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="m">
                    <DataValue size="medium" value={DATA_VALUE} />
                </DemoItem>
                <DemoItem title="s">
                    <DataValue size="small" value={DATA_VALUE} />
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
                    <DataValue classList={staticClassList(styles, 'override')} value={DATA_VALUE} />
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
