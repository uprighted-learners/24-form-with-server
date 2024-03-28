const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();

        const formData = {
            username: username.value,
            password: password.value
        };

        // Await the fetch call to complete and get the response
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Await the response to be parsed as JSON
        const data = await response.json();
        console.log(data);

        username.value = '';
        password.value = '';
    } catch (error) {
        console.error(error);
    }
});
