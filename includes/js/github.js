jQuery.githubUser = function(username, callback) {
	jQuery.getJSON("https://api.github.com/users/" + username + "/repos", callback);
};
 
jQuery.fn.loadRepositories = function(username, limit, link) {

    //MY MAIN WEBSITE REPOSITORY
    var MAIN_REPO_NAME = 'garyahill.github.io';

    this.empty().append('<div style="text-align:left; padding:3px;"><img src="includes/img/loader.gif" /></div>');
	var target = this;
	$.githubUser(username, function(data) {
		var repos = data;
        repos = removeMainWebsiteRepo(repos);

		sortByNumberOfWatchers(repos);
		target.empty();
        //Omitting (most watched) for now
        //target.append('<h3 class="feedTitle">Github Repositories (most watched)</h3><hr/>');
		target.append('<h3 class="feedTitle">Github Repositories</h3><hr/>');
		var n = 1;
		$(repos).each(function() {
			if(n<=limit)
				{
                //Omitting watchers for now
				//target.append('<div class="ItemTitle"><a href="'+ link + this.name + '">' + this.name + '</a>(' + this.watchers + ')</div>');
                    target.append('<div class="ItemTitle"><a href="'+ link + this.name + '">' + this.name + '</a></div>');
				target.append('<div class="ItemContent">'+this.description+'</div><hr/>');
				}
			n = n+1;
			});
		target.append('<p class="feedFooter"><a href="' + link + '">Github Repositories >></a></p>');
		
		});

	function sortByNumberOfWatchers(repos) {
		repos.sort(function(a,b) {
			return b.watchers - a.watchers;
			});
		}

    function removeMainWebsiteRepo (repos)  {
        var output = [];
        for (var i = 0, l = repos.length; i<l; i++ ){
            if (repos[i].name !== MAIN_REPO_NAME) output.push(repos[i]);
        }
        return output;
    }
};
