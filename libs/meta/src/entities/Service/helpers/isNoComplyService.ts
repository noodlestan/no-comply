import type { NoComplyEntityData } from '../../types.js';
import type { ServiceEntityData } from '../types.js';

export function isNoComplyService(dec?: NoComplyEntityData): dec is ServiceEntityData {
	return typeof dec !== 'undefined' && dec.type === 'service';
}
