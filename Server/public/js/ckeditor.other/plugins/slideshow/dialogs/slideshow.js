﻿function removeDomainFromUrl(f){return f.replace(/^https?:\/\/[^\/]+/i,"")}
var IMG_PARAM={URL:0,TITLE:1,ALT:2,WIDTH:3,HEIGHT:4},pluginPath=removeDomainFromUrl(CKEDITOR.plugins.get("slideshow").path),BASE_PATH=removeDomainFromUrl(CKEDITOR.basePath),SCRIPT_JQUERY=pluginPath+"3rdParty/jquery.min.js",SCRIPT_ADDGAL=pluginPath+"3rdParty/ad-gallery/jquery.ad-gallery.min.js",CSS_ADDGAL=pluginPath+"3rdParty/ad-gallery/jquery.ad-gallery.css",SCRIPT_FANCYBOX=pluginPath+"3rdParty/fancybox2/jquery.fancybox.pack.js?v=2.1.5",CSS_FANCYBOX=pluginPath+"3rdParty/fancybox2/jquery.fancybox.css?v=2.1.5";
function var_dump(f,j){var k="";j||(j=0);var p="",g;for(g=0;g<j+1;g+=1)p+="    ";if("object"==typeof f)for(var l in f)f.hasOwnProperty(l)&&(g=f[l],"object"==typeof g?(k+=p+"'"+l+"' ...\n",k+=var_dump(g,j+1)):k+=p+"'"+l+"' => \""+g+'"\n');else k="===>"+f+"<===("+typeof f+")";return k}var listItem=function(f){return f.type==CKEDITOR.NODE_ELEMENT&&f.is("li")},ULItem=function(f){return f.type==CKEDITOR.NODE_ELEMENT&&f.is("ul")},iFrameItem=function(f){return f.type==CKEDITOR.NODE_ELEMENT&&f.is("iframe")};
Array.prototype.pushUnique=function(f){var j;for(j=0;j<this.length;j+=1)if(this[j][0]==f[0])return-1;this.push(f);return this.length-1};Array.prototype.updateVal=function(f,j){var k;for(k=0;k<this.length;k+=1)if(this[k][0]==f)return this[k]=[f,j],!0;this[k]=[f,j];return!1};Array.prototype.getVal=function(f){var j;for(j=0;j<this.length;j+=1)if(this[j][0]==f)return this[j][1];return null};
CKEDITOR.dialog.add("slideshowDialog",function(f){function j(a,b,d,c,e){a=g(a);c=c?c.createElement("OPTION"):document.createElement("OPTION");if(a&&c&&"option"==c.getName())CKEDITOR.env.ie?(isNaN(parseInt(e,10))?a.$.options.add(c.$):a.$.options.add(c.$,e),c.$.innerHTML=0<b.length?b:"",c.$.value=d):(null!==e&&e<a.getChildCount()?a.getChild(0>e?0:e).insertBeforeMe(c):a.append(c),c.setText(0<b.length?b:""),c.setValue(d));else return!1;return c}function k(a){return(a=g(a))?a.$.selectedIndex:-1}function p(a,
b){a=g(a);if(0>b)return null;var d=a.getChildren().count();a.$.selectedIndex=b>=d?d-1:b;return a}function g(a){return a&&a.domId&&a.getInputElement().$?a.getInputElement():a&&a.$?a:!1}function l(a){!0!=a.openCloseStep&&(a.getContentElement("slideshowinfoid","framepreviewid").isVisible()?t(a):q(a))}function r(a){a=a.getContentElement("slideshowinfoid","imglistitemsid");return k(a)}function q(a){var b=a.getContentElement("slideshowinfoid","imglistitemsid"),b=k(b),d=a.imagesList[b],b=a.getContentElement("slideshowinfoid",
"imgtitleid"),b=g(b);b.setValue(d[1]);b=a.getContentElement("slideshowinfoid","imgdescid");b=g(b);b.setValue(d[2]);b=a.getContentElement("slideshowinfoid","imgpreviewid");b=g(b);b.setHtml('<div style="text-align:center;"> <img src="'+d[0]+'" title="'+d[1]+'" alt="'+d[2]+'" style=" max-height: 200px;  max-width: 350px;"> </div>');b=a.getContentElement("slideshowinfoid","framepreviewid");a=a.getContentElement("slideshowinfoid","imgparamsid");b=g(b);b.hide();a=g(a);a.show()}function u(a,b){var d=a.getContentElement("slideshowinfoid",
"imglistitemsid"),d=g(d),c=k(d);if(1!=d.getChildren().count()&&!(-1==b&&0==c)&&!(1==b&&c==d.getChildren().count()-1)){var e=d,f=a.getParentEditor().document,e=g(e),d=k(e);if(!(0>d)&&(c=d+b,c=0>c?0:c,c=c>=e.getChildCount()?e.getChildCount()-1:c,d!=c)){var h=/(^IMG_\d+)/,o=e.getChild(c),i=o.getText(),l=o.getValue(),i=i.replace(h,"IMG_"+d);var m,o=c;m=g(e);0>o||(o=m.getChild(o),o.setText(i),o.setValue(l));o=e.getChild(d);i=o.getText();l=o.getValue();o.remove();i=i.replace(h,"IMG_"+c);j(e,i,l,!f?null:
f,c);p(e,c);e=a.imagesList[d];a.imagesList[d]=a.imagesList[c];a.imagesList[c]=e}v(a)}}function t(a){var b=a.getContentElement("slideshowinfoid","framepreviewid"),d=a.getContentElement("slideshowinfoid","imgparamsid"),d=g(d);d.hide();b=g(b);b.show();v(a)}function v(a){var b=300;!0==a.params.getVal("showthumbid")?b-=120:!0==a.params.getVal("showcontrolid")&&(b-=30);if(0!=a.imagesList.length){var d=a.getContentElement("slideshowinfoid","imglistitemsid"),c=k(d);0>c&&(c=0);var d=a.getContentElement("slideshowinfoid",
"framepreviewid"),e="",e=e+"<head>",e=e+('<script src="'+SCRIPT_JQUERY+'" type="text/javascript"><\/script>'),e=e+('<script type="text/javascript" src="'+SCRIPT_ADDGAL+'"><\/script>'),e=e+('<link rel="stylesheet" type="text/css" href="'+CSS_ADDGAL+'" />');!0==a.params.getVal("openOnClickId")&&(e+='<link rel="stylesheet" type="text/css" href="'+CSS_FANCYBOX+'" />',e+='<script type="text/javascript" src="'+SCRIPT_FANCYBOX+'"><\/script>',e+='<script type="text/javascript">',e+=w(a),e+="<\/script>");
e+='<script type="text/javascript">';e+=x(a,c,436,b);e+="<\/script>";e+="</head>";e+="<body>";c=y(a);e+=c.getOuterHtml();e+="</body>";e+="";d=g(d);(c=d.getFirst(iFrameItem))&&c.remove();var f=null;!0==a.params.getVal("showthumbid")?b+=120:!0==a.params.getVal("showcontrolid")&&(b+=30);a=CKEDITOR.dom.element.createFromHtml('<iframe style="width:496px;height:'+b+'px;background:azure; " class="cke_pasteframe" frameborder="10"  allowTransparency="false" role="region" scrolling="no"></iframe>');a.setAttribute("name",
"totoFrame");a.setAttribute("id","totoFrame");a.on("load",function(){if(f==null){f=this.$;var a;if(f.contentDocument)a=f.contentDocument;else if(f.contentWindow)a=f.contentWindow.document;if(a){var b=e;a.open();a.writeln(b);a.close()}else alert("Cannot inject dynamic contents into iframe.")}});d.append(a)}}function m(){var a=this.getDialog();if(a.newSlideShowMode)a.slideshowDOM.setAttribute("data-"+this.id,this.getValue());else switch(this.type){case "checkbox":this.setValue("true"==a.slideshowDOM.getAttribute("data-"+
this.id));break;case "text":this.setValue(a.slideshowDOM.getAttribute("data-"+this.id));break;case "select":this.setValue(a.slideshowDOM.getAttribute("data-"+this.id))}}function i(){var a=this.getDialog();a.params.updateVal(this.id,this.getValue());l(a)}function z(a){a.previewImage&&(a.previewImage.removeListener("load",s),a.previewImage.removeListener("error",n),a.previewImage.removeListener("abort",n),a.previewImage.remove(),a.previewImage=null);a.imagesList=null;a.params=null;a.slideshowDOM=null;
for(var b=a.getContentElement("slideshowinfoid","imglistitemsid"),b=g(b);b.getChild(0)&&b.getChild(0).remove(););a.openCloseStep=!1}function A(a){for(var b="";b.length<a;)b+=Math.random().toString(36).substring(2);return b.substring(0,a)}function x(a,b,d,c){var e="ad-gallery_"+a.params.getVal("slideshowid"),f,g="";f="(function($) {$(function() {";0==c&&(c=a.params.getVal("pictheightid"));0==d&&(d="false");!1==a.params.getVal("showtitleid")&&(g=",  hooks: { displayDescription: function(image) {}}");
b="loader_image: '"+pluginPath+"3rdParty/ad-gallery/loader.gif', width:"+d+", height:"+c+", start_at_index: "+b+", animation_speed: "+a.params.getVal("animspeedid")+g+", update_window_hash: false, effect: '"+a.params.getVal("transitiontypeid")+"',";a=" slideshow: { enable: true, autostart: "+a.params.getVal("autostartid")+", start_label: '"+h.labelStart+"', stop_label: '"+h.labelStop+"', speed: "+1E3*a.params.getVal("speedid")+"}";return f+("   var galleries = $('#"+e+"').adGallery({"+b+a+"});")+
"});})(jQuery);"}function w(a){a="ad-gallery_"+a.params.getVal("slideshowid");return"(function($) {$(function() {"+('$("#'+a+'").on("click",".ad-image",function(){')+"var imgObj =$(this).find(\"img\");var isrc=imgObj.attr(\"src\");var ititle=null;var idesc=null;var iname=isrc.split('/');iname=iname[iname.length-1];var imgdescid=$(this).find(\".ad-image-description\");if(imgdescid){ititle=$(this).find(\".ad-description-title\");if(ititle)ititle=ititle.text();if(ititle!='')ititle='<big>'+ititle+'</big>';idesc=$(this).find(\"span\");if(idesc)idesc=idesc.text();if(idesc!=''){if(ititle!='')ititle=ititle+'<br>';idesc='<i>'+idesc+'</i>';}}$.fancybox.open({href:isrc,beforeLoad:function(){this.title=ititle+idesc;},});});});})(jQuery);"}
function y(a){var b=a.params.getVal("slideshowid"),d="ad-gallery_"+b,c="display: block;",e="display: block;";!1==a.params.getVal("showthumbid")&&(c="display: none;");!1==a.params.getVal("showcontrolid")&&(e="visibility: hidden;");var h=f.document.createElement("div");h.setAttribute("id",b);h.setAttribute("class","slideshowPlugin");h.setAttribute("contenteditable","false");b=h.append("div");b.setAttribute("class","ad-gallery");b.setAttribute("contenteditable","false");b.setAttribute("id",d);d=b.append("div");
d.setAttribute("class","ad-image-wrapper");d.setAttribute("contenteditable","false");d=b.append("div");d.setAttribute("class","ad-controls");d.setAttribute("contenteditable","false");d.setAttribute("style",e);e=b.append("div");e.setAttribute("class","ad-nav");e.setAttribute("style",c);e.setAttribute("contenteditable","false");c=e.append("div");c.setAttribute("class","ad-thumbs");c.setAttribute("contenteditable","false");c=c.append("ul");c.setAttribute("class","ad-thumb-list");c.setAttribute("contenteditable",
"false");for(e=0;e<a.imagesList.length;e+=1)b=c.append("li"),b.setAttribute("contenteditable","false"),b=b.append("a"),b.setAttribute("href",removeDomainFromUrl(a.imagesList[e][IMG_PARAM.URL])),b.setAttribute("contenteditable","false"),b=b.append("img"),b.setAttribute("src",removeDomainFromUrl(a.imagesList[e][IMG_PARAM.URL])),b.setAttribute("title",a.imagesList[e][IMG_PARAM.TITLE]),b.setAttribute("alt",a.imagesList[e][IMG_PARAM.ALT]),b.setAttribute("contenteditable","false"),b.setAttribute("width",
a.imagesList[e][IMG_PARAM.WIDTH]),b.setAttribute("height",a.imagesList[e][IMG_PARAM.HEIGHT]);return h}var h=f.lang.slideshow,s=function(){var a=this.previewImage;a.removeListener("load",s);a.removeListener("error",n);a.removeListener("abort",n);a=BASE_PATH+"plugins/slideshow/icons/placeholder.png";1==this.imagesList.length&&this.imagesList[0][IMG_PARAM.URL]==a&&(a=this.getContentElement("slideshowinfoid","imglistitemsid"),a=g(a),this.imagesList.splice(0,1),a.getChild(0).remove());var b=this.previewImage,
a=b.$.src,d=b.$.width/b.$.height,c=b=50;1<d?c/=d:b*=d;d=this.getContentElement("slideshowinfoid","imglistitemsid");b=this.imagesList.pushUnique([a,"","",b.toFixed(0),c.toFixed(0)]);0<=b&&(j(d,"IMG_"+b+" : "+a.substring(a.lastIndexOf("/")+1),a,this.getParentEditor().document),p(d,b),l(this))},n=function(){var a=this.previewImage;a.removeListener("load",s);a.removeListener("error",n);a.removeListener("abort",n)};return{title:h.dialogTitle,width:500,height:600,resizable:CKEDITOR.DIALOG_RESIZE_NONE,buttons:[CKEDITOR.dialog.okButton(f,
{label:"OkCK",style:"display:none;"}),CKEDITOR.dialog.cancelButton,{id:"myokbtnid",type:"button",label:"OK",title:h.validModif,accessKey:"C",disabled:!1,onClick:function(){var a=this.getDialog(),b={};a.openCloseStep=!0;a.commitContent(a);var d=y(a),c;for(c=0;c<a.params.length;c+=1)d.data(a.params[c][0],a.params[c][1]);c=CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",src:SCRIPT_JQUERY}});d.append(c);c=CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",
src:SCRIPT_ADDGAL}});d.append(c);!0==a.params.getVal("openOnClickId")&&(c=CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript"}}),c.setText("(function($) { $('head').append('<link rel=\"stylesheet\" href=\""+CSS_FANCYBOX+'" type="text/css" />\'); })(jQuery);'),d.append(c),c=CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",src:SCRIPT_FANCYBOX}}),d.append(c),c=CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript"}}),c.setText(w(a)),
d.append(c));c=CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript"}});c.setText("(function($) { $('head').append('<link rel=\"stylesheet\" href=\""+CSS_ADDGAL+'" type="text/css" />\'); })(jQuery);');d.append(c);c=CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript"}});c.setText(x(a,0,0,0));d.append(c);a.imagesList.length&&(b.backgroundImage='url("'+a.imagesList[0][IMG_PARAM.URL]+'")');b.backgroundSize="50%";b.display="block";d=f.createFakeElement(d,
"cke_slideShow","slideShow",!1);d.setAttributes({});d.setStyles(b);a.fakeImage?(d.replace(a.fakeImage),f.getSelection().selectElement(d)):f.insertElement(d);z(a);a.hide()}}],contents:[{id:"slideshowinfoid",label:"Basic Settings",align:"center",elements:[{type:"text",id:"id",style:"display:none;",onLoad:function(){this.getInputElement().setAttribute("readOnly",!0)}},{type:"text",id:"txturlid",style:"display:none;",label:h.imgList,onChange:function(){var a=this.getDialog(),b=this.getValue();if(0<b.length){var d=
a.previewImage;d.on("load",s,a);d.on("error",n,a);d.on("abort",n,a);d.setAttribute("src",b)}}},{type:"button",id:"browse",hidden:"true",style:"display:inline-block;margin-top:0px;",filebrowser:{action:"Browse",target:"slideshowinfoid:txturlid",url:f.config.filebrowserImageBrowseUrl||f.config.filebrowserBrowseUrl},label:h.imgAdd},{type:"vbox",align:"center",children:[{type:"html",align:"center",id:"framepreviewtitleid",style:"font-family: Amaranth; color: #1E66EB;\tfont-size: 20px; font-weight: bold;",
html:h.previewMode},{type:"html",id:"framepreviewid",align:"center",style:"width:500px;height:320px",html:""},{type:"hbox",id:"imgparamsid",style:"display:none;width:500px;",height:"325px",children:[{type:"vbox",align:"center",width:"400px",children:[{type:"text",id:"imgtitleid",label:h.imgTitle,onChange:function(){var a=this.getDialog(),b=this.getValue();a.imagesList[r(a)][IMG_PARAM.TITLE]=b;q(a)},onBlur:function(){var a=this.getDialog(),b=this.getValue();a.imagesList[r(a)][IMG_PARAM.TITLE]=b;q(a)}},
{type:"text",id:"imgdescid",label:h.imgDesc,onChange:function(){var a=this.getDialog(),b=this.getValue();a.imagesList[r(a)][IMG_PARAM.ALT]=b;q(a)},onBlur:function(){var a=this.getDialog(),b=this.getValue();a.imagesList[r(a)][IMG_PARAM.ALT]=b;q(a)}},{type:"html",id:"imgpreviewid",style:"width:400px;height:200px;",html:"<div>xx</div>"}]}]},{type:"hbox",align:"center",height:110,widths:["25%","50%"],children:[{type:"vbox",children:[{type:"checkbox",id:"autostartid",label:h.autoStart,"default":"checked",
style:"margin-top:15px;",onChange:i,commit:i,setup:m},{type:"checkbox",id:"showtitleid",label:h.showTitle,"default":"checked",onChange:i,commit:i,setup:m},{type:"checkbox",id:"showcontrolid",label:h.showControls,"default":"checked",onChange:i,commit:i,setup:m},{type:"checkbox",id:"showthumbid",label:h.showThumbs,"default":"checked",onChange:i,commit:i,setup:m},{type:"checkbox",id:"openOnClickId",label:h.openOnClick,"default":"checked",onChange:i,commit:i,setup:m}]},{type:"select",id:"imglistitemsid",
label:h.picturesList,multiple:!1,style:"height:125px;width:250px",items:[],onChange:function(){var a=this,b=a.getDialog(),a=g(a),d=0,c,e;for(c=0;c<a.getChildren().count();c+=1)if(e=a.getChild(c),e.$.selected){d=c;break}p(a,d);l(b)}},{type:"vbox",children:[{type:"button",id:"previewbtn",style:"margin-top:15px;margin-left:25px;",label:h.previewMode,onClick:function(){t(this.getDialog())}},{type:"button",id:"removeselectedbtn",style:"margin-left:25px;",label:h.imgDelete,onClick:function(){var a=this.getDialog(),
b=a.getContentElement("slideshowinfoid","imglistitemsid"),b=g(b),d=!1,c;for(c=b.getChildren().count()-1;0<=c;c--)b.getChild(c).$.selected&&(a.imagesList.splice(c,1),b.getChild(c).remove(),d=!0);d&&(0==a.imagesList.length&&(d=BASE_PATH+"plugins/slideshow/icons/placeholder.png",j(b,"IMG_0 : "+d.substring(d.lastIndexOf("/")+1),d,a.getParentEditor().document),a.imagesList.pushUnique([d,h.imgTitle,h.imgDesc,"50","50"])),p(b,0),l(a))}},{type:"button",id:"editselectedbtn",style:"margin-left:25px;",label:h.imgEdit,
onClick:function(){q(this.getDialog())}},{type:"hbox",children:[{type:"button",id:"upselectedbtn",style:"width:32px; margin-left:25px;",label:h.arrowUp,onClick:function(){u(this.getDialog(),-1)}},{type:"button",id:"downselectedbtn",style:"width:32px;",label:h.arrowDown,onClick:function(){u(this.getDialog(),1)}}]}]}]},{type:"hbox",children:[{type:"text",id:"pictheightid",label:h.pictHeight,maxLength:3,style:"width:100px;","default":"300",onChange:function(){!1==/^\d+$/.test(this.getValue())&&this.setValue(300);
this.getDialog().params.updateVal(this.id,this.getValue());l(this.getDialog())},commit:i,setup:m},{type:"text",id:"speedid",label:h.displayTime,maxLength:3,style:"width:100px;","default":"5",onChange:function(){!1==/^\d+$/.test(this.getValue())&&this.setValue(5);this.getDialog().params.updateVal(this.id,this.getValue());l(this.getDialog())},commit:i,setup:m},{type:"text",id:"animspeedid",label:h.transitionTime,style:"width:100px;",maxLength:4,"default":"500",onChange:function(){!1==/^\d+$/.test(this.getValue())&&
this.setValue(500);this.getDialog().params.updateVal(this.id,this.getValue());l(this.getDialog())},commit:i,setup:m},{type:"select",id:"transitiontypeid",label:h.transition,items:[[h.tr1,"none"],[h.tr2,"resize"],[h.tr3,"slide-vert"],[h.tr4,"slide-hori"],[h.tr5,"fade"]],"default":"resize",style:"width:100px;",commit:i,setup:m,onChange:i}]}]}]}],onLoad:function(){},onShow:function(){this.dialog=this;this.slideshowDOM=null;this.openCloseStep=!0;var a=this.fakeImage=null;this.imagesList=[];this.params=
[];this.previewImage=f.document.createElement("img");this.okRefresh=!0;var b=this.getSelectedElement();b&&(b.data("cke-real-element-type")&&"slideShow"==b.data("cke-real-element-type"))&&(this.fakeImage=b,a=f.restoreRealElement(b));if(a){this.slideshowDOM=a;b=a.getElementsByTag("ul");b=null==b?null:1==b.count()?b.getItem(0):null;if(null==b)return alert("BIG Problem slideShowContainer !!"),!1;var d=a.getAttribute("id");if(null==d)return alert("BIG Problem slideshowid !!"),!1;this.params.push(["slideshowid",
d]);for(var c,e,g,i,k=b.$.getElementsByTagName("img"),m=this.getContentElement("slideshowinfoid","imglistitemsid"),b=0;b<k.length;b+=1){c=k[b];d=c.src;e=c.width;0==e&&(e=c.naturalWidth);if(0==e)g=e=50;else if(g=c.height,0==g&&(g=c.naturalHeight),0==g)g=e=50;e/=g;i=g=50;1<e?i/=e:g*=e;c=this.imagesList.pushUnique([d,c.title,c.alt,g,i]);0<=c&&j(m,"IMG_"+c+" : "+d.substring(d.lastIndexOf("/")+1),d,this.getParentEditor().document)}p(m,0);l(this);var a=a.$.dataset,n;for(n in a)this.params.push([n,a[n]]);
this.setupContent(this,!0);this.newSlideShowMode=!1}else this.params.push(["slideshowid","cke_"+A(8)+"_slideShow"]),n=this.getContentElement("slideshowinfoid","imglistitemsid"),a=BASE_PATH+"plugins/slideshow/icons/placeholder.png",j(n,"IMG_0 : "+a.substring(a.lastIndexOf("/")+1),a,this.getParentEditor().document),this.imagesList.pushUnique([a,h.imgTitle,h.imgDesc,"50","50"]),p(n,0),l(this),this.commitContent(this);this.openCloseStep=!1;t(this)},onOk:function(){return!1},onHide:function(){z(this)}}});