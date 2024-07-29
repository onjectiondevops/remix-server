export default {
  base: "/",
  lang: "en-US",
  title: "CDEBase Tutorials",
  description: "Just playing around.",
  publicURL: "http://localhost:3000",
  nav: [
    // { text: "Tutorial", link: "/" },
    { text: "Blog", link: "/blog" },
  ],
  head: [],
  sidebar: [
    {
      title: "Introduction",
      links: [{ title: "Introduction", href: "/docs/intro" }],
    },
    {
      title: "Account",
      links: [
        { title: "Facebook Setup", href: "/docs/account/auth0-login" },
        { title: "Remix Auth Setup", href: "/docs/account/remix-auth-setup" },
      ],
    },
    {
      title: "Chrome Extension",
      links: [{ title: "Setup", href: "/docs/chrome-extension/setup" }],
    },
    {
      title: "Contribute",
      links: [
        {
          title: "How to contribute",
          href: "/docs/contributing/how-to-contribute",
        },
        { title: "Adding Package", href: "/docs/contributing/adding-package" },
        {
          title: "Adding New Module",
          href: "/docs/contributing/adding_new_modules",
        },
        {
          title: "Architecture Updates",
          href: "/docs/contributing/architecture-updates",
        },
        {
          title: "Avoid using promises in UI",
          href: "/docs/contributing/avoid-using-promises-ui",
        },
        {
          title: "Coding Guidelines",
          href: "/docs/contributing/coding-guidelines",
        },
        { title: "Do and Don`t", href: "/docs/contributing/do-and-dont" },
        {
          title: "Babel, JSX, and Build Steps",
          href: "/docs/contributing/faq-build",
        },
        {
          title: "Frontend Coding",
          href: "/docs/contributing/frontend-coding",
        },
        {
          title: "Git Subtree Sharing",
          href: "/docs/contributing/git-subtree-sharing",
        },
        {
          title: "How to write graphql subscriptions",
          href: "/docs/contributing/graphql-subscriptions",
        },
        {
          title: "Installation Issues",
          href: "/docs/contributing/installation-issues",
        },
        {
          title: "Keyboard Shortcut",
          href: "/docs/contributing/keyboard-shortcut",
        },
        { title: "Build Tools", href: "/docs/contributing/lerna-build-tools" },
        {
          title: "Lerna Yarn Workspaces",
          href: "/docs/contributing/lerna-yarn-workspaces",
        },
        {
          title: "Lint and Formatter",
          href: "/docs/contributing/lint-and-formatter",
        },
        { title: "Debugging", href: "/docs/contributing/mobile-setup" },
        { title: "Project Setup", href: "/docs/contributing/project-setup" },
        {
          title: "Run Various Options",
          href: "/docs/contributing/run-various-options",
        },
        {
          title: "Schema First Graphql Types",
          href: "/docs/contributing/schema-first-graphql-types",
        },
        {
          title: "Source Code Organization",
          href: "/docs/contributing/source-code-organization",
        },
        {
          title: "Typescript Contribution",
          href: "/docs/contributing/typescript-contribution",
        },
      ],
      subDocs: [
        {
          title: "Folder Setup",
          links: [
            {
              title: "Browser",
              href: "/docs/contributing/folder-setup/browser",
            },
            { title: "Config", href: "/docs/contributing/folder-setup/config" },
            {
              title: "Containers Server",
              href: "/docs/contributing/folder-setup/containers-server",
            },
            { title: "Core", href: "/docs/contributing/folder-setup/core" },
            {
              title: "Graphql",
              href: "/docs/contributing/folder-setup/graphql",
            },
            { title: "Module", href: "/docs/contributing/folder-setup/module" },
            { title: "Server", href: "/docs/contributing/folder-setup/server" },
            {
              title: "Services",
              href: "/docs/contributing/folder-setup/services",
            },
            { title: "Store", href: "/docs/contributing/folder-setup/store" },
          ],
        },
        {
          title: "React",
          links: [
            {
              title: "Lazy Component",
              href: "/docs/contributing/react/lazy-component",
            },
          ],
        },
        {
          title: "Knowledge Resources",
          links: [
            {
              title: "ApolloClient(v3) tutorials",
              href: "/docs/contributing/third-party/apollo-client-v3-tutorials",
            },
          ],
        },
        {
          title: "Language",
          links: [
            {
              title: "Locale Support",
              href: "/docs/contributing/language/locale-support",
            },
          ],
        },
      ],
    },
    {
      title: "Devops",
      links: [
        {
          title: "Procedure to deploy",
          href: "/docs/devops/app-deploy-new-version",
        },
        {
          title: "Mobile jenkins build",
          href: "/docs/devops/mobile-jenkins-build",
        },
        {
          title: "Spin a Clone Deployment",
          href: "/docs/devops/spin-clone-develop-deployment",
        },
      ],
    },
    {
      title: "Error Handler",
      links: [
        {
          title: "Application Error Handler",
          href: "/docs/error-handler/application-error-handler",
        },
        { title: "Error Handling", href: "/docs/error-handler/error-handling" },
      ],
    },
    {
      title: "Feature Api",
      subDocs: [
        {
          title: "Feature Browser",
          links: [
            {
              title: "Feature Browser API",
              href: "/docs/feature-api/feature-browser/feature",
            },
            {
              title: "Routes and Menu",
              href: "/docs/feature-api/feature-browser/routes-menu",
            },
            {
              title: "Routing Convetion",
              href: "/docs/feature-api/feature-browser/routing-convention",
            },
            {
              title: "Routing",
              href: "/docs/feature-api/feature-browser/routing",
            },
            {
              title: "Assets",
              href: "/docs/feature-api/feature-browser/assets",
            },
            {
              title: "Auth & Permissions",
              href: "/docs/feature-api/feature-browser/auth-permissions",
            },
          ],
        },
        {
          title: "Feature Mobile",
          links: [
            {
              title: "Feature Mobile API",
              href: "/docs/feature-api/feature-mobile/feature",
            },
            {
              title: "Navigation",
              href: "/docs/feature-api/feature-mobile/navigation",
            },
            {
              title: "Auth & Permissions",
              href: "/docs/feature-api/feature-mobile/auth-permissions",
            },
          ],
        },
        {
          title: "Feature Server",
          links: [
            {
              title: "Feature Server API",
              href: "/docs/feature-api/feature-server/feature",
            },
            {
              title: "Scheduling / Cron Jobs",
              href: "/docs/feature-api/feature-server/Scheduling",
            },
            {
              title: "Dependency Injection",
              href: "/docs/feature-api/feature-server/dependency-injection",
            },
            {
              title: "Migration",
              href: "/docs/feature-api/feature-server/migration",
            },
            {
              title: "Mongo Model",
              href: "/docs/feature-api/feature-server/mongo-model",
            },
            {
              title: "Permissions",
              href: "/docs/feature-api/feature-server/permissions",
            },
            {
              title: "Policies",
              href: "/docs/feature-api/feature-server/policies",
            },
            {
              title: "Preferences",
              href: "/docs/feature-api/feature-server/preferences",
            },
            {
              title: "Repositories",
              href: "/docs/feature-api/feature-server/repositories",
            },
            {
              title: "Resolvers",
              href: "/docs/feature-api/feature-server/resolvers",
            },
            { title: "Rules", href: "/docs/feature-api/feature-server/rules" },
            {
              title: "Schema",
              href: "/docs/feature-api/feature-server/schema",
            },
            {
              title: "Service",
              href: "/docs/feature-api/feature-server/services",
            },
            {
              title: "Setup Resource CRUD",
              href: "/docs/feature-api/feature-server/setup-resource-crud",
            },
          ],
        },
      ],
    },
    {
      title: "File Upload",
      links: [
        { title: "Setup", href: "/docs/file-upload/setup" },
        {
          title: "File Uploads",
          href: "/docs/file-upload/upload-file-using-signed-url",
        },
      ],
    },
    {
      title: "Graphql",
      links: [{ title: "Scalars", href: "/docs/graphql/scalars" }],
    },
    {
      title: "Security",
      links: [
        { title: "Auth Wrapper", href: "/docs/security/auth-wrapper/auth-wrapper" },
        {
          title: "Secure Button (mobile)",
          href: "/docs/security/secure-button-mobilenative",
        },
        {
          title: "Secure Button (web)",
          href: "/docs/security/secure-button-web",
        },
      ],
    },
    {
      title: "Help",
      links: [{ title: "Welcome", href: "/docs/help/intro" }],
    },
    {
      title: "Mailling",
      links: [
        { title: "Mailing Templates", href: "/docs/mailing/mailing-template" },
      ],
    },
    {
      title: "Mobile",
      links: [
        { title: "Eas profile build", href: "/docs/mobile/eas-profile-build" },
        {
          title: "Expo push notification setup",
          href: "/docs/mobile/expo-push-notification-setup",
        },
        { title: "With Orgname and Sider", href: "/docs/mobile/routes" },
      ],
    },
    {
      title: "Organization",
      links: [
        {
          title: "Adding Account Context",
          href: "/docs/organization/adding-account-context",
        },
        {
          title: "Org Navigation(mobile)",
          href: "/docs/organization/adding-org-mobile-navigation",
        },
        {
          title: "Org Navigation(web)",
          href: "/docs/organization/adding-org-web-navigation",
        },
        { title: "Initialization", href: "/docs/organization/initialization" },
      ],
    },
    {
      title: "Payments",
      subDocs: [
        {
          title: "Stripe",
          links: [
            {
              title: "Setting up stripe locally",
              href: "/docs/payments/stripe/settingup-stripe-locally",
            },
          ],
        },
      ],
    },
    {
      title: "Preferences",
      links: [
        {
          title: "Preferences",
          href: "/docs/preferences/preference-dependency",
        },
        {
          title: "Add Additional Permissions",
          href: "/docs/preferences/AddAdditionalPermissions",
        },
        { title: "Configuration", href: "/docs/preferences/Configuration" },
        {
          title: "Policy Configuration",
          href: "/docs/preferences/Policy-Configuration",
        },
        {
          title: "Roles & Permissions",
          href: "/docs/preferences/permissions/Roles-Permissions",
        },
        { title: "Generate URI", href: "/docs/preferences/generate-urii" },
        {
          title: "Machine Configuration",
          href: "/docs/preferences/machine-configuration",
        },
        {
          title: "Route based configuration",
          href: "/docs/preferences/route-based-configuration",
        },
        {
          title: "Conditional Field Renderin",
          href: "/docs/preferences/schema-configuration",
        },
        { title: "Supported", href: "/docs/preferences/supported" },
        {
          title: "Setting User Permissions",
          href: "/docs/preferences/permissions/settingUserPermissions",
        },
      ],
    },
    {
      title: "Server Side",
      links: [
        {
          title: "Account Customization",
          href: "/docs/server-side/account-customization",
        },
        {
          title: "Listen Stripe Events",
          href: "/docs/server-side/listen-stripe-events",
        },
      ],
    },
    {
      title: "Tests",
      links: [
        {
          title: "Jest Test Debug",
          href: "/docs/tests/jest-test-debug-vscode",
        },
        { title: "Known Errors", href: "/docs/tests/known-errors" },
        {
          title: "Jest Template For Backend",
          href: "/docs/tests/service-test-template",
        },
        { title: "Test Setup", href: "/docs/tests/test-setup" },
      ],
    },
    {
      title: "UI",
      links: [
        { title: "Schema Based UI Forms", href: "/docs/UI/SchemaBasedUI" },
      ],
    },
    {
      title: "Intl",
      links: [
        { title: "Internationalization", href: "/docs/intl/vite-plugin-intl" },
        {
          title: "Webpack plugin intl",
          href: "/docs/intl/webpack-plugin-intl",
        },
      ],
    },
    {
      title: "Remix",
      links: [
        { title: "Resources", href: "/docs/remix/resources" },
        { title: "Wiki", href: "/docs/remix/wiki" },
      ],
    },
    {
      title: "Xstate",
      links: [{ title: "Xstate", href: "/docs/xstate" }],
    },
  ],
  search: {
    enabled: true,
  },
};
