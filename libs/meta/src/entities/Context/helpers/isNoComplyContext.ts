import type { NoComplyEntityData } from '../../types.js';
import type { ContextEntityData } from '../types.js';

export function isNoComplyContext(dec?: NoComplyEntityData): dec is ContextEntityData {
	return typeof dec !== 'undefined' && dec.type === 'context';
}
