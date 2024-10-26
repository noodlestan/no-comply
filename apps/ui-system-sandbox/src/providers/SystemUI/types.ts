import { ColourSchemeName } from '@noodlestan/ui-system';
import { Accessor, Setter } from 'solid-js';

export type SystemUIContextState = {
    setColourScheme: Setter<ColourSchemeName>;
    colourScheme: Accessor<ColourSchemeName>;
};
