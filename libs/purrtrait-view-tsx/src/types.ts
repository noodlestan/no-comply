import type { XPressValue, XPressValueJsx } from '@purrtrait/client-tsx';

export type XPressViewExtracted = {
	source: string;
	wrapper: XPressValueJsx;
	target: {
		component: {
			name: string;
		};
		raw: XPressValueJsx;
	};
	props: Record<string, XPressValue>;
};

// Example output:

// {
// 	wrapper: {
// 		type: 'jsx',
// 		serialized: '<><h1>hello</h1><Flex padding="l"><XPressTargetPlaceholder {...props} /></Flex></>',
// 		ast: ...
// 	},
// 	target: {
// 		component: {
// 			name: 'Button',
// 		},
// 		raw: {
// 			type: 'jsx',
// 			serialized: '<Button intent="negative" onClick={() => console.log("!")}><Display>foo</Display></Button>',
// 			ast: ...
// 		}
// 	},
// 	props: {
// 		intent: {
// 			type: 'expression',
// 			serialized: '"negative"',
// 			ast: ...
// 		},
// 		onClick: {
// 			type: 'handler',
// 			serialized: '() => console.log("!")',
// 			ast: ...
// 		},
// 		children: {
// 			type: 'jsx',
// 			serialized: '<><Display>foo</Display></>',
// 			ast: ...
// 		}
// 	}
// }
