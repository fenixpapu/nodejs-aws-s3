const cors = require("cors");
const aws = require("aws-sdk");
const express = require("express");
const configAWS = require("./config");

const app = express();
app.use(cors());
app.get("/sign-s3", (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: configAWS.BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"- Cảm ơn bạn đã theo dõi tới đây! Mình dừng bài viết tại đây.
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(`getSignedUrl error: `, err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${configAWS.BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

app.listen(3000, () => {
  console.log("come here babe...");
});
