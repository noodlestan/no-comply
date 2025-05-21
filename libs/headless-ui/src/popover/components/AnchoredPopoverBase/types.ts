import type { RenderProp } from '@noodlestan/context-ui-primitives';

import type { AnchoredPopoverAPI } from '../../controllers';

export type AnchoredPopoverBaseTriggerProps = AnchoredPopoverAPI['$trigger'];
export type AnchoredPopoverBaseChildrenProps = AnchoredPopoverAPI['contentProps'];

export type AnchoredPopoverBaseProps = {
    trigger: RenderProp<AnchoredPopoverBaseTriggerProps>;
    children: RenderProp<AnchoredPopoverBaseChildrenProps>;
};
