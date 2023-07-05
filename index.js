const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
//const buffer = require('buffer');

const AWS = require('aws-sdk');
app.use(fileUpload());

AWS.config.update({
    accessKeyId: "AKIAUKIZHWPHHETKARGW",
    secretAccessKey: "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",
    region: "us-east-1"
})

app.post('/upload', async (req,res) => {

    const s3 = new AWS.S3();//create a cleint to interact with our packet

    const fileContent = new Buffer.from(req.files.data.data, 'binary')//data to be post in postman

    const params = {
        Bucket: 'fileupload1122',
        Key: req.files.data.name,
        Body: fileContent
    }
    s3.upload(params,(err,data) => {
        if(err){
            throw err
        }
        res.send({
            "response_code": 200,
            "response_message": "success",
            "response_data": data
        })
    })
})

app.listen(3000, () => {
    console.log("listing to port 3000");
})