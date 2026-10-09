import type { NoComplyEntityData } from '../../types.js';
import type { MixinEntityData } from '../types.js';

export function isNoComplyMixin(dec?: NoComplyEntityData): dec is MixinEntityData {
	return typeof dec !== 'undefined' && dec.type === 'mixin';
}
