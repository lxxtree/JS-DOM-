/**
 * Created by lixx on 2017/4/22.
 */
function displayCitations(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //提取所有的blockquote节点
    var bqElemnets = document.getElementsByTagName("blockquote");
    //循环所有的blockquote节点
    for(var i=0;i<bqElemnets.length;i++){
        //如果没有没有cite属性，就跳出本循环，直接从下次循环开始，本次循环后面的语句也不再执行
        if(!bqElemnets[i].getAttribute("cite")) continue;
        //存储cite属性
        var url = bqElemnets[i].getAttribute("cite");
        //提取blockquote里的所有元素节点
        var bqEleChildren = bqElemnets[i].getElementsByTagName("*");
        if(bqEleChildren.length<1) continue;
        //提取blockquote的最后一个节点
        var bqlastChild = bqEleChildren[bqEleChildren.length-1];
        //创建一个链接标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //追加链接标记到blockquote的最后一个元素节点
        bqlastChild.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);
