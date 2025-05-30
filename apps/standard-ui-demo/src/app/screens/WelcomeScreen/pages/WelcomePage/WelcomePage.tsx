import { Display } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { $ID_SCREEN_TITLE } from '../../../../templates';
import { PageContentsLayout } from '../../../../templates/layouts';

export const WelcomePage: Component = () => {
    return (
        <PageContentsLayout>
            <Display level={1} id={$ID_SCREEN_TITLE}>
                Welcome!
            </Display>
        </PageContentsLayout>
    );
};
