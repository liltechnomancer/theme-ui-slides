/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";

export const Center = ({ children, css }) => (
  <Flex
    sx={{
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    }}
    css={css}
  >
    {children}
  </Flex>
);

export default Center;
