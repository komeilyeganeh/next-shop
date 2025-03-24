export const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        text = text.slice(0, maxLength) + "...";
    }
    return text;
}