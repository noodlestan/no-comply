import type { CodeLayoutLanguage } from '@purrtrait/code-layout';

import { LanguageName, PurrceptionLanguageId } from '../constants';

import { layoutCode } from './private';

export const tsCodeLayout: CodeLayoutLanguage = {
	lang: PurrceptionLanguageId,
	name: LanguageName,
	layout: layoutCode,
};
