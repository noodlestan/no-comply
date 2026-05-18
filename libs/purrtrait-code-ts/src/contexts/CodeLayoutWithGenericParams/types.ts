import type { CodeLayoutContextValue } from '@purrtrait/code-layout';

export type CodeLayoutWithGenericParamsContextValue = CodeLayoutContextValue & {
	genericParams: Set<string>;
};
