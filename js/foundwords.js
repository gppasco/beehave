// MAKING A RESULTS TABLE
//
class DataTable {

    constructor(parentElement, wordlistData) {
        this.parentElement = parentElement
        this.wordlistData = wordlistData
        this.displayData = []

        this.initTable()
    }

    initTable() {
        let tableObject = this

        tableObject.wrangleData()
    }

    wrangleData() {
        let tableObject = this

        tableObject.updateTable()
    }

    updateTable() {
        let tableObject = this
        tableObject.wordlistData.forEach(item =>
        console.log(item))
    }

}