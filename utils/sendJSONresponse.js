

 export function sendJSONresponse(res, statusCode, payLoad, mimeType = 'application/json') {
  res.setHeader('Content-Type', mimeType);
  res.statusCode = statusCode;
  res.end(payLoad)
}
