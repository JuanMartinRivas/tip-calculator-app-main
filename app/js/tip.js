const bill = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.percenteage-btn');
const tipInput = document.querySelector('.percenteage-input');
const errorMsg = document.querySelector('.error-message');
const peopleNumber = document.getElementById('people-number');
const tipAmountText = document.getElementById('tip-amount');
const totalAmountText = document.getElementById('total-amount');
const resetBtn = document.querySelector('.reset-btn');

tipBtns.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    handleTipClick(item);
    handleSelect(item);
})
);

tipInput.addEventListener('input', () => {
    handleTipInput(tipInput);
});

function handleTipInput(input) {
    const total = calculator(bill.value, input.value, peopleNumber.value).total;
    const tipAmount = calculator(bill.value, input.value, peopleNumber.value).tipAmount;
    console.log(total, tipAmount);
    handleResult(total, tipAmount);
    tipBtns.forEach((ifChecked) => {
        ifChecked.classList.remove('selected');
    });
};

function handleTipClick(btn) {
    const total = calculator(bill.value, btn.value, peopleNumber.value).total;
    const tipAmount = calculator(bill.value, btn.value, peopleNumber.value).tipAmount;
    console.log(total, tipAmount);
    handleResult(total, tipAmount);
};

function handleResult(total, tipAmount) {
    tipAmountText.textContent = `$${tipAmount}`;
    totalAmountText.textContent = `$${total}`;
}

function handleSelect(btn) {
    tipBtns.forEach((ifChecked) => {
        ifChecked.classList.remove('selected');
    });
    btn.classList.add('selected');
}

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