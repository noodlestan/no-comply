import type { NoComplyEntityData } from '../../types';
import type { ContextEntityData } from '../types';

export function isNoComplyContext(dec?: NoComplyEntityData): dec is ContextEntityData {
	return typeof dec !== 'undefined' && dec.type === 'context';
}
