import React from "react";
import { storiesOf } from "@storybook/react";
import XTerm from "components/XTerm";

storiesOf("XTerm", module)
  .addWithJSX("default", () => <XTerm value={"Hello world"} />)
  .addWithJSX("withConsoleLogger", () =>
    <XTerm
      value={""}
      onFocusChange={c => console.log(["on focus change", c])}
      onInput={c => console.log(["on input", c])}
    />
  );
