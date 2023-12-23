document.getElementById('calculateBtn').addEventListener('click',calculateLoan);
function calculateLoan(){
    const loanAmount=parseFloat(document.getElementById('loanAmountInput').value);
    const interestRate=parseFloat(document.getElementById('InterestRateInput').value);
    const loanTerm=parseFloat(document.getElementById('loanTermInput').value);
    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm))
    {
        alert('please enter the valid numbers');

    }
    const monthlyinterest=(interestRate/100)/12;
    const totalpayment=loanTerm;
    const monthlypayment=(loanAmount*monthlyinterest)/(1-Math.pow(1+monthlyinterest,-totalpayment));
    const totalinterest=(monthlypayment*totalpayment)-loanAmount;
    displayResult(monthlypayment,totalinterest);
}
function displayResult(monthlypayment,totalinterest){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML =`
    <p><strong>Monthly payment:${monthlypayment}</strong></p>
    <p><strong>Total Interest:${totalinterest}</p></strong>
    
    `
}