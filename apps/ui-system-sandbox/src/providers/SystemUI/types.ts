import { ColorSchemeName } from '@noodlestan/ui-system';
import { Accessor, Setter } from 'solid-js';

export type SystemUIContextAPI = {
    setColorScheme: Setter<ColorSchemeName>;
    colorScheme: Accessor<ColorSchemeName>;
};
