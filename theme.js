import { deep } from "@theme-ui/presets";
import { hack, swiss } from "mdx-deck/themes";
import { hidden } from "ansi-colors";

export const theme = {
  ...hack,
  buttons: {
    primary: {
      backgroundColor: "primary",
      padding: 4,
      margin: 4
    },
    secondary: {
      backgroundColor: "secondary",
      padding: 2,
      margin: 2
    }
  },
  styles: {
    ...hack.styles,
    pre: {
      ...hack.styles.pre,
      fontSize: "26px",
      lineHeight: "1.5"
    }
  }
};

console.log(deep.styles);
export default theme;
