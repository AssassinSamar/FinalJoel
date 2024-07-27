document.addEventListener('DOMContentLoaded', () => {
    // Restaurar el estado de los botones al cargar la página
    document.querySelectorAll('.btn').forEach(button => {
        const id = button.id;
        const state = localStorage.getItem(id);
        
        if (state === 'active') {
            button.classList.add('active');
            button.classList.remove('inactive');
        } else if (state === 'inactive') {
            button.classList.add('inactive');
            button.classList.remove('active');
        }
        
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            this.classList.toggle('inactive');
            
            // Guardar el estado del botón en localStorage
            if (this.classList.contains('active')) {
                localStorage.setItem(id, 'active');
            } else if (this.classList.contains('inactive')) {
                localStorage.setItem(id, 'inactive');
            } else {
                localStorage.removeItem(id);
            }
        });
    });
});
