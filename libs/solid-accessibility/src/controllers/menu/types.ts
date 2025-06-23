import type { MenuRoleName } from '../../role';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export interface AriaMenuProps extends AriaLabelledProps {
	role?: MenuRoleName;
}

export interface AriaMenuAPI extends Omit<AriaLabelledAPI, '$root'> {
	$root: AriaLabelledAPI['$root'] & {
		role: MenuRoleName;
	};
}
