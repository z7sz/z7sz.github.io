<!--崩溃欺骗 离开选项卡一个表情,不离开一个表情-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2020/12/16/DgSvYC39JbOjTlM.png");
         document.title = '(ˉ(∞)ˉ)主人,快回来呀~~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2020/12/16/DgSvYC39JbOjTlM.png");
         document.title = '(๑>؂<๑)欢迎回来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });