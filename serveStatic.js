import console from 'console';
import fs from 'fs/promises'
import path from 'path'
import { sendJSONresponse } from './utils/sendJSONresponse.js';
import { getMimeType } from './utils/getMimeType.js';

const __dirname = import.meta.dirname;
console.log(__dirname)



export async function serveStatic(req, res) {
  const ext = path.extname(req.url) === ''? '.html' : path.extname(req.url) ;

  const mimeType = getMimeType(ext);

  const filePath = path.join(__dirname, 'public', 
    req.url === '/' ? 'index.html' : req.url
  );

  try{
     const  html = await fs.readFile(filePath, 'utf-8')
       sendJSONresponse(res, 200, html, mimeType)
  }catch(err){
    if (err.code === 'ENOENT') {
      sendJSONresponse(res, 404, '404 Not Found')
    }
  }
}
