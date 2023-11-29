document.getElementById('price-button').addEventListener('click', DisplayTotal);

function DisplayTotal() {
    let cost = 0;

    // Number of each product
    let GiraffeinputField = parseInt(document.getElementById('numOfGiraffeInput').value) || 0;
    let ElephantinputField = parseInt(document.getElementById('numOfElephantInput').value) || 0;
    let ZebrainputField = parseInt(document.getElementById('numOfZebraInput').value) || 0;
    let SlothinputField = parseInt(document.getElementById('numOfSlothInput').value) || 0;
    let RacooninputField = parseInt(document.getElementById('numOfRacoonInput').value) || 0;

    // Product checkbox
    let checkedGiraffe = document.getElementById('flexCheckGiraffe').checked;
    let checkedElephant = document.getElementById('flexCheckElephant').checked;
    let checkedZebra = document.getElementById('flexCheckZebra').checked;
    let checkedSloth = document.getElementById('flexCheckSloth').checked;
    let checkedRacoon = document.getElementById('flexCheckRacoon').checked;

    // Expedited checkbox
    let ExpiditedOrder = document.getElementById('ExpeditedSwitchCheck').checked;

    if (checkedGiraffe) {
        cost += 25.00 * GiraffeinputField;
    }

    if (checkedElephant) {
        cost += 25.00 * ElephantinputField;
    }

    if (checkedZebra) {
        cost += 25.00 * ZebrainputField;
    }

    if (checkedSloth) {
        cost += 25.00 * SlothinputField;
    }

    if (checkedRacoon) {
        cost += 40.00 * RacooninputField;
    }

    if (ExpiditedOrder) {
        cost += 20;
    }

    let taxes = 0.25 * cost;
    let total = taxes + cost;

    document.getElementById('price-value').textContent = "$" + cost.toFixed(2);
    document.getElementById('taxes-value').textContent = "$" + taxes.toFixed(2);
    document.getElementById('total-value').textContent = "$" + total.toFixed(2);

    priceResult.classList.remove('display-none');
}