/*
FeedEk jQuery RSS/ATOM Feed Plugin
http://jquery-plugins.net/FeedEk/FeedEk.html
Author : Engin KIZIL
http://www.enginkizil.com

this plugin has been modified by Gary Hill
displays 'local data' and various other modifications
*/

(function($){
	$.fn.FeedEk=function(opt){

        var def={FeedUrl:'',MaxCount:5,ShowDesc:true,ShowPubDate:true};
        var element = $('#'+ $(this).attr('id'));
        var pubDate, localData, entry;

        //extend def object with opt object
        if(opt) $.extend(def,opt);

        //Exit if we don't have access to remote data and the source isn't local
		if(def.FeedUrl==null||def.FeedUrl=='' && def.Source !== 'Local'){
            element.empty();
			return
		}

        //empty out tag and show loader
        element.empty().append('<div style="text-align:left; padding:3px;"><img src="includes/img/loader.gif" /></div>');

        var displayFunction = function(data){

            //Prep dom elements
            element.empty();
            element.append('<h3 class="feedTitle">' + def.Title +'</h3><hr/>');

            //remote data we want to process is in a responseData property of the parameter while local data is directly accessible
            var myData = (data.responseData !== undefined) ? data.responseData.feed.entries : data;

            for (var i = 0, l = myData.length; i<l; i++) {

                //get next item
                entry = myData[i];

                //only show blog entries with the category "Website"
                if (def.Type === "Blog" && entry.categories.indexOf("Website") < 0) continue;

                //post news items
                if (def.Type === 'News') {
                    element.append('<div class="NewsTitle">' + entry.title + '</a></div>');
                }
                else {
                    element.append('<div class="ItemTitle"><a href="' + entry.link + '" target="_blank" >' +
                    entry.title + '</a></div>');
                }

                //add dates to applicable items
                if (def.ShowPubDate) {
                    pubDate = new Date(entry.publishedDate);
                    element.append('<div class="ItemDate">' + pubDate.toLocaleDateString() + '</div>')
                }

                //add different descriptions depending on the item type
                if (def.ShowDesc) {

                    switch (def.Type){
                        case "News":
                            element.append('<div class="ItemContent">' + entry.content + '</div>');
                            break;
                        case "Blog":
                            element.append('<div class="ItemContent">' + entry.contentSnippet + '</div>');
                            break;
                        default:
                            break;
                    }
                }

                //don' add horizontal rule after the last item if we aren't showing the footer
                if (i < l - 1 || def.ShowFooter) {
                    element.append('<hr/>');
                }
            }

            if (def.ShowFooter) {
                element.append('<p class="feedFooter"><a href="' + def.SourceUrl + '" ' + 'target="_blank"' + '>' + def.FooterText +'</a></p>');
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
