import type { NoComplyEntityData } from '../../types';
import type { ProviderEntityData } from '../types';

export function isNoComplyProvider(dec?: NoComplyEntityData): dec is ProviderEntityData {
	return typeof dec !== 'undefined' && dec.type === 'provider';
}
