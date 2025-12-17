import {question as input} from "readline-sync";
import { getPeopleList, getCallRecord, searchByName, SearchPeopleByAge, FindDangerousPeople, showMenu, inputUser } from "./app.js";

async function main() {
    showMenu()
    let action = ""
    while (action !== '6') {
        
    
    action = inputUser()
    switch (action) {
        case '1':
            await getPeopleList()
            break;
        case '2':
            await getCallRecord()
            break
        case '3':
            const askName = input("enter a name: ")
            await searchByName(askName)
            break
        case '4':
            const askAge = Number(input("enter a age: "))
            await SearchPeopleByAge(askAge)
            break
        case '5':
            await FindDangerousPeople()
            break
        default:
            break;
    }
}
}
main()


