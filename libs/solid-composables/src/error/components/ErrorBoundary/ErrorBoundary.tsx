import { ErrorBoundary as Boundary, type ParentComponent } from 'solid-js';

import { ErrorBoundaryHandler } from './private';
import type { ErrorBoundaryFallbackProps } from './types';

export type ErrorBoundaryProps = {
    fallback: ParentComponent<ErrorBoundaryFallbackProps>;
    onError?: (err: Error) => void;
    reset?: () => void;
};

export const ErrorBoundary: ParentComponent<ErrorBoundaryProps> = props => {
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
