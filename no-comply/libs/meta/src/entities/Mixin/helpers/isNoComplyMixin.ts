import type { NoComplyEntityData } from '../../types';
import type { MixinEntityData } from '../types';

export function isNoComplyMixin(dec?: NoComplyEntityData): dec is MixinEntityData {
	return typeof dec !== 'undefined' && dec.type === 'mixin';
}
