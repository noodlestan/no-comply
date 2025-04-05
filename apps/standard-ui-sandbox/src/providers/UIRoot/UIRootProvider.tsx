import {
    type ContextId,
    ContextProvider,
    ContextRootProvider,
    ContextValuesProvider,
    createContextDataEffect,
    createContextNode,
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
} from '@noodlestan/context-ui';
import {
    STANDARD_UI_DATA_ATTRIBUTE_PREFIX,
    STANDARD_UI_SETTINGS,
    STANDARD_UI_SETTINGS_GROUPS,
    ThemeStandard,
} from '@noodlestan/standard-ui';
import { type ParentComponent } from 'solid-js';

type UIRootProviderProps = {
    defaultCtxId: ContextId;
};

const prefix = STANDARD_UI_DATA_ATTRIBUTE_PREFIX;

const StageSurface: ParentComponent = props => {
    const contexts = () => {
        const surface = ctx(node => createSurfaceContext('stage', node));
        return [surface];
    };
    const surface = createContextNode(contexts);

    createContextDataEffect(surface.node, prefix, document.body);

    return <ContextProvider value={surface}>{props.children}</ContextProvider>;
};

export const UIRootProvider: ParentComponent<UIRootProviderProps> = props => {
    const { colorScheme } = useSystemContext();

    const { addSettings, addGroups } = useSettings();

    // const Theme = getSettingSafely()

    const contexts = () => {
        const cs = ctxMemo(node => createModeContext(colorScheme(), node));
        const theme = ctx(node => createThemeContext('standard', node));
        const focus = ctx(node => createFocusContext(undefined, node));
        return [cs, theme, focus];
    };
    const root = createContextRoot(contexts, { id: props.defaultCtxId ?? 'UIRootProvider' });

    addSettings(STANDARD_UI_SETTINGS);
    addGroups(STANDARD_UI_SETTINGS_GROUPS);

    createContextDataEffect(root.node, prefix, document.documentElement);
    createContextVarsEffect(root.node, document.documentElement);

    return (
        <ContextValuesProvider>
            <ThemeStandard />
            <ContextRootProvider value={root}>
                <StageSurface>{props.children}</StageSurface>
            </ContextRootProvider>
        </ContextValuesProvider>
    );
};
