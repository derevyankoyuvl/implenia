const {I, spinner} = inject()

module.exports = {

    menu: locate("div").withAttr({"aria-label": "Menu"}),
    aboutUs: locate("li").withAttr({"data-menu-id": "0"}),

    selectCategory: locate("select").withAttr({"data-select2-id": "2"}),
    allOption: locate("option").withText('All'),
    mediaReleasesOption: locate("option").withText('Media release'),
    adhocReleasesOption: locate("option").withText('Adhoc Releases'),
    reportsOption: locate("option").withText('Reports'),
    topicsAndProjectOption: locate("option").withText('Topics and projects'),

    selectYear: locate("select").withAttr({"title": "All"}),
    year2021Option: locate("li").withText('2021'),
    year2020Option: locate("li").withText('2020'),
    year2019Option: locate("li").withText('2019'),
    year2018Option: locate("li").withText('2018'),
    year2017Option: locate("li").withText('2017'),
    allYearsOptions: locate("li").withAttr({"class": "select2-results__option"}),

    searchFor: locate("input").withAttr({"id": "news-subject"}),

    xx: locate("a").first().inside("div").withAttr({"class":"news [ js-news ] "}),

    newsLinks: '//a[@title][ancestor::div[@class = \'news [ js-news ] \']]',
    newsLink: (id) => locate("a").withAttr({title: id}),

    //check number of elements before applying filters and after
    //a[contains(text(), "Media release")]

    //time[contains(text(), "2020")]

    //a[contains(text(), "Austria")]


    async checkNumberOfNewsSections() {
        let numOfElements = await I.grabNumberOfVisibleElements(this.newsLinks);
        console.log(numOfElements)
        let hints = await I.grabAttributeFromAll(this.newsLinks, 'title');
        console.log(hints)
        for (let i = 0; i < numOfElements; i++) {
            I.click(this.newsLink(hints[i]))
            I.amOnPage('en/media/newsroom/')
        }

    },




}