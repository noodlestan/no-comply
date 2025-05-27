import { Display } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { PageContentsLayout } from '../../../../layouts';
import { $ID_SCREEN_TITLE } from '../../../../templates';

export const WelcomePage: Component = () => {
    return (
        <PageContentsLayout>
            <Display level={1} id={$ID_SCREEN_TITLE}>
                Welcome!
            </Display>
        </PageContentsLayout>
    );
};
