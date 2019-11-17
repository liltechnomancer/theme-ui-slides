/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Card,
  Heading,
  Image,
  Flex,
  Input,
  Box,
  Button,
  Text,
  Label
} from "@theme-ui/components";

export const Newsletter = props => (
  <Card p={4} sx={{ maxWidth: "500px;", margin: "auto" }}>
    <Flex
      sx={{
        alignItems: "center"
      }}
    >
      <Image
        variant="small"
        src="https://assets-ouch.icons8.com/preview/657/12cfd532-d33d-4e4f-8479-bfd2de6461d3.png"
      />
      <Heading ml={4} sx={{ fontSize: [2, 6] }}>
        Join My Newsletter!
      </Heading>
    </Flex>
    <Box
      as="form"
      name="newsletter"
      action="https://app.convertkit.com/forms/1112872/subscriptions"
      method="POST"
    >
      <Label htmlFor="fields[first_name]" sx={{ fontWeight: "bold" }}>
        Name
      </Label>
      <Input name="fields[first_name]" my={2} placeholder="Russell Jones" />
      <Label htmlFor="email_address" sx={{ fontWeight: "bold" }}>
        Email Address
      </Label>
      <Input name="email_address" my={2} placeholder="odb@wutangclan.com" />
      <Button my={2} sx={{ width: "100%" }}>
        Pledge your devotion!
      </Button>
    </Box>
  </Card>
);

export default Newsletter;
