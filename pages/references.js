const {I, common} = inject()

module.exports = {

    australia: locate("li").withAttr({"data-country-uid": "14"}),
    germany: locate("li").withAttr({"data-country-uid": "54"}),
    switzerland: locate("li").withAttr({"data-country-uid": "41"}),

    australiaFilter(){
        I.click(this.australia)
    },

    germanyFilter(){
        I.click(this.germany)
    },

    switzerlandFilter(){
        I.click(this.switzerland)
    }




}