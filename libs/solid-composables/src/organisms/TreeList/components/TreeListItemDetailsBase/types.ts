import type { TreeListItemDetailsAPI, TreeListItemDetailsProps } from '../../controllers';
import type { TreeListItemDetailsMixinAPI } from '../../mixins';

export type TreeListItemDetailsBaseProps = TreeListItemDetailsProps;

type Controller = TreeListItemDetailsAPI;
type Mixin = TreeListItemDetailsMixinAPI;

export type TreeListItemDetailsBaseAPI = Omit<Controller, '$root' | '_focusable'> &
    Omit<Mixin, '$root' | '$focusable'> & {
        $root: Controller['$root'] & Mixin['$root'];
        _focusable: Controller['_focusable'] & Mixin['$focusable'];
        hasToggle: Controller['hasToggle'];
    };
