/**
* EasyHTTP Library
* Library for making HTTP requests
*
* Copy from section-7 72
* Using as a module
*
* @version 3.0.0
* @author Joe McKinney
* @license MIT 
**/

class EasyHTTP {

    //Make an HTTP GET Request
    //returns a promise
    async get(url) {
        //fetch url, return promise
        const response = await fetch(url);

        //parses body text as JSON, return promise
        const resData = await response.json();

        return resData;
    }

    //Make an HTTP POST Request
    async post(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            });

            const resData = await response.json();

            return resData;
    }

    //Make an HTTP PUT Request
    async put(url, data) {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            const resData = await response.json();

            return resData;
    }

    //Make an HTTP DELETE Request
    async delete(url) {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                }
            })
            const resData = await 'Resource Deleted';

            return resData;
    }
}


//Export module
//instantiate entire class
export const http = new EasyHTTP();