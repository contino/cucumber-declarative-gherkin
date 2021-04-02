import * as testData from "./data.json";


class DataManager {

    cachedData;

    getData(nameAlias: string, resetCache = false) {
        console.log("nameAlias", nameAlias);
        if (this.cachedData === undefined || resetCache) {
            const foundData = testData.find((data) => {
                console.log("data", data);
                if (data.name === nameAlias) {
                    console.log('found it 1');
                    return true
                }
                if (data.aliases) {
                    const d = data.aliases.find((alias) => {
                        console.log("alias", alias);
                        console.log("nameAlias", nameAlias);
                        return alias === nameAlias
                    }) !== undefined;
                    console.log("found it 2", d)
                    return d
                }
                return false;
            });
            console.log("foundData", foundData);
            return foundData;
        }
        return this.cachedData;
    }

    // 
    getDataWithMods(nameAlias: string, modDataNames: string[]) {
        let finalData = this.getData(nameAlias, true);
        console.log("finalData", finalData);
        modDataNames.forEach((innerNameAlias) => {
            console.log("innerNameAlias", innerNameAlias);
            let data = this.getData(innerNameAlias, true);
            console.log("data", data);
            finalData = Object.assign(finalData, data);
        });
        this.cachedData = finalData;
        return this.cachedData;
    }

    getDataTableColumnValues(table, columnIndex: number) {
        const columnValues = [];
        table.rawTable.forEach((row, index) => {
            if (index === 0){
                return;
            }
            columnValues.push(row[columnIndex]);
        });
        return columnValues;
    }
}

export default new DataManager();
