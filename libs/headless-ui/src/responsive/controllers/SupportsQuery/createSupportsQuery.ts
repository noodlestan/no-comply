import type { SupportsQueryAPI, SupportsQueryProps } from './types';

export const createSupportsQuery = (props: SupportsQueryProps): SupportsQueryAPI => {
    return {
        isSupported: () => CSS.supports(props.query),
    };
};
