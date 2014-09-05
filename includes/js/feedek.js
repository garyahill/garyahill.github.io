/*
* FeedEk jQuery RSS/ATOM Feed Plugin 
* http://jquery-plugins.net/FeedEk/FeedEk.html
* Author : Engin KIZIL 
* http://www.enginkizil.com
*/

(function($){
	$.fn.FeedEk=function(opt){
		var def={FeedUrl:'',MaxCount:5,ShowDesc:true,ShowPubDate:true};
		if(opt){
			$.extend(def,opt)
		}

        var idd=$(this).attr('id');
        var pubdt;

        //Exit if we don't have access to remote data and the source isn't local
		if(def.FeedUrl==null||def.FeedUrl=='' && def.Source !== 'Local'){
			$('#'+idd).empty();
			return
		}

        //Empty out tag and show loader
        $('#'+idd).empty().append('<div style="text-align:left; padding:3px;"><img src="includes/img/loader.gif" /></div>');

        var displayFunction = function(data){

            var myData = (data.responseData !== undefined) ? data.responseData.feed.entries : data;

            $('#'+idd).empty();
            $('#'+idd).append('<h3 class="feedTitle">' + def.Title +'</h3><hr/>');
            $.each(myData,function(i,entry){
                $('#'+idd).append('<div class="ItemTitle"><a href="'+entry.link+'" target="_blank" >'+entry.title+'</a></div>');
                if(def.ShowPubDate){
                    pubdt=new Date(entry.publishedDate);$('#'+idd).append('<div class="ItemDate">'+pubdt.toLocaleDateString()+'</div>')
                }
                if(def.ShowDesc && def.Type != 'Tweets'){
                    $('#'+idd).append('<div class="ItemContent">'+entry.content+'</div>');
                }
                $('#'+idd).append('<hr/>');
            });
            $('#'+idd).append('<p class="feedFooter"><a href="' + def.SourceUrl + '">' + def.FooterText +'</a></p>');
        };

        if(def.Source === 'Local') {
            displayFunction(MYSITE.data.news);
        }
        else{
            $.ajax({
                url:'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+def.MaxCount+'&output=json&q='+encodeURIComponent(def.FeedUrl)+'&callback=?',
                dataType:'json',
                success:function(data){
                   displayFunction(data);
                }
            })
        }
    }
})(jQuery);
