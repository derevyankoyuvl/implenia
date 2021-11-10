const {I} = inject()

module.exports = {

    menu: locate("div").withAttr({"aria-label": "Menu"}),
    aboutUs: locate("li").withAttr({"data-menu-id": "0"}),
    categoryGroup: locate("select").withAttr({"data-select2-id": "1"}),
    allOption: locate("option").withText('All'),
    mediaReleasesOption: locate("option").withText('Media release'),
    adhocReleasesOption: locate("option").withText('Adhoc Releases'),
    reportsOption: locate("option").withText('Reports'),
    topicsAndProjectOption: locate("option").withText('Topics and projects'),
    selectYear: locate("select").withAttr({"data-select2-id": "5"}),
    year2021Option: locate("li").withText('2021'),
    year2020Option: locate("li").withText('2020'),
    year2019Option: locate("li").withText('2019'),
    year2018Option: locate("li").withText('2018'),
    year2017Option: locate("li").withText('2017'),
    allYearsOptions: locate("li").withAttr({"class": "select2-results__option"}),
    removeAllFilters: locate("div").withAttr({"class": "newsroom__reset"}),
    searchFor: locate("input").withAttr({"id": "news-subject"}),
    xx: locate("a").first().inside("div").withAttr({"class":"news [ js-news ] "}),
    newsLinks: '//a[@title][ancestor::div[@class = \'news [ js-news ] \']]',
    austriaTxt: locate("a").withText('Austria'),
    time2021: locate("time").withText('2021'),
    time2020: locate("time").withText('2020'),
    time2019: locate("time").withText('2019'),
    time2018: locate("time").withText('2018'),
    adhocReleasesTxt: locate("a").withText('Adhoc Releases'),
    mediaReleasesTxt: locate("a").withText('Media release'),
    reportsTxt: locate("a").withText('Reports'),
    topicsAndProjectsTxt: locate("a").withText('Topics and projects'),
    newsLink: (id) => locate("a").withAttr({title: id}),

    selectCategory(category){
        if (category === 'Adhoc Releases') I.selectOption(this.categoryGroup, 'Adhoc Releases');
        else if (category === 'Media release') I.selectOption(this.categoryGroup, 'Media release');
        else if (category === 'Reports') I.selectOption(this.categoryGroup, 'Reports');
        else if (category === 'Topics and projects') I.selectOption(this.categoryGroup, 'Topics and projects');
        else I.selectOption(this.categoryGroup, 'All');
    },

    selectValueFromYearDropDown(year){
        if (year === '2021') I.selectOption(this.selectYear, '2021');
        else if (year === '2020') I.selectOption(this.selectYear, '2020');
        else if (year === '2019') I.selectOption(this.selectYear, '2019');
        else if (year === '2018') I.selectOption(this.selectYear, '2018');
        else I.selectOption(this.selectYear, 'All');
    },

    applySearchCriteria(value){
        I.fillField(this.searchFor, value)
        I.pressKey('Enter');
        I.wait(3)
    },

    compareResults(afterFilter, beforeFilter){
        if (afterFilter > beforeFilter) I.assertEqual(true, true)
        else I.assertEqual(true, false)
    },

    removeFilters(){
        I.click(this.removeAllFilters)
    },

    async checkNumberOfNewsLinks() {
        let numOfElements = await I.grabNumberOfVisibleElements(this.newsLinks);
        console.log(numOfElements)
        I.assertEqual(numOfElements, 10)
        let hints = await I.grabAttributeFromAll(this.newsLinks, 'title');
        console.log(hints)
        for (let i = 0; i < numOfElements; i++) {
            I.click(this.newsLink(hints[i]))
            I.amOnPage('en/media/newsroom/')
        }
    },

    async getNumberOfNewsLinks() {
        let numOfElements = await I.grabNumberOfVisibleElements(this.newsLinks);
        console.log(numOfElements)
        let hints = await I.grabAttributeFromAll(this.newsLinks, 'title');
        console.log(hints)
        return numOfElements
    },
}