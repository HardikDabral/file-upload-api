const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const AWS = require('aws-sdk');
app.use(fileUpload());

AWS.config.update({
    accessKeyId: "AKIAUKIZHWPHHETKARGW",
    secretAccessKey: "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",
    region: "us-east-1"
})

const s3 = new AWS.S3();

app.get('/list',async(req,res) => {

    const params = {
        Bucket: 'fileupload1122',
        MaxKeys:  20
    }
    let x = await s3.listObjectsV2(params).promise()
    res.send(x)
})

app.listen(3000, () => {
    console.log("listing to port 3000");
})