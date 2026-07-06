import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type AlignContextCleanupFunction = () => void;

export type AlignFirstLineContext = {
	registerTargetProxyClasslist: (classList: ClassList) => AlignContextCleanupFunction;
	registerMeasureProxyClassist: (classList: ClassList) => AlignContextCleanupFunction;
};

export type AlignFirstLineContextOwnerAPI = {
	proxyClassList: Accessor<ClassList>;
};

export type AlignFirstLineContextValue = [AlignFirstLineContext, AlignFirstLineContextOwnerAPI];
