import type { NoComplyEntityData } from '../../types.js';
import type { ModuleEntityData } from '../types.js';

export function isNoComplyModule(dec?: NoComplyEntityData): dec is ModuleEntityData {
	return typeof dec !== 'undefined' && dec.type === 'module';
}
