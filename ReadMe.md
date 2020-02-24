# nodejs-aws-s3

- Repo này đã bị ignore file `config.json` có dạng như dưới:

```json
{
  "BUCKET": "created-by-api",
  "REGION": "ap-southeast-1",
  "AWS_ACCESS_KEY": "ACCESS_KEY",
  "AWS_SECRET_KEY": "SECRET_KEY"
}
```

- Sau khi thêm xong file `config.json` bạn có thể chạy project.

## Cài đặt gói phụ thuộc

- `npm i`

## Khởi tạo Bucket trên AWS

- `node makeBucket.js`

- Note: File này đang mở full các quyền để test khi chạy thật bạn nên xem các cấu hình `CORS, ACL` cẩn thận hơn.

## Test upload trực tiếp

- `node directUpload.js`

## Upload bằng signedURL

- Chạy server side: `node uploadWithSignedURL.js`

- Mở `index.html` trên trình duyệt web (khuyến nghị đã test trên chrome) chọn 1 file ảnh chờ 1 lát check trong `console` hoặc trên aws.
