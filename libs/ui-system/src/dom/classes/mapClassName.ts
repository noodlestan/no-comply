export function mapClassName(styles: Record<string, string>, className: string): string {
    if (!(className in styles)) {
        throw new Error(`Unknown class "${className}".`);
    }
    return styles[className] as string;
}
