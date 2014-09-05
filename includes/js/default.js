$(function(){	
	$('#temail,#tlinkedin,#twordpress,#tgithub').tooltip({placement:'bottom'})
	$('#BlogFeed').FeedEk({
		Type:'Blog',
		Title : 'Recent Posts',
		FeedUrl : 'http://blog.anujkumar.com/rss', //TODO: Provide link to your blog rss feed here
		Source: 'Remote',  //GH: Added this Property
        SourceUrl : 'http://blog.anujkumar.com', //TODO: Provide link to your blog here
		MaxCount : 3, //Maximum number of posts to display
		ShowDesc : true,
		ShowPubDate: true,
        ShowFooter: true, //GH: Added this Property
		FooterText:'Visit Blog For More >>' //text to display in footer link
	});
/*	$('#TwitterFeed').FeedEk({
		Type:'Tweets',
		Title : 'Tweets',
		FeedUrl : 'https://api.twitter.com/1/statuses/user_timeline.rss?screen_name=anujkkk', //replace anujkkk with your twitter username
        Source: 'Remote',
		SourceUrl : 'http://www.twitter.com/anujkkk', //replace anujkkk with your twitter username
		MaxCount : 3, //maximum number of tweets to display
		ShowDesc : true,
		ShowPubDate: true,
		FooterText:'Follow me @anujkkk' //text to display in footer link
	});*/
    $('#NewsFeed').FeedEk({
        Type:'News',
        Title : 'News',
        Source: 'Local',  //GH: Added this Property
        MaxCount : 4, //maximum number of news items
        ShowDesc : true,
        ShowPubDate: true,
        ShowFooter: false, //GH: Added this Property
        FooterText:'garyahill@yahoo.com' //text to display in footer link
    });
	$("#githubRepo").loadRepositories("garyahill",3,"https://github.com/garyahill/"); // your github username, max no. of repository, link to github profile as parameters to function.
	$('.pop').popover({
		placement:'bottom'
	});
});
