import type { NoComplyEntityData } from '../../types';
import type { ControllerEntityData } from '../types';

export function isNoComplyController(dec?: NoComplyEntityData): dec is ControllerEntityData {
	return typeof dec !== 'undefined' && dec.type === 'controller';
}
