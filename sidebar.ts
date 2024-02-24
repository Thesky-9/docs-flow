import { type DefaultTheme } from "vitepress";

export function sidebarFlow(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Introduction', link: '/' },
    {
      text: "Prologue",
      items: [
        { text: "Releases", link: "/releases.md" },
        { text: "Upgrade", link: "/upgrade.md" },
        { text: "License", link: "/license.md" },
      ],
    },
    {
      text: "Getting started",
      items: [
        { text: "Requirement", link: "/requirement.md" },
        { text: "Install on hosting", link: "/install-on-hosting.md" },
        { text: "Install on vps", link: "/install-on-vps.md" },
        { text: "Ssl", link: "/ssl.md" },
      ],
    },
    {
      text: "User guide",
      items: [
        { text: "Custom Site Identity", link: "/general.md" },
        { text: "Menu", link: "/menu.md" },
        { text: "Footer", link: "/footer.md" },
        { text: "Custom CSS & JS", link: "/cssjs.md" },
        { text: "Translate", link: "/translate.md" },
      ],
    },
    { text: "Short code", link: "/shortcode.md" },
    { text: "Config", link: "/config.md" },
    {
      text: "Available plugins",
      items: [
        { text: "Post scheduler", link: "/plugin/plugin-post-scheduler.md" },
        { text: "Ads", link: "/plugin/plugin-ads.md" },
        { text: "Analytics", link: "/plugin/plugin-analytics.md" },
        { text: "Backup", link: "/plugin/plugin-backup.md" },
        { text: "Contact Form", link: "/plugin/plugin-contact-form.md" },
      ],
    },
    { text: "Theme development Guide", link: "/theme-development.md" },
  ];
}
