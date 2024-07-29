
import { createCookieSessionStorage } from "@remix-run/node";
import { isTheme } from "./theme-provider";
import type { Theme } from "./theme-provider";

// Make use to set the environment variable SESSION_SECRET before running the code
const sessionSecret = "DEFAULT_SECRET";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "rb:theme",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };