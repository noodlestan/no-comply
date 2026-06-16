import type { TSXElementNode, TSXNode } from '@purrtrait/client-tsx';

export type TSXViewOptions = {
	placeholderName: string;
	targetAttributeName: string;
	placeholderKeyProp: string;
	placeholderComponentProp: string;
	placeholderPropsProp: string;
	placeholderPropsVar: string;
};

export type TSXViewTarget = {
	component: {
		name: string;
	};
	raw: TSXElementNode;
	props: Record<string, TSXNode>;
};

export type TSXView = {
	source: string;
	wrapper: TSXElementNode;
	targets: {
		[key: string]: TSXViewTarget;
	};
};
