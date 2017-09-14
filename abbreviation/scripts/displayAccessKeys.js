/**
 * Created by lixx on 2017/4/23.
 */
function displayAccessKeys(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)
        return false;
    //提取文档中所有的链接
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
//循环提取的链接
    for(var i=0;i<links.length;i++){
        if(!links[i].getAttribute("accesskey")) continue;
        //提取acesskey的属性值
        var key =links[i].getAttribute("accesskey");
        //提取链接的文本值
        var text = links[i].lastChild.nodeValue;
        //把他们添加到数组里
        akeys[key] = text;
    }
    //创建“快速访问键清单”
    var list = document.createElement("ul");
    for(key in akeys){
        //创建字符串添加到项里面
        var str = key + ":"+akeys[key];
        //创建清单里的列表项
        var acekey_li = document.createElement("li");
        var li_text = document.createTextNode(str);
        acekey_li.appendChild(li_text);
        //添加列表项到清单里
        list.appendChild(acekey_li);

    }
//创建一个h3标题，并添加到body
    var h3_node = document.createElement("h3");
    var h3_text = document.createTextNode("AccessKeys");
    h3_node.appendChild(h3_text);

    document.body.appendChild(h3_node);
    //添加“快速访问键清单”到body
    document.body.appendChild(list);
}
addLoadEvent(displayAccessKeys);
