import type { ComponentEntityData } from '@no-comply/meta-entities';
import type { ObjectLiteralTypeMember } from '@purrception/lang-ts';

export interface ComponentPropProp {
	name: string;
	node: ObjectLiteralTypeMember;
}

export interface ComponentPropsRowProps {
	component: ComponentEntityData;
	prop: ComponentPropProp;
}
