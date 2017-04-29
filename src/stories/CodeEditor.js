import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import CodeEditor from "../Components/CodeEditor";

import vectorAddCode from "!!raw!./_fixtures/vectoradd.cu";

storiesOf("CodeEditor", module)
  .add("default", () => <CodeEditor content={"Hello world"} />)
  .add("cuda", () => <CodeEditor content={vectorAddCode} />);
