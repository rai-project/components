import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import XTerm from "../Components/XTerm";

storiesOf("XTerm", module)
  .add("default", () => <XTerm value={"Hello world"} />)
  .add("withConsoleLogger", () => (
    <XTerm
      value={""}
      onFocusChange={c => console.log(["on focus change", c])}
      onInput={c => console.log(["on input", c])}
    />
  ));
