import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import CodeEditor from "../Components/CodeEditor";

storiesOf("CodeEditor", module).add("default", () => (
  <CodeEditor content={"Hello world"} />
));
