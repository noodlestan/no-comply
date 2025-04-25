import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import { isExternalURL } from '../../helpers';

import styles from './LinkMixin.module.css';
import type { LinkMixinAPI, LinkMixinProps } from './types';

export const createLinkMixin = (props: LinkMixinProps): LinkMixinAPI => {
    const onClick = (ev: MouseEvent) => {
        if (props.disabled) {
            ev.preventDefault();
            return;
        }
        ev.stopImmediatePropagation();
        props.onPress?.(ev);
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        if (props.disabled) {
            ev.preventDefault();
            return;
        }
        if (ev.key === 'Enter' || ev.key === ' ') {
            ev.stopImmediatePropagation();
            ev.preventDefault();
            props.onPress?.(ev);
        }
    };

    const href = () => (props.disabled ? undefined : props.href);

    const target = () => props.target;

    const rel = () => (isExternalURL(props.href) ? 'noopener noreferrer' : props.rel);

    const tabIndex = () => (props.disabled ? -1 : undefined);

    const staticProps = {
        onClick,
        onKeyDown,
        classList: staticClassList(styles, 'Link'),
    };

    const elProps = createComputedProps(staticProps, {
        href,
        target,
        rel,
        tabIndex,
        'aria-label': () => props.label,
        'aria-disabled': () => props.disabled,
        'data-disabled': () => (props.disabled ? '' : undefined),
        'data-external': () => (isExternalURL(props.href) ? '' : undefined),
    });

    return {
        elProps,
    };
};
