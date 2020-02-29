const BASE_URL = '/api/messages/';

function sendMessages(message) {
    return fetch(BASE_URL + 'chatrooms', {
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

export default {
    sendMessages
};
