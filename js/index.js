/**导航栏**/
$(".service").hover(function(){
	var $div=$(this).children(".vice");
	$div.toggle();
	if($div.css("display")=="block"){
		$div.prev().addClass("hover");
	}else{
		$div.prev().removeClass("hover");
	}
});
$(".case").hover(function(){
	var $case=$(this).children(".typical_case");
	$case.toggle();
	if($case.css("display")=="block")
		$case.prev().addClass("hover");
	else
		$case.prev().removeClass("hover");
});
//轮播效果图
//var imgs=[
//	{"img":"images/8fd8c9d7-ec2c-49ff-aa2e-030717bb7c1b.jpg"},
//	{"img":"images/94da7e0b-b330-43cf-91e1-e18b5f155f13.jpg"},
//	{"img":"images/6bc21d83-abb5-4d48-b417-dc15801c6de0.jpg"},
//	{"img":"images/9d7c813a-4dbd-4e05-8bef-8db943817eda.jpg"}
//];
//var slider={
//	LIWIDTH:0,
//	$imgs:null,
//	$idxs:null,
//	DURATION:1000,
//	WAIT:4000,
//	timer:null,
//	init(){
//		this.LIWIDTH=
//			parseFloat($("#carousel").css("width"));
//		this.$imgs=$("#imgs");
//		this.$idxs=$("#indexs");
//		this.updateView();
//		this.startAuto();
//	},
//	updateView(){
//		for(var i=0,imgsHTML="",idxsHTML="";
//		i<imgs.length;i++){
//			imgsHTML+=`<li><img src="${imgs[i].img}"/></li>`
//			idxsHTML+=`<li>${i+1}</li>`;
//		}
//		this.$imgs.html(imgsHTML)
//				.css("width",imgs.length*this.LIWIDTH);
//		this.$idxs.html(idxsHTML);
//	},
//	startAuto(){
//		this.timer=setTimeout(
//			()=>this.move(1),this.WAIT);
//	},
//	move(n){
//		if(n>0){
//			this.$imgs.animate({
//				left:-n*this.LIWIDTH
//			},this.DURATION,()=>{
//				imgs=imgs.concat(imgs.splice(0,n));
//				this.updateView();
//				this.$imgs.css("left",0);
//				this.startAuto();
//			});
//		}else{
//			n*=-1;
//			imgs=imgs.splice(-n,n).concat(imgs);
//			this.updateView();
//			var left=parseFloat(this.$imgs.css("left"));
//			this.$imgs.css("left",left-n*this.LIWIDTH);
//			this.$imgs.animate(
//			{left:0},
//				this.DURATION,
//				()=>THIS.STARTAuto()
//			);
//		}
//	}
//}
//slider.init();
	var index=0;
	var playCount=null;
	$(".but li").hover(function(){
		clearInterval(playCount);
		$(this).addClass("current").siblings(".current").removeClass("current");
		var index=$(this).index();
		$(".images li").eq(index).fadeIn(2000).siblings().fadeOut();
	}).mouseout(function(){
		auto_play();
	});
function auto_play(){
	playCount=setInterval(function(){
		index++;
		if(index>4){
			index=0
		};
		$(".but li").eq(index).addClass('current').siblings().removeClass("current");
		$(".images li").eq(index).fadeIn(2000).siblings().fadeOut();
	},3000);
};
auto_play();
/**图片缩放隐藏**/
$(".client_case>ul").on("click","li>a",function(e){
	e.preventDefault();
	if(!$(this).parent().hasClass(".driving")){
		$(this).parent().addClass("driving").siblings(".driving").removeClass("driving");
	}
	var i=$(".bound>li>a").index(this);
	//console.dir(i);
	$(this).parent().parent().parent().siblings(`:eq(${i})`)
			.addClass("d1").siblings(".d1").removeClass("d1");
});
/**新闻资讯**/
$('.news ul').on("mouseenter","li",function(){
	if(!$(this).hasClass(".news_hover")){
		$(this).addClass("news_hover").siblings(".news_hover").removeClass("news_hover");
		var i=$(this).index();
	}
	$(this).parent().siblings("div").children().eq(i).addClass("play").siblings(".play")
		.removeClass("play");
});
//建站知识
$(".news_top").on("mouseover","li",function(e){
	e.preventDefault();
	if(!$(this).hasClass("news_core")) {
		$(this).addClass("news_core").siblings(".news_core").removeClass("news_core");
		var i = $(this).index();
		console.log(i);
	}
	$(this).parent().siblings("ul").eq(i).addClass("news_content").siblings(".news_content").removeClass("news_content");
})

//中间部分 鼠标移入
$(function(){
	$(".a3").on("mouseover","a",function(e){
		e.preventDefault();
		var i=$(this).index();
		$(".rotate").animate({left:-i*1320});
		$(this).addClass("active").siblings(".active").removeClass("active");
	})
})

//1934
//$("#year").hover(function (direction) {
//	console.log(123)
//	if (direction == "down") {
//		numAdd($(".num").eq(0));
//		numAdd($(".num").eq(1));
//		numAdd($(".num").eq(2));
//		numAdd($(".num").eq(3));
//		//numAdd($(".num").eq(4));
//	}
//
//}, { offset: "66.7%" });
//function numAdd(el) {
//	var lastNum = el.data("num");
//	el.text(0);
//	var i = 0;
//	var timer = setInterval(function () {
//		el.text(i += 1);
//		if (i >= lastNum) {
//			clearInterval(timer);
//			el.text(lastNum);
//		}
//		;
//	}, 110)
//}









