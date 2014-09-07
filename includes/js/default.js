$(function(){	
	$('#temail,#tlinkedin,#twordpress,#tgithub').tooltip({placement:'bottom'})
	$('#BlogFeed').FeedEk({
		Type:'Blog',
		Title : 'Recent Posts',
		FeedUrl : 'http://garyahill.wordpress.com/feed/',
		Source: 'Remote',  //GH: Added this Property
        SourceUrl : 'https://garyahill.wordpress.com',
		MaxCount : 5, //Maximum number of posts to display
		ShowDesc : true,
		ShowPubDate: true,
        ShowFooter: true, //GH: Added this Property
		FooterText:'View Blog For More >>' //text to display in footer link
	});
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
