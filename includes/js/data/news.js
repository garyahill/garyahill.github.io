(function () {

    MYSITE.data.news = [];
    var news = MYSITE.data.news;
    var item, title, pubDate, link, content;

    title = "Back from Brazil";
    pubDate = "5/20/2024";
    link = "#";
    content = "I am back from traveling and am currently pursuing new employment opportunities.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "Taking a sabbatical";
    pubDate = "6/1/2023";
    link = "#";
    content = "My previous employer has laid off all full-time employees.  In light of that development, I've decided to some time off work to travel to Brazil and work on my language skills and practice jiu jitsu.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "Hello Boise";
    pubDate = "3/20/2020";
    link = "#";
    content = "I bought a beautiful old house in Boise, Idaho.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

    title = "Personal Milestone";
    pubDate = "11/15/2019";
    link = "#";
    content = "After 9 years of training I recieved my Brazilian Jiu Jitsu black belt from Romulo Melo in San Francisco.";
    item = new MYSITE.domain.newsItem(title, pubDate, link, content);
    news.push(item);

}());