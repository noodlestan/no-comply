import type { TSXElementNode, TSXNode } from '@purrtrait/client-tsx';

export type TSXView = {
	source: string;
	wrapper: TSXElementNode;
	target: {
		component: {
			name: string;
		};
		raw: TSXElementNode;
	};
	props: Record<string, TSXNode>;
};
