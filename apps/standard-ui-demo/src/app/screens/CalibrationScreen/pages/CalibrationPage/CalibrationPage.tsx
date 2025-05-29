import { Display, Flex } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { DemoPage } from '../../../../templates';

export const CalibrationPage: Component = () => {
    return (
        <DemoPage
            title="Calibration"
            undertitle={() => (
                <Display tag="p" variant="m">
                    Sandbox pages
                </Display>
            )}
        >
            <Flex direction="column" gap="m">
                ...
            </Flex>
        </DemoPage>
    );
};
