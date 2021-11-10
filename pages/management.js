const {I, common} = inject()

module.exports = {

    cvList: locate("div").withAttr({"class": "contact-box contact-box--listing"}),
    cv: (id) => locate("div").withAttr({"class": "contact-box contact-box--listing"}).at(id),
    name: locate("div").withAttr({"class": "contact-box__name"}),
    position: locate("div").withAttr({"class": "contact-box__position"}),
    contact: locate("div").withAttr({"class": "contact-box--listing__row"}),
    personalDataList: locate("ul").withAttr({"class": "list--dots"}),
    data: locate("li").inside(locate("ul").withAttr({"class": "list--dots"})),
    img: locate("img"),

    async checkNumberOfCvs(numberCVs) {
        let numOfElements = await I.grabNumberOfVisibleElements(this.cvList);
        I.assertEqual(numOfElements, numberCVs);
    },

    checkNamesMatch(numberCV){
        if (numberCV === 1) I.assertContain(name, '\n                 André  Wyss\n            ')
        else if (numberCV === 2) I.assertContain(name, '\n                 Adrian  Wyss\n            ')
        else if (numberCV === 3) I.assertContain(name, '\n                 Jens  Vollmar\n            ')
        else if (numberCV === 4) I.assertContain(name, '\n                 Christian  Späth\n            ')
        else if (numberCV === 5) I.assertContain(name, '\n                 Anita  Eckardt\n            ')
        else if (numberCV === 6) I.assertContain(name, '\n                 Marco  Dirren\n            ')
        else if (numberCV === 7) I.assertContain(name, '\n                 Claudia  Bidwell\n            ')
        else if (numberCV === 8) I.assertContain(name, '\n                Dr. German  Grüniger\n            ')
        else if (numberCV === 9) I.assertContain(name, '\n                 Matthias  Jacob\n            ')
    },

    checkPositionsMatch(numberCV){
        if (numberCV === 1) I.assertContain(position, '\n                Chief Executive Officer\n            ')
        else if (numberCV === 2) I.assertContain(position, '\n                Head Division Real Estate\n            ')
        else if (numberCV === 3) I.assertContain(position, '\n                Head Division Buildings/Country President Switzerland\n            ')
        else if (numberCV === 4) I.assertContain(position, '\n                Head Division Civil Engineering\n            ')
        else if (numberCV === 5) I.assertContain(position, '\n                Head Division Specialties\n            ')
        else if (numberCV === 6) I.assertContain(position, '\n                Chief Financial Officer\n            ')
        else if (numberCV === 7) I.assertContain(position, '\n                Chief Human Resources Officer\n            ')
        else if (numberCV === 8) I.assertContain(position, '\n                General Counsel\n            ')
        else if (numberCV === 9) I.assertContain(position, '\n                Head Country Management/Country President Germany\n            ')
    },

    async checkCVData(numberCV) {
        I.seeElement(this.cv(numberCV))
        await within(this.cv(numberCV), async () => {
            common.checkImage(this.img, "CV_Image"+numberCV, 30)
            let name = await I.grabTextFrom(this.name);
            console.log(name)
            this.checkNamesMatch(numberCV)
            let position = await I.grabTextFrom(this.position);
            console.log(position)
            this.checkPositionsMatch(numberCV)
            let numOfLi = await I.grabNumberOfVisibleElements(this.data);
            for(let i = 0; i<numOfLi;i++){
                let data = await I.grabTextFrom(this.data.at(i+1));
                console.log(data)
            }
        });
    },

}