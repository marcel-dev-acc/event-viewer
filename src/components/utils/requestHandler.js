/**
 * Method to simplify the fetch process while maintaining 
 * the ability to modify
 */
async function requestHandler(path, headers, method, payload) {
  let url = path;
  let headings = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  for (let header in headers) {
    if (headers[header]) {
      headings[header] = headers[header];
    }
  }
  let requestOptions = {
    headers: headings,
    method: method.toUpperCase(),
    redirect: 'follow',
  };
  if (method.toUpperCase() != 'GET') {
    requestOptions['body'] = JSON.stringify(payload);
  }
  let response = await fetch(url, requestOptions);
  let jsonResponse = await response.json();
  return {
    'status': response.status,
    'response': jsonResponse
  };
}

export default requestHandler;