export default {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
    variants: [
      {
        props: { variant: "outlined", color: "primary" },
        style: ({ theme }) => ({
          height: "38px",
          color: theme.palette.primary[500],
          background: "transparent",
          border: `1px solid ${theme.palette.primary[500]}`,
          borderRadius: "3px",
          "&:hover": {
            border: `1px solid ${theme.palette.primary[600]}`,
            color: theme.palette.primary[600],
            background: theme.palette.primary[100],
          },
        }),
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
    ],
  },
};
