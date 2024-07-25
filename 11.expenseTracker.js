document.addEventListener("DOMContentLoaded",()=>{
    const addBtn = document.getElementById("add-expense");
    const expenseContainer = document.getElementById("expense-table");
    const totalExpense = document.getElementById("total");
    const errorContainer = document.querySelector("#error-container p");
    let expenseArr = [];

    addBtn.addEventListener("click", ()=>{
        const expenseName = document.getElementById("expense").value;
        const expenseAmount = parseFloat(document.getElementById("amount").value);
        const expenseCategory = document.getElementById("category").value;
        const expenseDate = document.getElementById("date").value;
        const expense = {
            id: Date.now(),
            expenseName,
            expenseAmount,
            expenseCategory,
            expenseDate
        };
        if(checkInput(expense)){
            expenseArr.push(expense);
            addValue(expenseArr);
            updateTotal();
            return;
        }
    });
    
    function addValue(expenseArr){
        expenseContainer.innerHTML = "";
        expenseArr.forEach((expense) => {
            expenseContainer.innerHTML += 
            `<tr id="${expense.id}">
                <td>${expense.expenseName}</td>
                <td>Rs. ${expense.expenseAmount.toFixed(2)}</td>
                <td>${expense.expenseCategory}</td>
                <td>${expense.expenseDate}</td>
            </tr> `
        });
    }

    function updateTotal(){
        const total = expenseArr.reduce((sum,expense)=> sum + expense.expenseAmount,0);
        totalExpense.innerText = `${total}`;
    }

    function checkInput(expenseArr){
        if(!expenseArr.expenseName || !expenseArr.expenseAmount || !expenseArr.expenseDate){
            errorContainer.textContent = "*Please fill all the input fields";
            return false;
        }
        errorContainer.textContent = "";
        return true;
    }
});