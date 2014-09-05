/*
* FeedEk jQuery RSS/ATOM Feed Plugin 
* http://jquery-plugins.net/FeedEk/FeedEk.html
* Author : Engin KIZIL 
* http://www.enginkizil.com
*/


/*
  this plugin has been modified by Gary Hill
  displays 'local data'
 */

(function($){
	$.fn.FeedEk=function(opt){
		var def={FeedUrl:'',MaxCount:5,ShowDesc:true,ShowPubDate:true};
		if(opt){
			$.extend(def,opt)
		}

        var idd=$(this).attr('id');
        var pubdt, localData, entry;

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

            for (var i = 0, l = myData.length; i<l; i++) {

                entry = myData[i];
                if (def.Type === 'News') {
                    $('#' + idd).append('<div class="NewsTitle">' + entry.title + '</a></div>');
                }
                else {
                    $('#' + idd).append('<div class="ItemTitle"><a href="' + entry.link + '" target="_blank" >' +
                    entry.title + '</a></div>');
                }

                if (def.ShowPubDate) {
                    pubdt = new Date(entry.publishedDate);
                    $('#' + idd).append('<div class="ItemDate">' + pubdt.toLocaleDateString() + '</div>')
                }
                if (def.ShowDesc && def.Type != 'Tweets') {
                    $('#' + idd).append('<div class="ItemContent">' + entry.content + '</div>');
                }

                if (i < l - 1 || def.ShowFooter) {
                    $('#' + idd).append('<hr/>');
                }
            }

            if (def.ShowFooter) {
                $('#'+idd).append('<p class="feedFooter"><a href="' + def.SourceUrl + '">' + def.FooterText +'</a></p>');
            }
        };

        // Get Local Data; Process Date Sort and Return MaxCount
        if(def.Source === 'Local') {

            //Sort by latest
            var dateSort = function (obj1, obj2) {
                if (new Date(obj1.publishedDate) > new Date(obj2.publishedDate)) return -1;
                if (new Date(obj1.publishedDate) < new Date(obj2.publishedDate)) return 1;
                return 0;
            };

            //Take only as many items as configured to take
            var takeMaxCount = function() {
                if (this.length > def.MaxCount) {
                    return this.slice(0, def.MaxCount);
                }
                return this;
            };

            localData = MYSITE.data.news.sort(dateSort);
            localData = takeMaxCount.call(localData);
            displayFunction(localData);
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
