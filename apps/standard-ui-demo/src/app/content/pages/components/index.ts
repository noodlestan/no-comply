// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `import ${f.path.replace(/\/index$/, '').replace(/\.\//, '')}Page from '${f.path.replace(/\/index$/, '')}';`)
import type { ComponentEntityData } from '@no-comply/meta-entities';

import type { ComponentName } from '../../../../data';
import type { DocsComponentPageData } from '../../types';

import AnchoredPopoverPage from './AnchoredPopover';
import ButtonPage from './Button';
import CalloutPage from './Callout';
import CheckboxPage from './Checkbox';
import CloseButtonPage from './CloseButton';
import DataItemPage from './DataItem';
import DataValuePage from './DataValue';
import DisplayPage from './Display';
import DividerPage from './Divider';
import ExpandButtonPage from './ExpandButton';
import FlexPage from './Flex';
import IconPage from './Icon';
import IconButtonPage from './IconButton';
import LabelPage from './Label';
import LayoutPage from './Layout';
import LinkPage from './Link';
import MenuPage from './Menu';
import MenuItemActionPage from './MenuItemAction';
import NavLinkPage from './NavLink';
import NumberInputPage from './NumberInput';
import PopoverPage from './Popover';
import RangeInputPage from './RangeInput';
import SelectPage from './Select';
import SurfacePage from './Surface';
import TextPage from './Text';
import TextInputPage from './TextInput';
// @endindex

export const components: Partial<
	Record<ComponentName, (c: ComponentEntityData) => DocsComponentPageData>
> = {
	// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `${f.path.replace(/\/index$/, '').replace(/\.\//, '')}: ${f.path.replace(/\/index$/, '').replace(/\.\//, '')}Page,`)
	AnchoredPopover: AnchoredPopoverPage,
	Button: ButtonPage,
	Callout: CalloutPage,
	Checkbox: CheckboxPage,
	CloseButton: CloseButtonPage,
	DataItem: DataItemPage,
	DataValue: DataValuePage,
	Display: DisplayPage,
	Divider: DividerPage,
	ExpandButton: ExpandButtonPage,
	Flex: FlexPage,
	Icon: IconPage,
	IconButton: IconButtonPage,
	Label: LabelPage,
	Layout: LayoutPage,
	Link: LinkPage,
	Menu: MenuPage,
	MenuItemAction: MenuItemActionPage,
	NavLink: NavLinkPage,
	NumberInput: NumberInputPage,
	Popover: PopoverPage,
	RangeInput: RangeInputPage,
	Select: SelectPage,
	Surface: SurfacePage,
	Text: TextPage,
	TextInput: TextInputPage,
	// @endindex
};
