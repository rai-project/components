import React from "react";
import { storiesOf } from "@storybook/react";
import DropArea from "components/DropArea";
import { Page } from "hedron";

storiesOf("DropArea", module).addWithJSX("default", () =>
  <Page>
    <DropArea onChange={console.log} />
  </Page>
);
