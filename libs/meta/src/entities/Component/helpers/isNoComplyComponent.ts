import type { NoComplyEntityData } from '../../types';
import type { ComponentEntityData } from '../types';

export function isNoComplyComponent(dec?: NoComplyEntityData): dec is ComponentEntityData {
	return typeof dec !== 'undefined' && dec.type === 'component';
}
