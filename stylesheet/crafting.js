document.getElementById('submit').addEventListener('click', validateInfo);


function validateInfo() {
    resetValidation();

    let fName = document.getElementById('fnameField').value;
    let fNameInput = document.getElementById('fnameField');
    let lName = document.getElementById('lnameField').value;
    let lNameInput = document.getElementById('lnameField');
    let eMail = document.getElementById('emailField').value;
    let eMailInput = document.getElementById('emailField');
    let address = document.getElementById('inputAddress');
    let city =  document.getElementById('inputCity');
    let state = document.getElementById('inputState');
    let zipcode = document.getElementById('inputZip');

    
    if (fName.trim() === '') {
        fNameInput.classList.add('is-invalid');
        //setInvalid('fnameField');
    } else {
        fNameInput.classList.add('is-valid');;
    }

    if (lName.trim() === '') {
        lNameInput.classList.add('is-invalid');
    } else {
        lNameInput.classList.add('is-valid');
    }

    if (eMail.trim() === '') {
        eMailInput.classList.add('is-invalid');
    } else {
        eMailInput.classList.add('is-valid');
    }

    address.classList.add('is-valid');
    city.classList.add('is-valid');
    state.classList.add('is-valid');
    zipcode.classList.add('is-valid');

    isValid = document.querySelectorAll('.is-invalid').length === 0;

    return isValid;
}

function resetValidation() {
    formControls = document.getElementsByClassName('form-control');
    for (i = 0; i < formControls.length; i++) {
        formControls[i].classList.remove('is-valid', 'is-invalid');
    }
}