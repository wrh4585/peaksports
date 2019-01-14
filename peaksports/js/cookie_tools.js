
//添加cookie
//参数 
//	键
//	值
//	失效日期(天)
//返回值:无

function addCookie(key,value,dayCount,path){
	var d= new Date();
	d.setDate(d.getDate()+dayCount);
	
		/*
	if(path!=undefined){
		document.cookie=key+"="+value+";expires="+d.toGMTString()+";path="+path;	
	}else{
		document.cookie=key+"="+value+";expires="+d.toGMTString();
	}
	*/
	
	var str = key+"="+escape(value)+";expires="+d.toGMTString();	
	if(path!=undefined){
		str+=";path="+path;	
	}	
	document.cookie = str;
}
//获取cookie
//参数:  键
//返回值: 值
function getCookie(key){
	var str = unescape(document.cookie);
	//将字符串分割成数组
	var arr = str.split("; ");//此处注意是;加空格
	//遍历数组，查找键
	for(var i in arr){
		if(arr[i].indexOf(key+"=") == 0){
			return arr[i].substring((key+"=").length);
		}
	}
	
	return null;	
}

//删除cookie
//参数 : 键
//返回值:无
function removeCookie(key){
	addCookie(key,"xx",-1);
}//删除键即可删除cookie 故意上面的函数第二个参数随便穿一个即可，无实际意义
