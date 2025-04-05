import type { RawDataAttributes } from '@noodlestan/context-ui-types';

export type ContextDataAPI<T extends string = string> = {
    contextData: () => RawDataAttributes<T>;
};
