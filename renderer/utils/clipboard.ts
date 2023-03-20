export const saveToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};
