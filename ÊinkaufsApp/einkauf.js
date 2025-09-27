function addToDo() {
    unsorted.innerHTML += '<li>' + toDoField.value + '</li>';
    toDoField.value = '';
}