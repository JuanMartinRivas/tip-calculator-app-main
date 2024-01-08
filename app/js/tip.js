const bill = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.percenteage-btn');
const tipInput = document.querySelector('.percenteage-input');
const errorMsg = document.querySelector('.error-message');
const peopleNumber = document.getElementById('people-number');
const tipAmountText = document.getElementById('tip-amount');
const totalAmountText = document.getElementById('total-amount');
const resetBtn = document.querySelector('.reset-btn');

window.addEventListener('load', empty);

tipBtns.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    handleTipClick(item);
    handleSelect(item);
})
);

tipInput.addEventListener('input', () => {
    handleTipInput(tipInput);
});

bill.addEventListener('input', empty);

peopleNumber.addEventListener('input', empty);

resetBtn.addEventListener('click', handleReset);

function handleTipInput(input) {
    const total = calculator(bill.value, input.value, peopleNumber.value).total;
    const tipAmount = calculator(bill.value, input.value, peopleNumber.value).tipAmount;
    handleResult(total, tipAmount);
    handleError();
    clearSelection();
    empty();
};

function handleTipClick(btn) {
    const total = calculator(bill.value, btn.value, peopleNumber.value).total;
    const tipAmount = calculator(bill.value, btn.value, peopleNumber.value).tipAmount;
    handleResult(total, tipAmount);
    handleError();
    empty();
};

function handleResult(total, tipAmount) {
    tipAmountText.textContent = `$${tipAmount}`;
    totalAmountText.textContent = `$${total}`;
};

function handleSelect(btn) {
    clearSelection();
    btn.classList.add('selected');
};

function handleError() {
    if (peopleNumber.value.length === 0) {
        errorMsg.textContent = "Can't be zero";
        peopleNumber.classList.add('error')
    } else {
        errorMsg.textContent = "";
        peopleNumber.classList.remove('error')
    }
};

function handleReset() {
    bill.value = "";
    tipInput.value = "";
    peopleNumber.value = "";
    tipAmountText.textContent = "$0.00";
    totalAmountText.textContent = "$0.00";
    clearSelection();
    empty();
};

function empty() {
    if (bill.value == "" && tipInput.value == "" && peopleNumber.value == "") {
        resetBtn.classList.add('empty')
    } else {
        resetBtn.classList.remove('empty')
    }
}

function clearSelection() {
    tipBtns.forEach((ifChecked) => {
        ifChecked.classList.remove('selected');
    });
};

function calculator(bill, tip, people) {
    let tipAmount = 0;
    let total = 0;

    let tipTotal = (tip / 100) * bill;

    total = bill / people;
    tipAmount = tipTotal / people;
    total = total.toFixed(2);
    tipAmount = tipAmount.toFixed(2);

    return { total, tipAmount };
};