// auth.js
const auth_login = async (username, password) => {
    const loginInfo = { username, password };

    try {
        const response = await fetch('http://192.168.199.241:8080/authenticate', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Đăng nhập thành công', data);
            //Save token to LocalStorage
            localStorage.setItem('token', data.token);
            // When login success
            return { success: true, data };
        } else {
            console.error('Login failed');
            // When login failed
            return { success: false, message: 'Đăng nhập thất bại' };
        }
    } catch (error) {
        console.error('Login error:', error);
        // When login error
        return { success: false, message: error.message };
    }
};

export { auth_login };
