document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.comprar');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('¡Gracias por tu compra!');
        });
    });
});
