这个例子虽然使用到eureka注册中心完成注册发现的功能，但是没有使用到微服务之间的调用的一些功能，所以即使只启动client皆可以
直接访问http://localhost:8762/hi?name=xixi，所以，后面继续扩展。