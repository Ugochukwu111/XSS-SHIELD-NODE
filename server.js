import http from 'node:http';
import path from 'node:path';
import { serveStatic } from './serveStatic.js';


let PORT = 5000;

const server = http.createServer(async (req, res)=>{
 await serveStatic(req, res)


})

server.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))