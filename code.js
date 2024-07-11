class BankAccount {
            constructor(owner,balance,accountNumber){
                this.owner = owner
                this.balance = balance;
                this.accountNumber = accountNumber;
                
            }
            deposit(amount){
                return this.balance + amount ;
            }
            withdraw(amount){
                if(amount <= this.balance){
                    return this.balance - amount ;
                }else{
                    document.write("Votre solde est insuffisant");
                }
            }
            getBalance(){
                return this.balance ;
            }
            printAccountInfo(){
                document.write("le propriétaire du compte : " + this.owner + " <br> numéro de compte : " + this.accountNumber 
                + "<br> solde : " + this.balance + " DH");
            }
            
        }

        a = new BankAccount ("mariem",32000,'ACC- 001323');
        document.write(a.printAccountInfo());
        document.write("<br>")
        document.write("<br>")
        document.write(a.deposit(2000));
        document.write("<br>")
        document.write(a.withdraw(320300));
        document.write("<br>")

        document.write(a.printAccountInfo());
