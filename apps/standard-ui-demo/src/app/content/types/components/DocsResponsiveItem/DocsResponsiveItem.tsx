import { type ParentComponent } from 'solid-js';

import { ResponsiveRuler, type ResponsiveRulerProps } from '../../../components';
import { DocsItem, type DocsItemProps } from '../DocsItem';

export type DocsResponsiveItemProps = Omit<DocsItemProps, 'slot'> & {
	bps: string[];
};

export const DocsResponsiveItem: ParentComponent<DocsResponsiveItemProps> = props => {
	return (
		<DocsItem
			{...props}
			slot={() => (
				<ResponsiveRuler breakpoints={props.bps as ResponsiveRulerProps['breakpoints']} />
			)}
		/>
	);
};
