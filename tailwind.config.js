/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        background: "var(--background-color)",
        altBackground: "var(--alt-background-color)",
        text: "var(--text-color)",
        altText: "var(--alt-text-color)",
        link: "var(--link-color)",
        altLink: "var(--alt-link-color)",
        border: "var(--border-color)",
        altBorder: "var(--alt-border-color)",
        button: "var(--button-color)",
        altButton: "var(--alt-button-color)",
      },
      padding: {
        30: "30px",
        60: "60px",
        100: "100px",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--background-color)",
            "--tw-prose-headings": "var(--text-color)",
            "--tw-prose-bold": "var(--text-color)",
            "--tw-prose-lead": "var(--text-color)",
            "--tw-prose-links": "var(--link-color)",
            "--tw-prose-counters": "var(--text-color)",
            "--tw-prose-bullets": "var(--text-color)",
            "--tw-prose-hr": "var(--text-color)",
            "--tw-prose-quotes": "var(--link-color)",
            "--tw-prose-quote-borders": "var(--link-color)",
            "--tw-prose-captions": "var(--text-color)",
            "--tw-prose-code": "var(--link-color)",
            "--tw-prose-pre-code": "var(--link-color)",
            "--tw-prose-pre-bg": "var(--text-color)",
            "--tw-prose-th-borders": "var(--text-color)",
            "--tw-prose-td-borders": "var(--text-color)",
            "--tw-prose-invert-body": "var(--text-color)",
            "--tw-prose-invert-headings": "var(--text-color)",
            "--tw-prose-invert-lead": "var(--text-color)",
            "--tw-prose-invert-links": "var(--text-color)",
            "--tw-prose-invert-bold": "var(--text-color)",
            "--tw-prose-invert-counters": "var(--text-color)",
            "--tw-prose-invert-bullets": "var(--text-color)",
            "--tw-prose-invert-hr": "var(--text-color)",
            "--tw-prose-invert-quotes": "var(--text-color)",
            "--tw-prose-invert-quote-borders": "var(--text-color)",
            "--tw-prose-invert-captions": "var(--text-color)",
            "--tw-prose-invert-code": "var(--text-color)",
            "--tw-prose-invert-pre-code": "var(--text-color)",
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": "var(--text-color)",
            "--tw-prose-invert-td-borders": "var(--text-color)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
