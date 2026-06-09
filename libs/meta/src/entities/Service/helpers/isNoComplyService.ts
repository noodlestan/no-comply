import type { NoComplyEntityData } from '../../types';
import type { ServiceEntityData } from '../types';

export function isNoComplyService(dec?: NoComplyEntityData): dec is ServiceEntityData {
	return typeof dec !== 'undefined' && dec.type === 'service';
}
