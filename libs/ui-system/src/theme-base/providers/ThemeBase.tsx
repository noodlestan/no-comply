import { type Component } from 'solid-js';

import { useContextValuesProducer } from '../../context';
import { CONTEXT_UI_CONTEXTS } from '../private';

import '../styles/index.css';

export const ThemeBase: Component = () => {
    useContextValuesProducer(() => CONTEXT_UI_CONTEXTS);

    return <></>;
};
