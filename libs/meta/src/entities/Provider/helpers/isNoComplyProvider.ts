import type { NoComplyEntityData } from '../../types.js';
import type { ProviderEntityData } from '../types.js';

export function isNoComplyProvider(dec?: NoComplyEntityData): dec is ProviderEntityData {
	return typeof dec !== 'undefined' && dec.type === 'provider';
}
