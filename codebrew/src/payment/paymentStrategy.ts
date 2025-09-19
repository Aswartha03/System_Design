export interface PaymentStrategy{
    pay(amount:number):void
}

export class Payment{
    paymentType : PaymentStrategy 
    constructor(paymentype:PaymentStrategy){
        this.paymentType = paymentype
    }
    processPayment(amount:number):void{
        this.paymentType.pay(amount)
    }
    setPayment(paymentType:PaymentStrategy){
        this.paymentType = paymentType
    }
}