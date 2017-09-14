/**
 * Created by lixx on 2017/4/21.
 */
function displayAbbreviations() {
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;

    //获取所有缩略语的节点
    var abbrElements = document.getElementsByTagName("abbr");
    if( abbrElements.length<1) return false;

    var defs = new Array();
    //循环提取所有缩略语的值及title里解释的值
    for (var i = 0; i < abbrElements.length; i++) {
        if(abbrElements[i].length<1) continue;
        var abbrExplations = abbrElements[i].getAttribute("title");
        var abbreviations = abbrElements[i].lastChild.nodeValue;
        defs[abbreviations]=abbrExplations;
    }

    //创建定义表
    var dlist = document.createElement("dl");

    for(abbreviations in defs){
        //创建“定义标题”，并把缩略语的值分别赋给它
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(abbreviations);
        dtitle.appendChild(dtitle_text);

       // 创建“定义描述”，并把title的值即缩略语的解释赋给它
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(defs[abbreviations]);
        ddesc.appendChild(ddesc_text);

        // 最后把“定义标题”和“定义描述”追加给“定义表”
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);

    }
    if(dlist.childNodes.length<1) return false;
//创建一个标题h2
    var h2_node = document.createElement("h2");
    var h2_text = document.createTextNode("Abbreviations");
    h2_node.appendChild(h2_text);

    //把h2追加给body
    document.getElementsByTagName("body")[0].appendChild(h2_node);

    //把定义表追加给body
    document.getElementsByTagName("body")[0].appendChild(dlist);
}
addLoadEvent(displayAbbreviations);
