var link = [];
link[0] = "site1.css";
link[1] = "site2.css";
link[2] = "site3.css";
link[3] = "site4.css";
link[4] = "site5.css";
link[5] = "site6.css";

var style = "";

$(function() {
    style = link[Math.floor(Math.random() * link.length )];
    if (document.createStyleSheet){
        document.createStyleSheet(style);
    }else{
        $('<link />',{
            rel :'stylesheet',
            type:'text/css',
            href: style
        }).appendTo('head');
    }
});

jQuery(document).ready(function(){
  if(style=="site6.css")
  {
   $('html').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('span').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
  }
});
