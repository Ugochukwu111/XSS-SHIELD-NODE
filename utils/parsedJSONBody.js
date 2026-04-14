export async function parseJSONBody(req) {
      let body = '';

      /*code below is how node collects data received from the frontend in chunks*/ 
     for await (const chunk of req) {
      body += chunk;
    }
  try{
    return body;
  }catch(err){
     throw new Error(`Invalid JSON format: ${err}`)
  }

}