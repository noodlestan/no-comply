export const FOCUS_ELEMENTS_QUERY = `
  :where(
    a[href],
    button,
    input,
    select,
    textarea,
    details,
    summary,
    [tabindex]:not([tabindex="-1"]),
    [contenteditable]:not([contenteditable="false"])
  ):not([aria-disabled="true"]):not([data-disabled="true"]):not([disabled])
`;

export const getFocusableElements = (element?: HTMLElement): HTMLElement[] => {
    return element ? Array.from(element.querySelectorAll(FOCUS_ELEMENTS_QUERY)) : [];
};
