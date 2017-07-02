import React from "react";
import { storiesOf } from "@storybook/react";
import S3Uploader from "components/S3Uploader";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("S3Uploader", module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

const defaultRegion = process.env.REACT_APP_aws_region;
const defaultAccessKey = process.env.REACT_APP_aws_access_key_id;
const defaultSecretKey = process.env.REACT_APP_aws_secret_access_key;
const defaultUploadBucketBaseURL =
  process.env.REACT_APP_s3_upload_bucket_base_url;
const defaultUploadBucketName = process.env.REACT_APP_s3_upload_bucket_name;

stories.addWithJSX("default", () =>
  <S3Uploader
    region={text("region", defaultRegion)}
    accessKeyId={text("aws_access_key_id", defaultAccessKey)}
    secretAccessKey={text("aws_secret_access_key", defaultSecretKey)}
    defaultUploadBucketBaseURL={text(
      "s3_upload_bucket_base_url",
      defaultUploadBucketBaseURL
    )}
    defaultUploadBucketName={text(
      "s3_upload_bucket_name",
      defaultUploadBucketName
    )}
  />
);
