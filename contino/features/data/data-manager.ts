import * as testData from "./data.json";


class DataManager {

    getData(nameAlias) {
        console.log("nameAlias", nameAlias)
        console.log('testData', testData);
        return testData.find((data) => {
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
        })
    }
}

export default new DataManager();
 