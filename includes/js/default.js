$(function(){	
	$('#temail,#tfacebook,#ttwitter,#tgoogleplus,#tlinkedin').tooltip({placement:'bottom'})
	$('#BlogFeed').FeedEk({
		Type:'Blog',
		Title : 'Recent Articles',
		FeedUrl : 'http://blog.anujkumar.com/rss', //Provide link to your blog rss feed here
		Source: 'Remote',
        SourceUrl : 'http://blog.anujkumar.com', //Provide link to your blog here
		MaxCount : 3, //Maximum number of posts to display
		ShowDesc : true,
		ShowPubDate: true,
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
        Source: 'Local',
        MaxCount : 4, //maximum number of tweets to display
        ShowDesc : true,
        ShowPubDate: true,
        FooterText:'Footer Text' //text to display in footer link
    });
	$("#githubRepo").loadRepositories("garyahill",3,"https://github.com/garyahill/"); // your github username, max no. of repository, link to github profile as parameters to function.
	$('.pop').popover({
		placement:'bottom'
	});
});
