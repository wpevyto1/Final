
document.getElementById('flexCheckGiraffe').addEventListener('change', addInputBox)

const checkbox = document.getElementById('flexCheckGiraffe');
const giraffeInput = document.getElementById('giraffeInput');

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        giraffeInput.classList.remove('display-none');
    } else {
        giraffeInput.classList.add('display-none');
    }
});