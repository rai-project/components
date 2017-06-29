import React from "react";
import { storiesOf } from "@storybook/react";
import XTerm from "components/XTerm";

storiesOf("XTerm", module)
  .add("default", () => <XTerm value={"Hello world"} />)
  .add("withConsoleLogger", () =>
    <XTerm
      value={""}
      onFocusChange={c => console.log(["on focus change", c])}
      onInput={c => console.log(["on input", c])}
    />
  );
