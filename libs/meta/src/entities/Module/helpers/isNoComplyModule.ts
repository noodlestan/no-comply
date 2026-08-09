import type { NoComplyEntityData } from '../../types';
import type { ModuleEntityData } from '../types';

export function isNoComplyModule(dec?: NoComplyEntityData): dec is ModuleEntityData {
	return typeof dec !== 'undefined' && dec.type === 'module';
}
