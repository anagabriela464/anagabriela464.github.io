

function byId(id) {
    return  typeof id==="string"?document.getElementById(id):id;
   }
   
     var index=0;
     timer=null;
     banner=byId("contenido-principal").getElementsByTagName("div");
     len=banner.length;
     dots=byId("carrusel").getElementsByTagName("span");
     prev=byId("prev");
     next=byId("next");
   
   
   function carrusel() {
     
     var main=byId("main");
     
     main.onmouseover=function () {
         if(timer){
             clearInterval(timer);
         }
     }
   
     main.onmouseout=function () {
         timer=setInterval(function () {
             index++;
             if(index>=len){
                 index=0;
             }
             imgVer();
         },2000);
     }
    
     main.onmouseout();
   
     
     for(var d=0;d<len;d++){
         
         dots[d].id=d;
   
         dots[d].onclick=function () {
   
           
             index=this.id;
             this.className="active";
             imgVer();
         }
     }
   
     
     next.onclick=function () {
         index++;
         if(index>=len){
             index=0;
         }
         imgVer();
     }
   
     prev.onclick=function () {
         index--;
         if(index<0){
             index=2;
         }
         imgVer();
     }
   
   }
   
   function imgVer() {
     for(var i=0;i<len;i++){
         banner[i].style.display='none';
         dots[i].className="";
     }
     banner[index].style.display='block';
     dots[index].className="active";
   }
   
   
   carrusel();