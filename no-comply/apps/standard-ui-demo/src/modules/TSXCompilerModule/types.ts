export type TSXCompilerModule = {
	createCompiler: () => CompilerAPI;
};

export type DebugOption = boolean | string | undefined;

export type CompilerScope = Record<string, unknown>;

export type Compiler = {
	compile: (code: string) => string;
	execute: (code: string, scope: CompilerScope) => unknown;
};

export type CompilerHelpers = {
	evaluateComponent: <T>(body: string | undefined, jsx: string, scope: CompilerScope) => T;
	evaluateExpression: <T>(expression: string, scope: CompilerScope) => T;
	evaluateHandler: <T>(handler: string, debug: DebugOption, scope: CompilerScope) => T;
};

export type CompilerAPI = Compiler & CompilerHelpers;
