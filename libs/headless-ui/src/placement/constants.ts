export const PLACEMENT_AXIS_BLOCK = 'block' as const;
export const PLACEMENT_AXIS_INLINE = 'inline' as const;

export const PLACEMENT_SIDE_START = 'start' as const;
export const PLACEMENT_SIDE_CENTER = 'center' as const;
export const PLACEMENT_SIDE_END = 'end' as const;

export const PLACEMENT_SIDES = [
    PLACEMENT_SIDE_START,
    PLACEMENT_SIDE_CENTER,
    PLACEMENT_SIDE_END,
] as const;

export const PLACEMENT_AXES = [PLACEMENT_AXIS_BLOCK, PLACEMENT_AXIS_INLINE] as const;
