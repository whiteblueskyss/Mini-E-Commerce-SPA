// Session management utility
export const sessionManager = {
  // Generate a simple session ID
  generateSessionId: () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },

  // Get session ID from localStorage or create new one
  getSessionId: () => {
    let sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = sessionManager.generateSessionId();
      localStorage.setItem("sessionId", sessionId);
      console.log("Generated new session ID:", sessionId);
    } else {
      console.log("Using existing session ID:", sessionId);
    }
    return sessionId;
  },

  // Clear session (optional, for debugging)
  clearSession: () => {
    localStorage.removeItem("sessionId");
  },
};
