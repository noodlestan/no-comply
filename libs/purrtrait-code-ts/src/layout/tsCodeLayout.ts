import type { CodeLayoutLanguage } from '@purrtrait/code-layout';

import { layoutDeclaration } from './private';

export const tsCodeLayout: CodeLayoutLanguage = {
	lang: 'ts',
	layout: layoutDeclaration,
};
