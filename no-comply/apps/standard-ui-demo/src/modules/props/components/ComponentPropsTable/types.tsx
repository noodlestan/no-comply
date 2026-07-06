import type { NoComplyEntityData } from '@no-comply/meta';
import type { ObjectLiteralTypeMember } from '@purrception/lang-ts';

export type ComponentProp = {
	name: string;
	node: ObjectLiteralTypeMember;
};

export type ComponentPropsGroup = {
	ref: string;
	entity?: NoComplyEntityData;
	props: ComponentProp[];
};
