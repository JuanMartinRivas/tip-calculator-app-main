function calculator(bill, tip, people) {
    let tipAmount = 0;
    let total = 0;

    let tipTotal = (tip / 100) * bill;

    total = bill / people;
    tipAmount = tipTotal / people;
    total = total.toFixed(2);
    tipAmount = tipAmount.toFixed(2);

    return { total, tipAmount };
}