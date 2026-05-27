/*A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
o If the credit score is above 750, the loan is automatically approved.
o If the credit score is between 650 and 750, additional checks are performed.
o If the credit score is below 650, the loan is denied.

2. Income:
o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.

4. Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.*/

let creditScore:number = 1000;
let income:string = "$50,000"
let status:string = "Employee"
let ratio:string ="50%" 

if (creditScore>750){
    console.log("the loan is automatically approved.")
    if (creditScore >= 650 && creditScore <= 750) {
        console.log("additional checks are performed.")
    }
    else if(creditScore < 650){
        console.log("the loan is denied");
    }
}

if(creditScore >= 650 && creditScore <= 750){
    if(income >= "$50,000"){
        console.log("Loan is considered")
    }
        else {
            console.log("Loan cannot be considered: income too low");

        }

    }

    if (income>="$50,000"){
        console.log("the system checks whether the customer is employed.")
        if(status== "Employee"){
            console.log("Loan is given")
        }
        else{
            console.log("the loan is denied")
        }

    }

    if(status==="Employee"){
        console.log("the system checks the debt-to-income (DTI) ratio.")
        if(ratio < "40%"){
            console.log("the loan is approved")
        }
        else{
            console.log("the loan is denied.")
        }
    }