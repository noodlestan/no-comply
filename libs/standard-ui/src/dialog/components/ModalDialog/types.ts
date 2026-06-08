import type {
	ModalDialogAPI as HeadlessModalDialogAPI,
	ModalDialogProps as HeadlessModalDialogProps,
	ModalDialogMixinAPI,
	SurfaceAPI,
} from '@no-comply/solid-composables';

export type ModalDialogSize = 's' | 'm' | 'l';

export type ModalDialogChildrenProps = {
	dialog: ModalDialogAPI;
	surface: SurfaceAPI;
};

export type ModalDialogProps = HeadlessModalDialogProps & {
	size?: ModalDialogSize;
};

export type ModalDialogAPI = {
	_surface: HeadlessModalDialogAPI['$root'] &
		ModalDialogMixinAPI['$root'] & {
			variant: 'dialog';
		};
	$label: HeadlessModalDialogAPI['$label'];
	$description: HeadlessModalDialogAPI['$description'];
	context: HeadlessModalDialogAPI['context'];
	contextValue: HeadlessModalDialogAPI['contextValue'];
};
