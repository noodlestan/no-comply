import { Accessor, createSignal } from 'solid-js';

import { ThemesError } from '../errors/ThemesError';
import { SystemSurface } from '../types';

const [surfaces, setSurfaces] = createSignal<SystemSurface[]>([]);

type SurfacesStore = {
    surfaces: Accessor<SystemSurface[]>;
    registerSurface: (theme: SystemSurface) => void;
    surfaceByName: (name: string) => SystemSurface;
};

const findSurface = (name: string): SystemSurface | undefined => {
    return surfaces().find(surface => surface.name === name);
};

const surfaceByName = (name: string): SystemSurface => {
    const found = findSurface(name);
    if (!found) {
        throw new ThemesError(`Unknown surface "${name}".`);
    }
    return found;
};

const registerSurface = (surface: SystemSurface): void => {
    if (!findSurface(surface.name)) {
        setSurfaces(s => [...s, surface]);
    }
};

export const surfacesStore: SurfacesStore = {
    surfaces,
    surfaceByName,
    registerSurface,
};
