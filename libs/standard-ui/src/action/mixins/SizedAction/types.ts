import type { SizedContentMixinAPI, SizedContentMixinProps } from '../../../content';
import type { ContentScale, ContentSize } from '../../../size';

export type SizedActionMixinProps = SizedContentMixinProps & {
	size?: ContentSize;
	scale?: ContentScale;
};

export type SizedActionMixinAPI = SizedContentMixinAPI;
