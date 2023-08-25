document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginform');
    const userForm = document.querySelector('#userform');
    const userPass = document.querySelector('#userpassword');
    const userList = document.querySelector('#lista');
    const opcion = document.querySelector("#select")

    const users = [];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const User = userForm.value;
        const Pass = userPass.value;
        const opciones = opcion.value

        if (User && Pass) {
            users.push({ usuario: User, contraseña: Pass, opcion: opciones});

            userForm.value = '';
            userPass.value = '';

            updateList();
        }
    });

    function updateList() {
        userList.innerHTML = '';

        users.forEach((user, index) => {
            const li = document.createElement('li');
            li.textContent = `Usuario: ${user.usuario}, Contraseña: ${user.contraseña} Sos ${user.opcion}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                deleteUser(index);
            });

            li.appendChild(deleteButton);
            userList.appendChild(li);
        });
    }

    function deleteUser(index) {
        users.splice(index, 1);
        updateList();
    }

});