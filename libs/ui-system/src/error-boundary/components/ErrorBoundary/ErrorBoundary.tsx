import { ErrorBoundary as Boundary, type Component, type JSX } from 'solid-js';

import { ErrorBoundaryHandler } from './private';
import type { ErrorBoundaryFallbackProps } from './types';

export type ErrorBoundaryProps = {
    fallback: Component<ErrorBoundaryFallbackProps>;
    onError?: (err: Error) => void;
    reset?: () => void;
    children?: JSX.Element;
};

// TODO problem solidjs error boundary renders (at least some) children again
// before rendering the fallback
// particularly errors in <ScenarioStage> or <DriveStage> cause this components to render again
// before their onCleanup() was declared, leading to a new Error, obscuring the first, sad face

export const ErrorBoundary: Component<ErrorBoundaryProps> = props => {
    return (
        <Boundary
            fallback={(err, reset) => (
                <ErrorBoundaryHandler fallback={props.fallback} error={err} reset={reset} />
            )}
        >
            <>{props.children}</>
        </Boundary>
    );
};
