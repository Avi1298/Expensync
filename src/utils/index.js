export function getInitialScreen(authenticated, user = {}) {
  const { email, password } = user;
  if (authenticated) {
    return "MainTabs";
  } else if (email && password) {
    return "Login";
  } else {
    return "Login";
  }
}
