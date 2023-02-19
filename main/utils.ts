export const sendMessageToRenderer = (window, channelName, data?) => {
  window.webContents.send(channelName, data);
};
