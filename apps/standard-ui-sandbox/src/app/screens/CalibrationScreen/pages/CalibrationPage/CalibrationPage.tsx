import { Display, Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { DemoPage } from '../../../../templates';

export const CalibrationPage: Component = () => {
    return (
        <DemoPage title="Calibration">
            <Flex direction="column" gap="m">
                <Display level={3}>Sandbox pages</Display>
            </Flex>
        </DemoPage>
    );
};
