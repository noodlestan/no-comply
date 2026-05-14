import type { InterfaceTypeNode, TypeDeclarationData } from '@purrception/types-ts';
import { createCodeLayoutContext } from '@purrtrait/code-layout';
import { tsCodeLayout } from '@purrtrait/code-ts';
import { CodeLayoutProvider, TypeBlock } from '@purrtrait/solid-code';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { type ComponentMetadata, type ComponentName } from '../../../../../data';
import {
	ComponentMeta,
	type DocsSectionData,
	RenderDocsSections,
	components,
} from '../../../../content';
import { BasePage, NotFoundPage } from '../../../../templates';

const messData: TypeDeclarationData<InterfaceTypeNode> = {
	name: 'AriaGroupAPI',
	kind: 'interface',
	heritage: [],
	members: {
		$literal: { type: { kind: 'literal', value: 1 }, optional: false },
		$longstring: {
			type: {
				kind: 'literal',
				value:
					'This is a very long string that should be wrapped in the code block to demonstrate the formatting capabilities of the layout system.',
			},
		},
		$union: {
			type: {
				kind: 'union',
				entries: [
					{ kind: 'literal', value: 'a' },
					{ kind: 'literal', value: 'b' },
					{ kind: 'literal', value: 'c' },
					{ kind: 'literal', value: 'c' },
					{ kind: 'literal', value: 'c' },
					{ kind: 'literal', value: 'c' },
					{ kind: 'literal', value: 'c' },
					{ kind: 'literal', value: 'c' },
					{ kind: 'literal', value: 'c' },
					{ kind: 'literal', value: 'c' },
				],
			},
			optional: false,
		},
		// $intersection: {
		// 	type: {
		// 		kind: 'intersection',
		// 		entries: [
		// 			{ kind: 'object', members: { a: { type: 'string', optional: false } } },
		// 			{ kind: 'object', members: { b: { type: 'number', optional: false } } },
		// 			{
		// 				kind: 'object',
		// 				members: {
		// 					c: { type: 'number', optional: false },
		// 					x: { type: 'number', optional: false },
		// 				},
		// 			},
		// 			{ kind: 'object', members: { d: { type: 'number', optional: false } } },
		// 		],
		// 	},
		// 	optional: false,
		// },
		// $array: { type: { kind: 'array', elements: 'string' }, optional: false },
		// $tuple: { type: { kind: 'tuple', elements: ['number', 'string', 'boolean'] }, optional: false },
		// $namedTuple: {
		// 	type: {
		// 		kind: 'tuple',
		// 		elements: [
		// 			{ name: 'foo', optional: false, type: 'number' },
		// 			{ name: 'bar', optional: true, type: 'string' },
		// 		],
		// 	},
		// 	optional: false,
		// },
		// $template: {
		// 	type: { kind: 'template-literal', head: 'foo-', spans: [{ type: 'string', text: '-bar' }] },
		// 	optional: false,
		// },
		// $operator: {
		// 	type: {
		// 		kind: 'operator',
		// 		operator: 'readonly',
		// 		operand: { kind: 'array', elements: 'string' },
		// 	},
		// 	optional: false,
		// },
		// $mapped: {
		// 	type: {
		// 		kind: 'mapped',
		// 		param: 'K',
		// 		constraint: 'keyof T',
		// 		valueType: 'T[K]',
		// 		optional: true,
		// 		readonly: false,
		// 	},
		// 	optional: false,
		// },
		// $conditional: {
		// 	type: {
		// 		kind: 'conditional',
		// 		checkType: 'T',
		// 		extendsType: 'string',
		// 		trueType: { kind: 'literal', value: 'yes' },
		// 		falseType: { kind: 'literal', value: 'no' },
		// 	},
		// 	optional: false,
		// },
		// $infer: {
		// 	type: {
		// 		kind: 'conditional',
		// 		checkType: 'T',
		// 		extendsType: { kind: 'infer', name: 'U' },
		// 		trueType: 'U',
		// 		falseType: 'never',
		// 	},
		// 	optional: false,
		// },
		// $omit: {
		// 	type: {
		// 		kind: 'omit',
		// 		source: {
		// 			kind: 'object',
		// 			members: {
		// 				a: { type: 'number', optional: false },
		// 				b: { type: 'string', optional: false },
		// 			},
		// 		},
		// 		members: { kind: 'literal', value: 'b' },
		// 	},
		// 	optional: false,
		// },
		// $pick: {
		// 	type: {
		// 		kind: 'pick',
		// 		source: {
		// 			kind: 'object',
		// 			members: {
		// 				a: { type: 'number', optional: false },
		// 				b: { type: 'string', optional: false },
		// 			},
		// 		},
		// 		members: { kind: 'literal', value: 'b' },
		// 	},
		// 	optional: false,
		// },
	},
};

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const component = () => params['component'] as ComponentName;
	const page = () => components[component()];

	const codeLayoutContext = createCodeLayoutContext({ langs: [tsCodeLayout] });

	return (
		<>
			<Show when={!page()}>
				<NotFoundPage undertitle={`Component ${component()} does not exist.`}>
					Search for components
				</NotFoundPage>
			</Show>
			<Show when={page()}>
				<BasePage
					title={page()?.title}
					undertitle={<ComponentMeta component={page()?.component as ComponentMetadata} />}
					data-component-page
				>
					<CodeLayoutProvider context={codeLayoutContext}>
						<TypeBlock lang="ts" node={messData} />
					</CodeLayoutProvider>
					<RenderDocsSections sections={page()?.items as DocsSectionData[]} />
				</BasePage>
			</Show>
		</>
	);
};
