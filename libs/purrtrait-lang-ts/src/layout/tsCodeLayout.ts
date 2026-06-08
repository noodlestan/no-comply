import type { CodeLayoutLanguage } from '@purrtrait/code-layout';

import { layoutCode } from './private';

export const tsCodeLayout: CodeLayoutLanguage = {
	lang: 'ts',
	layout: layoutCode,
};
