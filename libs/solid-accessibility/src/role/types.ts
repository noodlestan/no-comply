import type { AriaAttributes } from '../attributes';

export type AriaRoleName = NonNullable<AriaAttributes['role']>;

export type FeedbackRoleName = 'status' | 'alert';

export type PressableRoleName = 'button' | 'menuitem' | 'tab' | 'switch';

export type FormRoleName = 'form' | 'search';

export type MenuRoleName = 'menu' | 'menubar';

export type MenuItemRoleName = 'menuitem' | 'menuitemcheckbox' | 'menuitemradio';

export type LayoutRoleName = 'region' | 'group' | 'toolbar' | 'dialog';

export type VisuallyHiddenRoleName = 'status';

export type SeparatorRoleName = 'separator' | 'presentation';
