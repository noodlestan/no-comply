import { mergeProps, staticClassList } from '@noodlestan/context-ui-types';
import { createLinkMixin } from '@noodlestan/headless-ui';

import styles from './Link.module.css';
import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const linkProps = {
        classList: staticClassList(styles, `Link`),
    };

    const { elProps: linkMixinElProps } = createLinkMixin(props);

    return {
        elProps: mergeProps(linkMixinElProps, linkProps),
    };
};
