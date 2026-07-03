import type { CodeLayoutContextValue } from '@purrtrait/code-renderer';

export type CodeLayoutWithGenericParamsContextValue = CodeLayoutContextValue & {
	genericParams: Set<string>;
};
