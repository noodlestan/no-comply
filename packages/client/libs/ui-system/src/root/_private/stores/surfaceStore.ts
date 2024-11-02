import { Accessor, createSignal } from 'solid-js';

import { surfacesStore } from '../../stores';
import { SystemSurface } from '../../types';

const [surface, setSurface] = createSignal<string>('');

type SurfaceStore = {
    surface: Accessor<SystemSurface>;
    setSurface: (name: string) => void;
};

const { surfaceByName } = surfacesStore;

export const surfaceStore: SurfaceStore = {
    surface: () => surfaceByName(surface()),
    setSurface: (name: string) => {
        surfaceByName(name);
        setSurface(name);
    },
};
