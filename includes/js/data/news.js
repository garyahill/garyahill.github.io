/**
 * Created by hillga on 9/4/2014.
 */
(function () {

    MYSITE.data.news = [];
    var news = MYSITE.data.news;
    var item, title, pubDate, link, content;

    //CREATE NEWS ITEMS AND ADD TO ARRAY

    //Item 1
    title = "My First Item";
    pubDate = "6/19/2014";
    link = "#";
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat venenatis ex, ut tincidunt leo. Mauris sit amet sem sed dolor consectetur tincidunt eget at odio. Ut arcu sapien, egestas a dolor a, mollis maximus sapien. Sed at sodales lorem. Ut tellus dolor, ultrices quis porttitor in, cursus in enim. Proin facilisis risus elit, vel tristique dolor mattis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec suscipit enim augue, eu accumsan eros tristique at. Nam id felis sed justo lobortis aliquet vitae eu turpis. Cras in accumsan tellus. Curabitur tempor ex vel luctus tristique. Quisque non pretium sapien.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    //Item 2
    title = "My Second Item";
    pubDate = "6/19/2014";
    link = "#";
    content = "This is just a little test content";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    //Item 3
    title = "My Third Item";
    pubDate = "6/19/2014";
    link = "#";
    content = "This is just a little test content";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    //Item 4
    title = "My Fourth Item";
    pubDate = "6/19/2014";
    link = "#";
    content = "This is just a little test content";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    //Item 5
    title = "My Fifth Item";
    pubDate = "6/19/2014";
    link = "#";
    content = "This is just a little test content";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

}());