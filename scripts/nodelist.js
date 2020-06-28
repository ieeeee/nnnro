(function () {
    /*axios.get('https://nnn3ro.link/link/nkWATEM7Y5JBxvKP?mu=4', {
    }).then(res => {
        console.log('数据是:', res);

        nativeObject = YAML.parse(res);
        console.log('数据是:', nativeObject);
    }).catch((e) => {
        console.log('获取数据失败');
    });*/
    jQuery(document).ready(function () {
        $.ajax({
            type: "get",
            async: false,
            url: "https://nnn3ro.link/link/nkWATEM7Y5JBxvKP?mu=4",
            dataType: "jsonp",
            //jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //jsonpCallback: "flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            success: function (json) {
                //alert('您查询到航班信息：票价： ' + json.price + ' 元，余票： ' + json.tickets + ' 张。');
                console.log('数据是:', json);
                nativeObject = YAML.parse(json);
                console.log('数据是:', nativeObject);
            },
            error: function () {
                alert('fail');
            }
        });
    });
})();