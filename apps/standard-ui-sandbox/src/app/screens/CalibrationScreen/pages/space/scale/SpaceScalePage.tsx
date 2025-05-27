import { Display, Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { DemoPage } from '../../../../../templates';
import { ShowSpace } from '../../../components';

export const SpaceScalePage: Component = () => {
    return (
        <DemoPage title="Space">
            <Display level={3}>Size</Display>

            <Flex direction="column" gap="l">
                <ShowSpace size="2xs" />
                <ShowSpace size="xs" />
                <ShowSpace size="s" />
                <ShowSpace size="m" />
                <ShowSpace size="l" />
                <ShowSpace size="xl" />
            </Flex>
        </DemoPage>
    );
};
