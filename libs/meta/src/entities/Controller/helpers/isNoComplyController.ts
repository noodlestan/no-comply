import type { NoComplyEntityData } from '../../types.js';
import type { ControllerEntityData } from '../types.js';

export function isNoComplyController(dec?: NoComplyEntityData): dec is ControllerEntityData {
	return typeof dec !== 'undefined' && dec.type === 'controller';
}
