import { ColorSchemeName } from '@noodlestan/ui-system';
import { Accessor, Setter } from 'solid-js';

export type SystemUIContextState = {
    setColorScheme: Setter<ColorSchemeName>;
    colorScheme: Accessor<ColorSchemeName>;
};
