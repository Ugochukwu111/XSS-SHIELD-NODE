import { parseJSONBody } from "./parsedJSONBody.js"
import fs from 'fs/promises';

  export async function uploadToDb(data) {
   const parsedData =  JSON.parse(data);

   const dbData = await fs.readFile('data/data.json', 'utf-8');
   const dbDataArray = JSON.parse(dbData);
   dbDataArray.push(parsedData);

   await fs.writeFile('data/data.json', JSON.stringify(dbDataArray));

}
