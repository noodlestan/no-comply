import type { SurfaceBaseProps } from '@noodlestan/headless-ui';

export type SurfaceProps = SurfaceBaseProps & {
    variant?: SurfaceVariant;
};

export type SurfaceVariant = 'stage' | 'page' | 'card' | 'inverse' | 'message' | 'toast' | 'dialog';

export type SurfaceAPI = {
    surfaceProps: SurfaceBaseProps;
};
