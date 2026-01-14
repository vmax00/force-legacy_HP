// Dummy useAuth hook for static site deployment
// This is a placeholder that returns no user authentication
export function useAuth() {
  return {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    logout: () => {
      console.log("Logout not available in static mode");
    },
  };
}
