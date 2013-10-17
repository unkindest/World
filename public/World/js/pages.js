$(function(e) {   
    $(document).on('click',"li.lipagination",function(){
        
        $("#tbody *").remove();
        $("#tbody").append("<tr><td colspan='"+COLS+"'><div id='progressbar'></div></td></tr>");
        $( "#progressbar" ).progressbar({
            value: false
        });
        $("li.lipagination").removeClass('active');
        $(this).addClass("active");
        var page =$(this).attr("value");
        var maxResult = $("#maxResult button.btn.active").attr("value");
        $("#tbody").load(BASE_URL +'/world/country/index/'+maxResult+'&'+page);
    });
        
    $("#maxResult button").click(function() {
        $("#tbody *").remove();
        $("#tbody").append("<tr><td colspan='"+COLS+"'><div id='progressbar'></div></td></tr>");
        $( "#progressbar" ).progressbar({
            value: false
        });
        $("#maxResult button").removeClass('active');
        $(this).addClass("active");
        var maxResults=$(this).attr("value");
        var pages = Math.ceil(RESULTS/maxResults);
        $("#ulpagination li").remove();
        for (var i=1;i<=pages;i++){
            cname = (1==i)? 'lipagination active' : 'lipagination';
            li =$("#ulpagination").append('<li class="'+ cname+'" value="'+ i +'"><a>'+i+'</a></li>');            
        }
        $("#tbody").load(BASE_URL +'/world/country/index/'+maxResults+'&'+1);      
    });
    
});

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


