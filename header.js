/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";

export const Header = ({ children }) => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "center",
      padding: 4,
      margin: 4,
      color: "secondary",
      border: theme => `1px solid ${theme.colors.primary}`
    }}
  >
    {children}
  </Flex>
);

export default Header;
