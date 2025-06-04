import type { RenderProp } from '@no-comply/solid-primitives';

import type { AnchoredPopoverAPI, AnchoredPopoverProps } from '../../controllers';

export type AnchoredPopoverBaseProps = AnchoredPopoverProps & {
    trigger: RenderProp<AnchoredPopoverAPI['$trigger']>;
    children: RenderProp<AnchoredPopoverAPI['$content']>;
};

export type AnchoredPopoverBaseAPI = AnchoredPopoverAPI;
