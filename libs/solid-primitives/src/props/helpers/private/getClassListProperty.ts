/* eslint-disable dot-notation */
import type { ClassList } from '../../../classes';
import type { AccessorOrValue, AnyProps } from '../../types';

import { resolveSource } from './resolveSource';

export function getClassListProperty(sources: AccessorOrValue<AnyProps>[]): ClassList {
	const classLists: (() => ClassList)[] = [];
	for (let i = 0; i < sources.length; i++) {
		const resolvedSource = resolveSource(sources[i] as Record<string, unknown>);
		const classList = resolvedSource['classList'] as AccessorOrValue<ClassList>;
		if (classList) {
			classLists.push(typeof classList === 'function' ? classList : () => classList);
		}
	}
	return classLists.reduce((acc, fn) => ({ ...acc, ...fn() }), {});
}
