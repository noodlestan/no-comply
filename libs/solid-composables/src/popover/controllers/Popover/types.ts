import type { FocusOutAPI } from '../../../focus';
import type { PopoverContext, PopoverContextOptions, PopoverContextValue } from '../../contexts';

export type PopoverProps = PopoverContextOptions & {
	onShow?: () => void;
	onHide?: () => void;
};

export type PopoverAPI = {
	$root: FocusOutAPI['$root'] & {
		id: string;
		popover: 'auto';
		onToggle: () => void;
		ref: PopoverContext['setPopoverRef'];
	};
	context: PopoverContext;
	contextValue: PopoverContextValue;
};
