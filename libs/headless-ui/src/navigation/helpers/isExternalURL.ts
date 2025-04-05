export function isExternalURL(url: string): boolean {
    return /^(https?:)?\/\//.test(url);
}
