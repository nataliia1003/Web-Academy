export class ApiRequest {
    constructor(url) {
        this.url = url;
    }

    get(successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr);
                    successCallback(xhr.response);
                } else {
                    errorCallback(xhr.response);
                }
            }
        };
    }

    post(data, successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(data);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    successCallback(xhr.response);
                } else {
                    errorCallback(xhr.response);
                }
            }
        };
    }

    delete(id, successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', this.url + '/' + id);

        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    successCallback(xhr.response);
                } else {
                    errorCallback(xhr.response);
                }
            }
        };
    }
}
