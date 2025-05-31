import type { RenderProp } from '@no-comply/solid-primitives';

import type { AnchoredPopoverAPI, AnchoredPopoverProps } from '../../controllers';

export type AnchoredPopoverBaseTriggerProps = AnchoredPopoverAPI['$trigger'];
export type AnchoredPopoverBaseChildrenProps = AnchoredPopoverAPI['$content'];

export type AnchoredPopoverBaseProps = AnchoredPopoverProps & {
    trigger: RenderProp<AnchoredPopoverBaseTriggerProps>;
    children: RenderProp<AnchoredPopoverBaseChildrenProps>;
};

export type AnchoredPopoverBaseAPI = AnchoredPopoverAPI;
