/**
 * Created by Gary Hill on 9/4/2014.
 */
(function () {

    MYSITE.data.news = [];
    var news = MYSITE.data.news;
    var item, title, pubDate, link, content;

    //CREATE NEWS ITEMS AND ADD TO ARRAY

    title = "HTML5 Conference";
    pubDate = "10/22/2014";
    link = "#";
    content = "The 2 day HTML5 Conference (San Francisco) just wrapped up.  This was my second go around and I found myself in a better position to absorb the vast amount of information this year.  I particularly enjoyed the AngularJS and Web Components talks.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "Back from Brazil";
    pubDate = "10/19/2014";
    link = "#";
    content = "I just returned from my 3rd trip to Rio.  Check out my blog post for more details.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "New Software Study Group";
    pubDate = "9/4/2014";
    link = "#";
    content = "I am expanding my work-based software study group to include a few more friends and former colleagues.  We'll be meeting one per week to work on algorithms, share knowledge with each other and exchange project ideas.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "Fall Travel Plans";
    pubDate = "9/1/2014";
    link = "#";
    content = "<ul><li>October - Rio de Janeiro</li><li>November - Bogota</li><li>December - Atlanta</li></ul>";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "Posted Minesweeper to GitHub";
    pubDate = "8/26/2014";
    link = "#";
    content = "Just posted my own version of the game Minesweeper.  I decided to build a javascript version as a fun side project and to get more familiar with GitHub.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "Brazilian Jiu Jitsu in Brazil";
    pubDate = "8/10/2014";
    link = "#";
    content = "I'll be traveling to Rio in October to train a group of friends from Romulo Melo Jiu Jitsu Academy in San Francisco.  This will be our second time training in Rio.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

}());