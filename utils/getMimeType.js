
const mimeMap = {
  html: 'text/html',
  json: 'application/json',
  css: 'text/css',
  js: 'application/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
};

export function getMimeType(ext) {
  const cleanExt = ext.replace('.', '').toLowerCase();
  return mimeMap[cleanExt] || 'text/html';
}