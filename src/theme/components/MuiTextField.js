/* eslint-disable no-unused-vars */
export default {
  MuiTextField: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
    variants: [
      {
        props: { variant: "outlined", color: "primary" },
      },
      {
        props: { variant: "solid", color: "primary" },
        style: ({ theme }) => ({
          height: "38px",
          color: theme.palette.white.main,
          background: theme.palette.primary[500],
          borderRadius: "3px",
          "&:hover": {
            background: theme.palette.primary[600],
          },
          "&:disabled ": {
            color: "#ffff",
            background: "#ddd",
          },
        }),
      },
      {
        props: { variant: "standard", color: "primary" },
        style: ({ theme }) => ({
          "& button": {
            transform: "translate(-11px, -5px)",
          },
        }),
      },
    ],
  },
};
