const BASE_URL = '/api/messages/chatrooms';

function sendMessages(message) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'Application/json' }),
        body: JSON.stringify(message)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('could not post message');
        }
    });
}

function retrieveMessages() {
    return fetch(BASE_URL).then(res => res.json());
}

export default {
    sendMessages,
    retrieveMessages
};
