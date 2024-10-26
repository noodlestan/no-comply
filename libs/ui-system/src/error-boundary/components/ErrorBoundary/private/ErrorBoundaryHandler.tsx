import { Component, createEffect } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ErrorBoundaryFallbackProps } from '../types';

export type ErrorBoundaryHandlerProps = {
    fallback: Component<ErrorBoundaryFallbackProps>;
    onError?: (err: Error) => void;
    error: Error;
    reset: () => void;
};

export const ErrorBoundaryHandler: Component<ErrorBoundaryHandlerProps> = props => {
    createEffect(() => {
        console.error(props.error);
        props.onError && props.onError(props.error);
    });
    return <Dynamic component={props.fallback} error={props.error} reset={props.reset} />;
};
