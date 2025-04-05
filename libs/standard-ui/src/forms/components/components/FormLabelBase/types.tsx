import type { TagProps } from '@noodlestan/headless-ui/src/tag';
import type { FieldLabelMixinProps } from '@noodlestan/headless-ui/src/forms/mixins';

export type LabelBaseProps = Omit<TagProps, 'component'> & FieldLabelMixinProps;
