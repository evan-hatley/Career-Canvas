const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(username, email, password);

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

            document.location.replace('/tracker');
          
        } else {
            // Not found (404) -> URL requested doesn't exist on server.
            // Bad request (400) -> Server understood request, but can't 
            // process it (likely issue with request itself).
            alert(response.statusText);
        };
    };
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);