export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function createUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-0xxx-rxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

// post helper
export const postData = async (url = '', data = {}) =>{
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Mai Fathy'
      },
      body: JSON.stringify(data)
    });

    try {
        const data = await response.json();
    } catch (e) {
        console.log(`POST method error: ${e}`);
    }
}

// get helper
export const getData = async (url = '') => {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': 'Mai Fathy'
      }
    });

    try {
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(`GET method error: ${e}`);
    }
}

// put helper
export const putData = async (url = '', data = {}) =>{
    const response = await fetch(url, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Mai Fathy'
      },
      body: JSON.stringify(data)
    });

    try {
        const data = await response.json();
    } catch (e) {
        console.log(`PUT method error: ${e}`);
    }
}

// delete helper
export const deleteData = async (url = '', data = {}) =>{
    const response = await fetch(url, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Mai Fathy'
      },
      body: JSON.stringify(data)
    });

    try {
        const data = await response.json();
    } catch (e) {
        console.log(`DELETE method error: ${e}`);
    }
}
