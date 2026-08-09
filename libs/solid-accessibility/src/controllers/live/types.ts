import type {
	AriaAttributeLive,
	AriaAttributeRelevant,
	AriaAttributeRelevantNotification,
} from '../../attributes';

export type AriaLiveProps = {
	live?: AriaAttributeLive;
	atomic?: boolean;
	relevant?: AriaAttributeRelevantNotification | AriaAttributeRelevantNotification[];
};

export type AriaLiveAPI = {
	$root: {
		'aria-live': AriaAttributeLive;
		'aria-atomic': boolean;
		'aria-relevant': AriaAttributeRelevant;
	};
};
