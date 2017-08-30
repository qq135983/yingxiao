//头部切换效果
$(".top>ul>li").hover(function(){
    var $img=$(this).children("img");
    $img.toggle();
    if($img.css("display")=="block"){
        $img.prev().addClass("hover");
    }else{
        $img.prev().removeClass("hover");
    }
    var $ul=$(this).children("ul");
    $ul.toggle();
    if($ul.css("display")=="block"){
        $ul.prev().addClass("hover");
    }else{
        $ul.prev().removeClass("hover");
    }
})

//导航栏添加下边框
$(".navbar>ul>li").on("mouseenter",function(){
        $(this).children("a").css("border-bottom","2px solid #ff9900");
})
$(".navbar>ul>li").on("mouseleave",function(){
        $(this).children("a").css("border-bottom","0");
})
$(".navbar>ul>li").hover(function(){
    var $ios=$(this).children(".ios");
    $ios.toggle();
    if($ios.css("display")=="block"){
        $ios.prev().addClass("hover");
    }else{
        $ios.prev().removeClass("hover");
    }
})

//轮播效果图
var imgs=[
    {"i":0,"img":"images/shouji/8fd8c9d7-ec2c-49ff-aa2e-030717bb7c1b.jpg"},
    {"i":1,"img":"images/shouji/9d7c813a-4dbd-4e05-8bef-8db943817eda.jpg"},
    {"i":2,"img":"images/shouji/94da7e0b-b330-43cf-91e1-e18b5f155f13.jpg"},
    {"i":3,"img":"images/shouji/6bc21d83-abb5-4d48-b417-dc15801c6de0.jpg"},
];
var slider={
    LIWIDTH:0,
    $imgs:null,
    $indexs:null,
    DURATION:1000,
    WAIT:4000,
    timer:null,
    init(){
        this.LIWIDTH=parseFloat($("#slider").css("width"));
        this.$imgs=$("#imgs");
        this.$indexs=$("#index");
        this.updateView();
        this.startAuto();
        //鼠标进入事件委托
        this.$indexs.on("mouseover","li",e=>{
            if(!$(e.target).hasClass("move")){
                clearTimeout(this.timer);
                this.timer=null;
                this.$imgs.stop(true);
                var start=this.$indexs.children(".move").html();
                var end=$(e.target).html();
                this.move(end-start);
            }
        })
    },
    updateView(){//更新视图
        for(var i=0,imgsHTML="",indexHTML="";i<imgs.length;i++){
            imgsHTML+=`<li><img src="${imgs[i].img}"/></li>`;
            indexHTML+=`<li>${i+1}</li>`;
        }
        this.$imgs.html(imgsHTML).css("width",imgs.length*this.LIWIDTH);
        this.$indexs.html(indexHTML);
        this.$indexs.children(`:eq(${imgs[0].i})`).addClass("move");
    },
    startAuto(){//起始
      this.timer=setTimeout(
          ()=>this.move(1),this.WAIT);
    },
    move(n){
        if(n>0){
            this.$imgs.animate({
                left:-n*this.LIWIDTH
            },this.DURATION,()=>{
                imgs=imgs.concat(imgs.splice(0,n));
                this.updateView();
                this.$imgs.css("left",0);
                this.startAuto();
            });
        }else{
            n*=-1;
            imgs=imgs.splice(-n,n).concat(imgs);
            this.updateView();
            var left=parseFloat(this.$imgs.css("left"));
            this.$imgs.css("left",left-n*this.LIWIDTH);
            this.$imgs.animate({left:0},this.DURATION,()=>this.startAuto());
        }
    }
}
slider.init();

//点击轮播实现效果图

$(".app_lists").on("mouseover","li>a",function(e){
    e.preventDefault();
    $(this).parent().addClass("hover").siblings(".hover").removeClass("hover");
})

$(".app_lists>li>a").click(function(e){
    e.preventDefault();
    $(this)
})



//H5动画切换效果
$(".line").on("mouseover","li",function(){
    $(this).addClass("row").siblings(".row").removeClass("row");
    var i=$(this).index();
    //console.log(i);
   $(this).parent().siblings(".line_video")
            .children().eq(i).addClass("play")
            .siblings(".play").removeClass("play");
    //console.log(b);
});

//移动资讯切换
$(".nows_top").on("mouseover","li>a",function(e){
    e.preventDefault();
    var i=$(this).parent().index();
   // console.log(i);
    $(this).parent().parent().siblings().eq(i).addClass("hide").siblings(".hide").removeClass("hide");
   // console.log(b)
    $(this).addClass("hover").parent().siblings().children(".hover").removeClass("hover");

})
//合作伙伴
$(".nows_top>li").hover(function(){
    var i=$(this).index();
    $(this).parent().siblings().eq(i).addClass("show").siblings(".show").removeClass("show");
})
$(".app_lists").on('click','li',function(){
   var i=$(this).index();
    $(".click_imgs").animate({left:-i*1016});

});
$(function(){
    var i=$(".app_lists").children("li").index();
    $(".left").on("click",function(){
        i--;
        if(i<0){
            i=0;
        }
        $(".click_imgs").animate({left:-i*1016});
    })
    $(".right").on("click",function(){
        i++;
        if(i>4){
            i=4;
        }
        $(".click_imgs").animate({left:-i*1016});
    })


})
