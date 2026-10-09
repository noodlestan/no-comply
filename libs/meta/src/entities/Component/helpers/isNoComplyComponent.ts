import type { NoComplyEntityData } from '../../types.js';
import type { ComponentEntityData } from '../types.js';

export function isNoComplyComponent(dec?: NoComplyEntityData): dec is ComponentEntityData {
	return typeof dec !== 'undefined' && dec.type === 'component';
}
