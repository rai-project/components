import React from "react";
import { storiesOf } from "@storybook/react";
import CodeEditor from "../Components/CodeEditor";

import vectorAddCode from "!!raw!./_fixtures/vectoradd.cu";

storiesOf("CodeEditor", module)
  .add("default", () => <CodeEditor content={"Hello world"} />)
  .add("cuda", () => <CodeEditor content={vectorAddCode} />);
