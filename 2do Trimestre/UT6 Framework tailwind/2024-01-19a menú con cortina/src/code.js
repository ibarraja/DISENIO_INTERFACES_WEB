document.addEventListener('DOMContentLoaded', _ =>{
    const nButton = document.querySelector('img');
    nButton.addEventListener('click', _ =>{
        const nMenu = document.querySelector('nav');
        nMenu.classList.toggle('-translate-x-full');
        nMenu.classList.toggle('hidden');
    });
});