{
    type Transaction={
        description:string,
        amount:number,
        date:Date
    };

    const transactions:Transaction[]=[];
    let totalBal=0;

    const addtransaction = ()=>{
        const description = document.getElementById("description") as HTMLInputElement;
        const amount = document.getElementById("amount") as HTMLInputElement;
        totalBal=totalBal+parseInt(amount.value);
        const newTransaction:Transaction ={description: description.value, amount:+amount.value, date:new Date()}
        transactions.push(newTransaction);
        let spanElement = document.getElementById("balance") as HTMLSpanElement;
        spanElement.innerText= transactions.reduce((total, trasnaction)=> total+trasnaction.amount,0).toString()
        updateDisplay();

    };

    const updateDisplay=()=>{
        const transactionArea = document.getElementById("transactions") as HTMLDivElement;

        const lis = transactions.map(
            trans=>{
                return(`<li>${trans.date} ${trans.description} ${trans.amount}</li>`)
            }
        )
        transactionArea.innerHTML="<ul>"+lis.join('')+"</ul?"
        const description = document.getElementById("description") as HTMLInputElement;
        const amount = document.getElementById("amount") as HTMLInputElement;
        description.value="";
        amount.value="";
    }
}