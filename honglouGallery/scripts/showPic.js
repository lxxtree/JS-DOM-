/**
 * Created by lixx on 2017/4/14.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof oldonload  != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","Images/zuohua.jpg");
    placeholder.setAttribute("alt","my hongloumiage gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image.");
    description.appendChild(desctext);
    //document.getElementById("body")[0].appendChild(placeholder);
   // document.getElementById("body")[0].appendChild(description);
 var gallery = document.getElementById("imagegallery");
   insertAfter(placeholder,gallery);
   insertAfter(description,placeholder);
}

function prepareGallery(){
    if(!document.getElementsByName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }

   var gallery = document.getElementById("imagegallery");
   var links = gallery.getElementsByTagName("a");
   for(var i=0;i<links.length;i++) {
       links[i].onclick = function () {
           return showPic(this);
       }
   }
}


    function showPic(whichPic){
        if(!document.getElementById("placeholder")) return true;
        var source =whichPic.getAttribute("href");
        var placeholder = document.getElementById("placeholder");
        if(placeholder.nodeName!="IMG") return ture;
        placeholder.setAttribute("src",source);
        if(!document.getElementById("description")) return false;
        var text = whichPic.getAttribute("title")? whichPic.getAttribute("title"):"";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType==3){
            description.firstChild.nodeValue = text;
        }
        return false;
    }




//第一种方法
// window.onload = prepareGallery;
 //改进版
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);


/*function countBodyChildren() {
var body_element=document.getElementsByTagName("body")[0];
alert(body_element.childNodes.length);
}
window.onload=countBodyChildren;
*/
