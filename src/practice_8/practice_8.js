/*import './practice_8.scss';
import { ApiRequest } from './ApiRequest';*/
import './practice_8.scss';
import './react_test.jsx';
/*'./ApiRequest';

function asynsTimeoute(time) {
    return new Promise( (resolve, reject) =>  {
        asynsTimeoute(),
    });
}
asynsTimeoute(2000), then{() => console.log('Hello World')}*/

/*const rootElement = document.querySelector('body');
let authorInputElement;
let inputElement;
let sendButtonElement;
let commentsListElement;

function inputRender() {
    authorInputElement = document.createElement('input');
    inputElement = document.createElement('textarea');
    sendButtonElement = document.createElement('button');

    authorInputElement.setAttribute('placeholder', 'author');
    inputElement.setAttribute('placeholder', 'comment');

    sendButtonElement.classList.add('send');
    sendButtonElement.innerText = 'Send';

    rootElement.appendChild(authorInputElement);
    rootElement.appendChild(inputElement);
    rootElement.appendChild(sendButtonElement);
}

function commentsListRender() {
    commentsListElement = document.createElement('ul');

    commentsListElement.classList.add('comments');

    rootElement.appendChild(commentsListElement);
}

function generateComment(commentObject) {
    const commentElement = document.createElement('li');
    const authorElement = document.createElement('p');
    const textElement = document.createElement('p');
    const dateElement = document.createElement('p');
    const deleteButtonElement = document.createElement('button');

    commentElement.classList.add('comments__item');
    authorElement.classList.add('comments__author');
    textElement.classList.add('comments__text');
    dateElement.classList.add('comments__date');
    deleteButtonElement.classList.add('comments__delete');

    authorElement.innerText = commentObject.author;
    textElement.innerText = commentObject.text;
    dateElement.innerText = commentObject.date;
    commentElement.id = commentObject.id;
    deleteButtonElement.innerText = 'Delete';

    deleteButtonElement.addEventListener('click', function () {
        const request = new ApiRequest('http://localhost:4001/comments');

        function successCallback(response) {
            commentElement.remove();
        }

        function errorCallback(error) {
            console.log(error);
        }

        request.delete(commentObject.id, successCallback, errorCallback);
    });

    commentElement.appendChild(authorElement);
    commentElement.appendChild(textElement);
    commentElement.appendChild(dateElement);
    commentElement.appendChild(deleteButtonElement);

    return commentElement;
}

function renderComment(listItem) {
    commentsListElement.appendChild(listItem);
}

function getComments() {
    const request = new ApiRequest('http://localhost:4001/comments');

    function successCallback(response) {
        const commentsArray = JSON.parse(response);

        for ( let i = 0; i < commentsArray.length; i++) {
            const commentElement = generateComment(commentsArray[i]);
            renderComment(commentElement);
        }
    }

    function errorCallback(error) {
        console.log(error);
    }

    request.get(successCallback, errorCallback);
}

inputRender();
commentsListRender();
getComments();

function addComment(body) {
    const request = new ApiRequest('http://localhost:4001/comments');

    function successCallback(response) {
        const commentElement = generateComment(JSON.parse(response));
        renderComment(commentElement);

        authorInputElement.value = '';
        inputElement.value = '';
    }

    function errorCallback(error) {
        console.log(error);
    }

    request.post(JSON.stringify(body), successCallback, errorCallback);
}

sendButtonElement.addEventListener('click', function () {
    const body = {
        author: authorInputElement.value,
        text: inputElement.value
    };

    addComment(body);
});*/
