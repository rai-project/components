import React from "react";
import { storiesOf } from "@storybook/react";
import DropArea from "components/DropArea";

storiesOf("DropArea", module).add("default", () =>
  <DropArea onChange={console.log} />
);
