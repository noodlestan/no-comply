import type { MenuItemRoleName } from '../../role';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export interface AriaMenuItemProps extends AriaLabelledProps {
	role?: MenuItemRoleName;
}

export interface AriaMenuItemAPI extends Omit<AriaLabelledAPI, '$root'> {
	$root: AriaLabelledAPI['$root'] & {
		role: MenuItemRoleName;
	};
}
