import type {
	CodeLayoutContextOptions,
	CodeLayoutContextValue,
	CodeLayoutToken,
} from '@purrtrait/code-renderer';
import type { Component } from 'solid-js';

export type CodeLinkComponent = Component<{
	token: CodeLayoutToken;
}>;

export type SolidCodeLayoutContextOptions = CodeLayoutContextOptions & {
	link?: CodeLinkComponent;
};

export type SolidCodeLayoutContextValue = CodeLayoutContextValue & {
	link: CodeLinkComponent;
};
