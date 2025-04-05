import { useContextValuesProducer } from '@noodlestan/context-ui';
import { type Component } from 'solid-js';

import { STANDARD_UI_CONTEXTS } from '../private';

import '../styles/index.css';

export const ThemeStandard: Component = () => {
    useContextValuesProducer(() => STANDARD_UI_CONTEXTS);

    return <></>;
};
