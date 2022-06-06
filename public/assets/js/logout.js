// FUNCTIONALITY > LOGOUT
async function logout() {
    const response = await fetch('/api/users/logouit', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);