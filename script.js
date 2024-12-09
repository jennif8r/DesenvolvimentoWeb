// Seleciona o formulário
const form = document.querySelector('form');


// Adiciona o evento de mouseover para acentuar o brilho
form.addEventListener('mouseover', () => {
    form.style.boxShadow = '0 0 25px rgba(0, 123, 255, 0.8)';
});

// Remove o brilho acentuado ao remover o mouse
form.addEventListener('mouseout', () => {
    form.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
});
