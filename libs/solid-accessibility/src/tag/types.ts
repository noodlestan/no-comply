/**
 * @noresolve
 */
export type PressableTagName = 'button' | 'a' | 'div';

export type CheckboxTagName = 'input' | 'button' | 'div';

export type RadioTagName = 'input' | 'button' | 'div';

export type SwitchTagName = 'button' | 'input' | 'div';

export type SelectTagName = 'select' | 'input' | 'div';

export type BlockTagName = 'div' | 'ol' | 'ul' | 'li';

export type ListTagName = 'ol' | 'ul' | 'div';

export type ListItemTagName = 'li' | 'div';

export type RegionTagName =
	| 'div'
	| 'main'
	| 'header'
	| 'footer'
	| 'nav'
	| 'section'
	| 'article'
	| 'aside';

export type FocusableTagName = BlockTagName | RegionTagName;

export type ScrollableTagName = BlockTagName | RegionTagName;

export type LayoutTagName = BlockTagName | RegionTagName | 'p' | 'span';

export type FieldsetTagName = 'fieldset' | BlockTagName;

export type SurfaceTagName = BlockTagName | RegionTagName | 'dialog';

export type HeadingTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextTagName = 'p' | HeadingTagName | 'div' | 'span';

export type LabelTagName = 'label' | 'span';

export type SeparatorTagName = 'hr' | 'div' | 'span';

export type ActionLabelTagName = 'label' | 'span';

export type DialogTagName = 'dialog';

export type FormTagName = 'form' | 'div';

export type CodeTagName = 'code' | 'div' | 'span';

export type MenuTagName = 'div';

export type DisplayTagName = TextTagName;

export type VisuallyHiddenTagName = RegionTagName | TextTagName;
