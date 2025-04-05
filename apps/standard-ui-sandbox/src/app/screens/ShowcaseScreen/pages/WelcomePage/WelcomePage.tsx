import { type Component, onCleanup } from 'solid-js';

import { ExampleLarge } from '../../../../examples';
import { PageContentsLayout } from '../../../../layouts';

export const WelcomePage: Component = () => {
    onCleanup(() => {});

    return (
        <PageContentsLayout variant="page">
            <ExampleLarge />
        </PageContentsLayout>
    );
};
