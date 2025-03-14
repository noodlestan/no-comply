import { OnListChange, createListTransition } from '@solid-primitives/transition-group';
import { Accessor } from 'solid-js';

import { forcefullyDisableElement } from '../../../functions';
import { TransitionAPI } from '../../../transitions';

type TransitionState = {
    enterTransitions: Set<TransitionAPI>;
    leaveTransitions: Set<TransitionAPI>;
};

type ListTransitionController = {
    items: Accessor<HTMLElement[]>;
    dispose: () => void;
};

export const createListTransitionController = (
    elements: () => Element[],
    enterTransition?: () => TransitionAPI,
    leaveTransition?: () => TransitionAPI,
): ListTransitionController => {
    const state: TransitionState = {
        enterTransitions: new Set(),
        leaveTransitions: new Set(),
    };

    const onChange: OnListChange<Element> = ({ added, removed, finishRemoved }) => {
        if (enterTransition) {
            added.forEach(el => {
                const enter = enterTransition();
                state.enterTransitions.add(enter);
                enter.transition(el as HTMLElement, () => {
                    state.enterTransitions.delete(enter);
                });
            });
        }

        if (leaveTransition) {
            removed.forEach(el => {
                const leave = leaveTransition();
                state.leaveTransitions.add(leave);
                forcefullyDisableElement(el);
                leave.transition(el as HTMLElement, () => {
                    finishRemoved([el]);
                    state.leaveTransitions.delete(leave);
                });
            });
        }
    };

    const els = () => elements().filter(el => el instanceof HTMLElement);
    const items = createListTransition(els, { onChange, exitMethod: 'keep-index' });

    const dispose = () => {
        state.enterTransitions.forEach(enter => enter.finish());
        state.leaveTransitions.forEach(leave => leave.finish());
    };

    const api: ListTransitionController = {
        items: items as Accessor<HTMLElement[]>,
        dispose,
    };

    return api;
};
