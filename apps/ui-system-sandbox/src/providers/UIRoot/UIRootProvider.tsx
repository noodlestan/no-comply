import {
    CONTEXT_UI_BASE_THEME_DATA_ATTRIBUTE_PREFIX,
    CONTEXT_UI_BASE_THEME_SETTINGS,
    CONTEXT_UI_BASE_THEME_SETTINGS_GROUPS,
    type ContextId,
    type ContextOwnerAPI,
    ContextProvider,
    ContextRootProvider,
    ContextValuesProvider,
    ThemeBase,
    createContextDataEffect,
    createContextRoot,
    createContextVarsEffect,
    createFocusContext,
    createModeContext,
    createSurfaceContext,
    createThemeContext,
    ctx,
    ctxMemo,
    useSettings,
    useSystemContext,
} from '@noodlestan/ui-system';
import { type Component, type JSX, type ParentComponent } from 'solid-js';

type ThemeEffectsProps = {
    root: ContextOwnerAPI;
};
type UIRootProviderProps = {
    defaultCtxId: ContextId;
    children?: JSX.Element;
};

export const ThemeEffects: ParentComponent<ThemeEffectsProps> = props => {
    // eslint-disable-next-line solid/reactivity
    const root = props.root;

    const surfaceContexts = () => {
        const surface = ctx(node => createSurfaceContext('stage', node));
        return [surface];
    };
    const surface = root.createChildNode(surfaceContexts);

    const prefix = CONTEXT_UI_BASE_THEME_DATA_ATTRIBUTE_PREFIX;

    createContextDataEffect(root.node, prefix, document.documentElement);
    createContextVarsEffect(root.node, document.documentElement);
    createContextDataEffect(surface.node, prefix, document.body);

    return <ContextProvider value={surface}>{props.children}</ContextProvider>;
};

export const UIRootProvider: Component<UIRootProviderProps> = props => {
    const { colorScheme } = useSystemContext();

    const { addSettings, addGroups } = useSettings();

    // const Theme = getSettingSafely()

    const contexts = () => {
        const cs = ctxMemo(node => createModeContext(colorScheme(), node));
        const theme = ctx(node => createThemeContext('base', node));
        const focus = ctx(node => createFocusContext(undefined, node));
        return [cs, theme, focus];
    };
    const root = createContextRoot(contexts, { id: props.defaultCtxId || 'UIRootProvider' });

    addSettings(CONTEXT_UI_BASE_THEME_SETTINGS);
    addGroups(CONTEXT_UI_BASE_THEME_SETTINGS_GROUPS);

    return (
        <ContextValuesProvider>
            <ThemeBase />
            <ContextRootProvider value={root}>
                <ThemeEffects root={root}>{props.children}</ThemeEffects>
            </ContextRootProvider>
        </ContextValuesProvider>
    );
};
