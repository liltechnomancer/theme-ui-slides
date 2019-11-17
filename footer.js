/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
export const Header = ({ children }) => (
  <Flex
    sx={{
      width: "100%",
      border: theme => `1px solid ${theme.colors.primary}`
    }}
  >
    {"\n"}
    {children}
  </Flex>
);

export default Header;
