// Відкриття модалок
document.getElementById('registerIcon').onclick = () => {
    document.getElementById('registerModal').classList.remove('hidden');
};

document.getElementById('loginIcon').onclick = () => {
    document.getElementById('loginModal').classList.remove('hidden');
};

// Закриття форми реєстрації
document.querySelector('.js-close-register').onclick = () => {
    document.getElementById('registerModal').classList.add('hidden');
};

// Закриття форми входу (опціонально, якщо маєш .js-close-login)
const loginCloseBtn = document.querySelector('.js-close-login');
if (loginCloseBtn) {
    loginCloseBtn.onclick = () => {
        document.getElementById('loginModal').classList.add('hidden');
    };
}

// Обробка реєстрації
document.getElementById('registerForm').onsubmit = function (e) {
    e.preventDefault();
    const login = document.getElementById('regLogin').value.trim();
    const password = document.getElementById('regPassword').value;
    const repeat = document.getElementById('regRepeatPassword').value;
    const error = document.getElementById('registerError');

    error.innerText = '';

    if (!login || !password || !repeat) {
        error.innerText = 'Будь ласка, заповніть всі обов’язкові поля.';
        return;
    }
    if (password.length < 6) {
        error.innerText = 'Пароль має містити щонайменше 6 символів.';
        return;
    }
    if (password !== repeat) {
        error.innerText = 'Паролі не співпадають.';
        return;
    }

    error.innerHTML = '<span class="success">Реєстрація успішна!</span>';

    
    // setTimeout(() => {
    //     document.getElementById('registerModal').classList.add('hidden');
    //     document.getElementById('registerForm').reset();
    // }, 1500);
};

// Обробка входу
document.getElementById('loginForm').onsubmit = function (e) {
    e.preventDefault();
    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('loginPassword').value;
    const error = document.getElementById('loginError');

    error.innerText = '';

    if (login === 'user' && password === 'password123') {
        error.innerHTML = '<span class="success">Авторизація успішна!</span>';
        // Закрити форму через 1.5 секунди
        setTimeout(() => {
            document.getElementById('loginModal').classList.add('hidden');
            document.getElementById('loginForm').reset();
        }, 1500);
    } else {
        error.innerText = 'Авторизація не пройшла.';
    }
};
