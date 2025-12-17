import fs from "fs/promises"

export async function getPeopleList() {
  try {
      const res = await fetch('https://spiestestserver-8l55.onrender.com/people')
      const data = await res.text();
      const fsWriteName = await fs.writeFile('./PEOPLE.json', data)
  
  } catch (err) {
    console.error(err);
  }   
}

export async function getCallRecord() {
 try {
       const res = await fetch('https://spiestestserver-8l55.onrender.com/transcriptions')
       const data = await res.text();
       const fsWriteRecord = await fs.writeFile('./TRANSCRIPTIONS.json', data)
              
 } catch (error) {
    console.error(err);
    
 }
}
export async function searchByName(nameSearch) {
  try {
      const dataPeople = await fs.readFile('./PEOPLE.json', 'utf-8')
      const dataShow = JSON.parse(dataPeople)
      const result = dataShow.find((person)=>{
        return person.name === nameSearch
      })
      if (result) {
          console.log(result);
          return
      }
      console.log("the person was not found");
      
  } catch (err) {
    console.error(err);
    
  }
     
}
export async function SearchPeopleByAge(ageSearch) {
try {
        const dataPeople = await fs.readFile('./PEOPLE.json', 'utf-8')
        const dataShow = JSON.parse(dataPeople)
        const result = dataShow.find((person)=>{
            return person.age === ageSearch
          })
        if (result) {
            console.log(result);
            return
        }
        console.log("the person by AGE was not found");
} catch (err) {
    console.error(err);
    
}
}

export function countWord(obj) {
    const resultDangerArr =  Object.entries(obj);
    const newObj = {}
    for (let i = 0; i < resultDangerArr.length; i++) {
        if (resultDangerArr[i][1].length > 0) {
            if (!resultDangerArr[newObj[i]]) {
                resultDangerArr[newObj[i]] = []
        }
            if (condition) {
                
            }
        }
    }
    
}

    

export async function FindDangerousPeople() {
    const dataDangerPeople = await fs.readFile('./TRANSCRIPTIONS.json', 'utf-8')
    const dataDanger = JSON.parse(dataDangerPeople)
    let objDangerous = {}
    for (let i = 0; i < dataDanger.length; i++) {

        if (!objDangerous[dataDanger[i].age]) {
            objDangerous[dataDanger[i].age] = []
        }
        if (dataDanger[i].content.includes('death')) {
            objDangerous[dataDanger[i].age].push('death')    
        }
        if (dataDanger[i].content.includes('knife')) {
            objDangerous[dataDanger[i].age].push('knife') 
        }
        if (dataDanger[i].content.includes('bomb')) {
            objDangerous[dataDanger[i].age].push('bomb') 
        }
        if (dataDanger[i].content.includes('attack')) {
            objDangerous[dataDanger[i].age].push('attack') 
        } 
    }
   return objDangerous
 
    
}
    
