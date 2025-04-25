import {
    type ContextId,
    ContextRootProvider,
    ModeContextProvider,
    SurfaceContextProvider,
    ThemeContextProvider,
    createContextDataEffect,
    createContextRoot,
    createContextVarsEffect,
    createModeContext,
    createSurfaceContext,
    createThemeContext,
    useMode,
    useSettings,
    useSurface,
    useSystemContext,
    useTheme,
} from '@noodlestan/context-ui';
import {
    STANDARD_UI_DATA_ATTRIBUTE_PREFIX,
    STANDARD_UI_SETTINGS,
    STANDARD_UI_SETTINGS_GROUPS,
    ThemeStandard,
} from '@noodlestan/standard-ui';
import { type Component, type ParentComponent } from 'solid-js';

type UIRootProviderProps = {
    defaultCtxId: ContextId;
};

const prefix = STANDARD_UI_DATA_ATTRIBUTE_PREFIX;

const ContextEffects: Component = () => {
    const theme = useTheme();
    const mode = useMode();
    const surface = useSurface();

    createContextDataEffect(() => [theme, mode], prefix, document.documentElement);
    createContextVarsEffect(() => [theme, mode], document.documentElement);

    createContextDataEffect(() => [surface], prefix, document.body);
    createContextVarsEffect(() => [surface], document.body);

    return <></>;
};

export const UIRootProvider: ParentComponent<UIRootProviderProps> = props => {
    const { colorScheme } = useSystemContext();

    const { addSettings, addGroups } = useSettings();

    // const theme = getSettingSafely()
    const theme = () => 'standard';

    const modeContext = createModeContext(colorScheme);
    const themeContext = createThemeContext(theme);
    const surfaceContext = createSurfaceContext(() => 'stage');

    const root = createContextRoot();

    addSettings(STANDARD_UI_SETTINGS);
    addGroups(STANDARD_UI_SETTINGS_GROUPS);

    return (
        <>
            <ThemeStandard />
            <ContextRootProvider root={root}>
                <ModeContextProvider context={modeContext}>
                    <ThemeContextProvider context={themeContext}>
                        <SurfaceContextProvider context={surfaceContext}>
                            <ContextEffects />
                            {props.children}
                        </SurfaceContextProvider>
                    </ThemeContextProvider>
                </ModeContextProvider>
            </ContextRootProvider>
        </>
    );
};
