import type {
	CodeLayoutContextOptions,
	CodeLayoutContextValue,
	CodeLayoutToken,
} from '@purrtrait/code-layout';
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
