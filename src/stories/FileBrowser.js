import React from "react";
import { storiesOf } from "@storybook/react";
import FileBrowser from "components/FileBrowser";
import yeast from "yeast";

storiesOf("FileBrowser", module).add("default", () =>
  <FileBrowser
    content={[
      {
        name: "dir1",
        isDirectory: true,
        uuid: yeast(),
        content: [
          {
            name: "test1.txt",
            url: "test1.txt",
            uuid: yeast()
          },
          {
            name: "test2.txt",
            url: "test2.txt",
            uuid: yeast()
          },
          {
            name: "test3.txt",
            url: "test3.txt",
            uuid: yeast()
          },
          {
            name: "test4.txt",
            url: "test4.txt",
            uuid: yeast()
          },
          {
            name: "test5.txt",
            url: "test5.txt",
            uuid: yeast()
          }
        ]
      },
      {
        name: "dir2",
        uuid: yeast(),
        isDirectory: true,
        isOpen: true,
        content: [
          {
            name: "test.txt",
            url: "test.txt",
            uuid: yeast()
          }
        ]
      }
    ]}
  />
);
