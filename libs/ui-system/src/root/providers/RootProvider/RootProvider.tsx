import { Component, JSX } from 'solid-js';

import { FocusTrap } from '../../../dialogs';
import { ServiceProvider } from '../../../providers';
import { useBodyClassesEffect } from '../../_private/effects/useBodyClassesEffect';
import { useBodyStylesEffect } from '../../_private/effects/useBodyStylesEffect';
import { ColourSchemeName } from '../../types';
import { ColourSchemeProvider } from '../ColourSchemeProvider';
import { SurfaceProvider } from '../SurfaceProvider';
import { ThemeProvider } from '../ThemeProvider';
import { TokensProvider } from '../TokensProvider';

export type RootProviderProps = {
    colourScheme?: ColourSchemeName;
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
        <ServiceProvider>
            <ColourSchemeProvider>
                <ThemeProvider theme={props.theme} shallow>
                    <SurfaceProvider surface={props.surface} shallow>
                        <TokensProvider>
                            <BodyEffect classList={props.classList} />
                            <FocusTrap show>{props.children}</FocusTrap>
                        </TokensProvider>
                    </SurfaceProvider>
                </ThemeProvider>
            </ColourSchemeProvider>
        </ServiceProvider>
    );
};
