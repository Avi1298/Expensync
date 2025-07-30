const DEV_URL = "http://192.168.20.132:5000"; // Your backend IP here
export const SITE_URL = DEV_URL;
export const BASE_API_URL = `${SITE_URL}/api/`;

global.socket = null;

export const connectSocket = (userId) => {
  if (!userId) return;

  const wsURL = SITE_URL.startsWith("https")
    ? SITE_URL.replace("https", "wss") + `/?userId=${userId}`
    : SITE_URL.replace("http", "ws") + `/?userId=${userId}`;

  global.socket = new WebSocket(wsURL);

  global.socket.onopen = () => {
    console.log("🟢 WebSocket connected");
  };

  global.socket.onclose = (e) => {
    console.log("🔴 WebSocket disconnected. Attempting to reconnect...");
    setTimeout(() => connectSocket(userId), 2000); // retry after 2s
  };

  global.socket.onerror = (error) => {
    console.error("⚠️ WebSocket error:", error.message);
  };
};

export const sendMessage = (messageObj) => {
  if (global.socket && global.socket.readyState === WebSocket.OPEN) {
    console.log("Sending message via socket:", messageObj);
    global.socket.send(JSON.stringify(messageObj));
  } else {
    console.warn("⚠️ Socket not connected or not open");
  }
};
