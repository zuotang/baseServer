# 安装 GM 模块, 用来处理图片

`sudo apt-get install imagemagick graphicsmagick`

# 添加新的商城

`http://www.yfyundong.com/web/newshop/[name]`

# 注册新的账号

```
curl -X POST \
  http://www.yfyundong.com/user/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: bc196e84-f4b3-3cfe-0dea-224e57dbc751' \
  -d '{
	"name":"lpy001",
	"password":"123456asd",
	"confirm_password":"123456asd"
}'
```
