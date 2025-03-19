import { Component, JSX } from 'solid-js';

import { useBodyClassesEffect, useBodyStylesEffect } from '../../private';
import { ColorSchemeName } from '../../types';
import { ColorSchemeProvider } from '../ColorSchemeProvider';
import { SurfaceProvider } from '../SurfaceProvider';
import { ThemeProvider } from '../ThemeProvider';
import { TokensProvider } from '../TokensProvider';

export type RootProviderProps = {
    colorScheme?: ColorSchemeName;
    theme: string;
    surface: string;
    children: JSX.Element;
    classList?: () => { [key: string]: boolean };
};

type BodyClassNameEffectProps = {
    classList?: () => { [key: string]: boolean };
};

const BodyEffect: Component<BodyClassNameEffectProps> = props => {
    useBodyClassesEffect(() => props.classList?.() || {});
    useBodyStylesEffect();
    return <></>;
};

export const RootProvider: Component<RootProviderProps> = props => {
    return (
        <ColorSchemeProvider>
            <ThemeProvider theme={props.theme} shallow>
                <SurfaceProvider surface={props.surface} shallow>
                    <TokensProvider>
                        <BodyEffect classList={props.classList} />
                        {props.children}
                    </TokensProvider>
                </SurfaceProvider>
            </ThemeProvider>
        </ColorSchemeProvider>
    );
};
