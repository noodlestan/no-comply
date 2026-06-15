import ts from 'typescript';

import { type XPressValue, createXPressValueExpression } from '../../values';

export function extractBooleanAttribute(): XPressValue {
	return createXPressValueExpression(ts.factory.createTrue(), 'true');
}
