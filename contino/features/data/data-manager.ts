import * as testData from "./data.json";


class DataManager {

    cachedData;

    // Retrieves data directly from the JSON test data file.  No data reteieved
    // is cahced for later use.
    getNonCachedData(nameAlias: string) {
        console.log("nameAlias", nameAlias);
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

    // Gets cached data, if available, by default.  Otherwise, it will 
    // get the data from the JSON test data file.  The default behavior can 
    // be overridden to get data from the file.  Last data retireived is now 
    // a reflection of cache.
    getData(nameAlias: string, resetCache = false) {
        console.log("nameAlias", nameAlias);
        if (this.cachedData === undefined || resetCache) {
            const foundData = this.getNonCachedData(nameAlias);
            this.cachedData = foundData;
        }
        return this.cachedData;
    }

    // Resets back to default state
    clearCache() {
        this.cachedData = undefined;
    }

    // Retrieves all data for the nameAlias and modDataNames.  The object
    // tied to nameAlias is the base object.  With the data fragments tied to
    // modDataNames is applied one after another.  The resulting object is 
    // returned and cached for later use.
    getDataWithMods(nameAlias: string, modDataNames: string[]) {
        console.log("getDataWithMods:nameAlias", nameAlias);
        let finalData = this.getNonCachedData(nameAlias);
        console.log("finalData", finalData);
        modDataNames.forEach((innerNameAlias) => {
            console.log("innerNameAlias", innerNameAlias);
            let data = this.getNonCachedData(innerNameAlias);
            delete data.name;
            console.log("data", data);
            finalData = Object.assign(finalData, data);
        });
        this.cachedData = finalData;
        return this.cachedData;
    }

    // This is a convienence function to convert a Gherkin rawTable into 
    // an array of strings to be used as modDataNames in getDataWithMods().
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
