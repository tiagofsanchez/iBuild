export default {
  breakpoints: ["690px", "1100px", "1440px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: "black",
    text2: "white",
    background: "#F2F6FF",
    backgroundHeader: "#E7E6FF",
    primary: "#8352FD",
    primary2: "#3913B8",
    secondary: "#00CFFD",
    secondary2: "#2FB5FC",
    naturalDark: "#1A2151",
    naturalLight: "#E3E8FF",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Georgia, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 60, 64],
  fontWeights: {
    body: 400,
    soft: 200,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  text: {
    menu: {
      fontWeight: "bold",
      fontSize: [20, 22, 22],
    },
    tagline: {
      fontWeight: "soft",
      fontSize: [14, 18, 18],
    },
    caption: {
      fontWeight: "soft",
      fontSize: [12, 14, 14],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      h1: {
        fontSize: [34, 60, 60],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h2: {
        fontSize: [32, 50, 50],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h3: {
        fontSize: [28, 40, 40],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h4: {
        fontSize: [24, 30, 30],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      p: {
        fontSize: [17, 20, 20],
        fontFamily: "body",
        fontWeight: "body",
        color: "text",
      },
      li: {
        fontSize: [17, 20, 20],
        fontFamily: "body",
        fontWeight: "body",
        color: "text",
      },
    },
  },
  layout: {
    header: {
      color: "text",
      margin: [2, 2, 4],
    },
    frameworkName: {
      width: ["90%", "80%", "900px"],
      margin: `auto`,
      color: "text",
    },
    frameworkMain: {
      width: ["100%", "80%", "800px"],
      margin: "auto",
      padding: 4,
    },
    frameworkOthers: {
      width: ["90%", "90%", "1100px"],
      margin: "auto",
    },
    frameworkFooter: {
      width: ["90%", "80%", "900px"],
    },
    main: {
      width: ["90%", "80%", "90%"],
      margin: "auto",
      padding: 4,
    },
    footer: {
      color: "text",
      margin: 4,
      width: ["80%", "80%", `100%`],
      padding: `0`,
    },
  },
  buttons: {
    primary: {
      cursor: "pointer",
    },
    icon: {
      width: "auto",
      height: "auto",
      cursor: "pointer",
    },
    share: {
      width: `40px`,
      height: `40px`,
      "&:hover": {
        bg: `primary2`,
      },
    },
  },
  cards: {
    primary: {
      width: ["261px", "261px", "352px"],
      borderRadius: 15,
      background: `white`,
      cursor: "pointer",
      boxShadow: "0px 10px 20px rgba(57, 19, 184, 0.1)",
      "&:hover": {
        boxShadow: "0px 5px 10px #8352FD",
      },
    },
    header: {
      borderRadius: "6px 6px 0px 0px",
      display: `grid`,
      justifyContent: `center`,
      bg: "backgroundHeader",
      p: 3,
    },
    description: {
      display: `grid`,
      p: 3,
    },
    formCard: {
      width: ["100%", "100%", "100%", "1024px"],
      margin: "auto",
      borderRadius: 15,
      bg: "background",
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.25)",
    },
  },
  links: {
    primary: {
      textDecoration: `none`,
      p: "10px 20px",
      borderRadius: 5,
      "&:active": {
        color: "primary2",
      },
    },
  },
};
