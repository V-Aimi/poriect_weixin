

$(document).ready(function(){
        
// 导航效果

$('#nav ul li').click(function(event) {
     var index=$(this).index()
       
    $('#nav ul li').eq(index).addClass('active current').siblings().removeClass('active current')

});
    
  
var $navcur = $(".nav-current");
var $nav = $("#nav");
var current = ".current";
var itemW = $nav.find(current).innerWidth();    //默认当前位置宽度
var defLeftW = $nav.find(current).position().left;  //默认当前位置Left值

//添加默认下划线
$navcur.css({width:itemW,left:defLeftW});

//hover事件
$nav.find("a").hover(function(){
    var index = $(this).index();    //获取滑过元素索引值
    var leftW = $(this).position().left;    //获取滑过元素Left值
    var currentW = $nav.find("a").eq(index).innerWidth();   //获取滑过元素Width值
    $navcur.stop().animate({
        left: leftW,
        width: currentW
    },300);
    
},function(){

 })  


 //轮播图
 /*鼠标移过，左右按钮显示*/
 $("#banner").hover(function(){ $(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ $(this).find(".prev,.next").fadeOut() });
 /*SuperSlide图片切换*/
 $("#banner").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});



// 返回顶部
 $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $("#scrollTop").fadeIn(); 
    } else {
      $("#scrollTop").fadeOut();
    }
  });
  // $("body").append("<div id=\"scrollTop\" style=\"border:1px solid #444;background:#333;color:#fff;text-align:center;padding:10px 13px 7px 13px;position:fixed;bottom:10px;right:10px;cursor:pointer;display:none;font-family:verdana;font-size:22px;\">^</div>");
  $("#scrollTop").click(function() {
    $("body,html").animate({scrollTop:0},800);
  });
        






});





























