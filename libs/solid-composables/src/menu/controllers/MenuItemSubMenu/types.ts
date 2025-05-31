import type { AnchoredPopoverAPI } from '../../../popover';
import type { BaseMenuItemAPI, BaseMenuItemProps } from '../../private';

export type MenuItemSubMenuProps = BaseMenuItemProps & {
    id?: string;
    menuId?: string;
};

export type MenuItemSubMenuAPI = Omit<BaseMenuItemAPI, '$root'> &
    Pick<AnchoredPopoverAPI, 'context' | 'contextValue'> & {
        $root: BaseMenuItemAPI['$root'] & AnchoredPopoverAPI['$trigger'];
        $popover: AnchoredPopoverAPI['$root'];
        _subMenu: {
            id: string;
            ['aria-labelledby']: string;
        };
    };
