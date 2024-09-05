$(function(){	
	$('#temail,#tlinkedin,#tgithub').tooltip({placement:'bottom'})
    $('#NewsFeed').FeedEk({
        Type:'News',
        Title : 'News',
        Source: 'Local',  //GH: Added this Property
        MaxCount : 4, //maximum number of news items
        ShowDesc : true,
        ShowPubDate: true,
        ShowFooter: false, //GH: Added this Property
        FooterText:'garyahill.2024@gmail.com' //text to display in footer link
    });
	$("#githubRepo").loadRepositories("garyahill",4,"https://github.com/garyahill/"); // your github username, max no. of repository, link to github profile as parameters to function.
	$('.pop').popover({
		placement:'bottom'
	});
});
