export const calcStepMultiplier = (ev: KeyboardEvent, step: number): number => {
    if (ev.altKey) {
        return step * 0.1;
    }
    if (ev.shiftKey) {
        return step * 10;
    }
    return step;
};
