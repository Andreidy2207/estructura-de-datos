const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const countSpan = document.getElementById('task-count');

// Variable para llevar la cuenta de las tareas 
let taskCount = 0;

/* --- FUNCIÓN 1: AGREGAR TAREA --- */
function addTask(event) {
    // 1. Prevenir que el formulario recargue la página 
    event.preventDefault();

    // 2. Obtener el texto escrito por el usuario
    const taskText = input.value;

    // 3. Validar que no esté vacío
    if (taskText.trim() === "") {
        alert("Por favor, escribe una tarea.");
        return; 
    }

    // 4. Crear el elemento <li> 
    const li = document.createElement('li');

    // 5. Crear el <span> para el texto de la tarea
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    // 6. Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete-btn';

    // 7. Evento para eliminar la tarea específica
    // Usamos 'this' para referirnos al botón que fue clickeado
    deleteBtn.addEventListener('click', function() {
        li.remove(); 
        updateCounter(); 
    });

    // 8. Ensamblar: poner el texto y el botón dentro del <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // 9. Agregar el <li> completo a la lista <ul>
    list.appendChild(li);

    // 10. Limpiar el input para la siguiente tarea
    input.value = "";
    input.focus(); 

    // 11. Actualizar el contador
    updateCounter();
}

/* --- FUNCIÓN 2: ACTUALIZAR CONTADOR --- */
function updateCounter() {
    // Contamos cuántos elementos <li> hay dentro de la lista <ul>
    const currentCount = list.children.length;
    
    // Actualizamos la variable y el texto en pantalla
    taskCount = currentCount;
    countSpan.textContent = taskCount;
}

form.addEventListener('submit', addTask);