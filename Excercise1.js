async function getUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        return Promise.reject(error.message);
    }
}
