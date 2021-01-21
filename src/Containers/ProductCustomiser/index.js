import React from "react";

import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import { useStateValue } from "../../StateProvider";

import "./ProductCustomiser.css";

let theme = createMuiTheme({
  overrides: {
    MuiToggleButtonGroup: {
      root: {
        width: "100%",
      },
      groupedVertical: {
        "&:not(:last-child)": {
          borderBottomLeftRadius: "inherit",
          borderBottomRightRadius: "inherit",
        },
        "&:not(:first-child)": {
          borderTop: "1px solid #d6d6d6",
          marginTop: "inherit",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      },
    },
    MuiToggleButton: {
      root: {
        fontWeight: 600,
        color: "black",
        textAlign: "left",
        border: "1px solid #d6d6d6",
        borderRadius: 4,
        padding: ".64706rem .82353rem",
        marginBottom: 9,
        "&.Mui-selected": {
          backgroundColor: "transparent",
          color: "black",
          border: "1px solid red !important",
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        },
        "&:hover": {
          backgroundColor: "transparent",
          border: "1px solid #888 !important",
        },
      },
      label: {
        justifyContent: "flex-start",
      },
    },
  },
});

function ProductCustomiser({ label, options, actionType }) {
  const [{}, dispatch] = useStateValue();

  const [customiser, setCustomiser] = React.useState(options[0].price);

  const handleProductCustomiser = (event, value) => {
    if (value !== null) {
      setCustomiser(value);
      dispatch({ type: actionType, payload: value });
    }
  };

  return (
    <div className="product__customiser">
      <h3 className="product__customiser__header">{label}</h3>
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          orientation="vertical"
          exclusive
          value={customiser}
          onChange={handleProductCustomiser}
        >
          {options?.map((variant, index) => (
            <ToggleButton
              key={variant.price}
              value={variant.price}
              disableRipple
              disableFocusRipple
              disableTouchRipple
            >
              {variant.variantName}
              {<p>{variant.price - customiser}</p>}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
}

export default ProductCustomiser;
