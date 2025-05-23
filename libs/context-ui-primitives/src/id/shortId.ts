export const shortId = (): string => '_' + window.crypto.randomUUID().substring(0, 5);
