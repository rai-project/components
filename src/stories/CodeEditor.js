import React from "react";
import { storiesOf } from "@storybook/react";
import CodeEditor from "components/CodeEditor";
import yeast from "yeast";

import vectorAddCode from "!raw-loader!./_fixtures/vectoradd.cu";

storiesOf("CodeEditor", module)
  .addWithJSX("default", () =>
    <CodeEditor
      files={{
        code: { content: "Hello", createdOn: new Date(), uuid: yeast() }
      }}
    />
  )
  .addWithJSX("cuda", () =>
    <CodeEditor
      files={{
        code: { content: vectorAddCode, createdOn: new Date(), uuid: yeast() }
      }}
    />
  )
  .addWithJSX("cuda-with-menu", () =>
    <CodeEditor
      withMenuBar
      files={{
        code: { content: vectorAddCode, createdOn: new Date(), uuid: yeast() }
      }}
      onSaveIconClick={(_, v) => console.log(v)}
    />
  )
  .addWithJSX("multifile", () =>
    <CodeEditor
      withMenuBar
      currentFile={"file1"}
      files={{
        file1: { content: vectorAddCode, createdOn: new Date(), uuid: yeast() },
        file2: { content: vectorAddCode, createdOn: new Date(), uuid: yeast() }
      }}
      onSaveIconClick={(_, v) => console.log(v)}
    />
  )
  .addWithJSX("multifile-nobar", () =>
    <CodeEditor
      currentFile={"file1"}
      files={{
        file1: { content: vectorAddCode, createdOn: new Date(), uuid: yeast() },
        file2: { content: vectorAddCode, createdOn: new Date(), uuid: yeast() }
      }}
      onSaveIconClick={(_, v) => console.log(v)}
    />
  );
