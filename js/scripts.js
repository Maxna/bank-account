// business logic
function bankAccount(initialDeposit, deposit, withdrawal) {
  this.initial = initialDeposit;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

bankAccount.prototype.balance = function() {
  return this.initial + this.deposit - this.withdrawal;
}


// User interface logic
$(function() {
  $("#bank").submit(function(event) {
    event.preventDefault();

    var inputName = $("#name").val();
    var inputInitialDeposit = parseInt($("#initialDeposit").val());
    var inputDeposit = parseInt($("#deposit").val());
    var inputWithdrawal = parseInt($("#withdrawal").val());
    newBankAccount = new bankAccount (inputInitialDeposit, inputDeposit, inputWithdrawal);
    var balance = newBankAccount.balance();
    $(".balance").text(balance);
  });
});
