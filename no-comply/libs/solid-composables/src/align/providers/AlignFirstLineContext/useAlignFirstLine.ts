import type { AlignFirstLineContext } from '../../contexts';
import { useAlignFirstLineContextMaybe } from '../../private';

export const useAlignFirstLine = (): AlignFirstLineContext | undefined => {
	return useAlignFirstLineContextMaybe();
};
