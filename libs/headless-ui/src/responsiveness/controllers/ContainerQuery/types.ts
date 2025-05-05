import type { Accessor } from 'solid-js';

export type ContainerQueryProps = {
    query: string; // e.g., 'min-width: 600px'
};

export type ContainerQueryAPI = {
    $root: {
        ref: (el: HTMLElement) => void;
    };
    isMatch: Accessor<boolean>;
};
