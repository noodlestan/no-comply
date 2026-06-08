import type { MenuItemRoleName } from '../../role';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaMenuItemProps = AriaLabelledProps & {
	role?: MenuItemRoleName;
};

export type AriaMenuItemAPI = Omit<AriaLabelledAPI, '$root'> & {
	$root: AriaLabelledAPI['$root'] & {
		role: MenuItemRoleName;
	};
};
