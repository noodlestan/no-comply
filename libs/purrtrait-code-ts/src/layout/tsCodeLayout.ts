import type { CodeLayoutLanguage } from '@purrtrait/code-layout';

import { layoutDataNode } from './private';

export const tsCodeLayout: CodeLayoutLanguage = {
	lang: 'ts',
	layout: layoutDataNode,
};
