import http from 'node:http';
import path from 'node:path';
import { serveStatic } from './serveStatic.js';
import { handlePost } from './handlers/handlePost.js';


let PORT = 5000;

const server = http.createServer(async (req, res)=>{
 
 if ( req.url.startsWith('/api') && req.method === 'POST' ){
   handlePost(req, res);
 }else{
   await serveStatic(req, res);
 }


})

server.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))