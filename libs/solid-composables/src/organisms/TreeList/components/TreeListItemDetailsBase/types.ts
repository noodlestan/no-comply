import type { TreeListItemDetailsAPI, TreeListItemDetailsProps } from '../../controllers';
import type { TreeListItemDetailsMixinAPI } from '../../mixins';

export type TreeListItemDetailsBaseProps = TreeListItemDetailsProps;

type Controller = TreeListItemDetailsAPI;
type Mixin = TreeListItemDetailsMixinAPI;

export type TreeListItemDetailsBaseAPI = {
    $root: Controller['$root'] & Mixin['$root'];
    focusableProps: Controller['focusableProps'] & Mixin['$focusable'];
    // WIP $layout: Mixin['$layout'];
    $toggle: Mixin['$toggle'];
    expandButtonProps: Controller['expandButtonProps'];
    $contents: Mixin['$contents'];
    itemContentsProps: Controller['itemContentsProps'];
    hasToggle: Controller['hasToggle'];
};
