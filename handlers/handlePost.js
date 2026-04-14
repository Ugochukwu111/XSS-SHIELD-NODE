import { parseJSONBody } from "../utils/parsedJSONBody.js";
import { sendJSONresponse } from "../utils/sendJSONresponse.js";
import { sanitizeData } from "../utils/sanitizeData.js";
import { uploadToDb } from '../utils/uploadToDb.js'

export async function handlePost(req, res) {
  if (req.url === '/api/upload/'){
    const data = await parseJSONBody(req);
    const sanitizedData = sanitizeData(data);
    await uploadToDb(sanitizedData);
    sendJSONresponse(res, 200, JSON.stringify({message: 'Data received successfully'}));
  }

}