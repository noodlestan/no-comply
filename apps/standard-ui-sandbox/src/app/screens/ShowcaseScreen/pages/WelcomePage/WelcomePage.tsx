import { Display } from '@noodlestan/standard-ui';
import { type Component, onCleanup } from 'solid-js';

import { PageContentsLayout } from '../../../../layouts';
import { $ID_SCREEN_TITLE } from '../../../../templates';

export const WelcomePage: Component = () => {
    onCleanup(() => {});

    return (
        <PageContentsLayout>
            <Display level={2} id={$ID_SCREEN_TITLE}>
                Welcome
            </Display>
        </PageContentsLayout>
    );
};
