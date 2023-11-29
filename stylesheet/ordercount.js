document.addEventListener('DOMContentLoaded', toggleGiraffeInput);
document.addEventListener('DOMContentLoaded', toggleElephantInput);
document.addEventListener('DOMContentLoaded', toggleZebraInput);
document.addEventListener('DOMContentLoaded', toggleSlothInput);
document.addEventListener('DOMContentLoaded', toggleRacoonInput);

function toggleGiraffeInput() {
    const checkbox = document.getElementById('flexCheckGiraffe');
    const giraffeInput = document.getElementById('GiraffeInput');
    const inputField = document.getElementById('numOfGiraffeInput');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            giraffeInput.classList.remove('display-none');
        } else {
            giraffeInput.classList.add('display-none');
            inputField.value = '';
        }
    });
}

function toggleElephantInput() {
    const checkbox = document.getElementById('flexCheckElephant');
    const giraffeInput = document.getElementById('ElephantInput');
    const inputField = document.getElementById('numOfElephantInput');


    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            giraffeInput.classList.remove('display-none');
        } else {
            giraffeInput.classList.add('display-none');
            inputField.value = '';
        }
    });
}

function toggleZebraInput() {
    const checkbox = document.getElementById('flexCheckZebra');
    const giraffeInput = document.getElementById('ZebraInput');
    const inputField = document.getElementById('numOfZebraInput');


    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            giraffeInput.classList.remove('display-none');
        } else {
            giraffeInput.classList.add('display-none');
            inputField.value = '';
        }
    });
}

function toggleSlothInput() {
    const checkbox = document.getElementById('flexCheckSloth');
    const giraffeInput = document.getElementById('SlothInput');
    const inputField = document.getElementById('numOfSlothInput');


    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            giraffeInput.classList.remove('display-none');
        } else {
            giraffeInput.classList.add('display-none');
            inputField.value = '';
        }
    });
}

function toggleRacoonInput() {
    const checkbox = document.getElementById('flexCheckRacoon');
    const giraffeInput = document.getElementById('RacoonInput');
    const inputField = document.getElementById('numOfRacoonInput');


    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            giraffeInput.classList.remove('display-none');
        } else {
            giraffeInput.classList.add('display-none');
            inputField.value = '';
        }
    });
}
