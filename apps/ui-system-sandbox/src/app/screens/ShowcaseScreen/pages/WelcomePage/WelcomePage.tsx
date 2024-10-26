import { Component, onCleanup } from 'solid-js';

import './WelcomePage.css';

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
