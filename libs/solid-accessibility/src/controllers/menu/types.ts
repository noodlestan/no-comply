import type { MenuRoleName } from '../../role';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaMenuProps = AriaLabelledProps & {
	role?: MenuRoleName;
};

export type AriaMenuAPI = Omit<AriaLabelledAPI, '$root'> & {
	$root: AriaLabelledAPI['$root'] & {
		role: MenuRoleName;
	};
};
