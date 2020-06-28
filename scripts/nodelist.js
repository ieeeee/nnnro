(function () {
    axios.get('https://nnn3ro.link/link/nkWATEM7Y5JBxvKP?mu=4', {
    }).then(res => {
        console.log('数据是:', res);
        
        nativeObject = YAML.parse(res);
        console.log('数据是:', nativeObject);
    }).catch((e) => {
        console.log('获取数据失败');
    });
})();