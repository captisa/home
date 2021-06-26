const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Online form builder with database storage",
  tagline:
    "Create free online forms with workflows, conditional logic, duplicate detection rules, multi-level select, lookup, repeating panels, tabs, accordions. Create views and filters use them to analyze your data using charts or pivot grids, and then present them in dashboard.",
  url: "https://captisa.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "captisa", // Usually your GitHub org/user name.
  projectName: "home", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Captisa Forms",
        src:
          "https://captisa.com/wp-content/uploads/2018/07/cropped-logo-captisa-rnd-sm.png"
      },
      items: [
        { to: "/blog", label: "Home", position: "right" },
        { to: "/blog", label: "Portal", position: "right" },
        {
          to: "/blog",
          label: "Features",
          position: "right",
          items: [
            {
              label: "QuestDB Swag",
              to: "/blog/"
            },
            {
              label: "GitHub",
              to: "/blog"
            },
            {
              label: "Slack",
              to: "/blog"
            },
            {
              label: "Stack Overflow",
              to: "/blog"
            },
            {
              label: "Twitter",
              to: "/blog"
            }
          ]
        },
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Docs"
        }
      ]
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Captisa Forms`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
