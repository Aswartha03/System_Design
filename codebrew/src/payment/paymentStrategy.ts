import { Coffee } from "../decorator/types"

export interface PaymentStrategy{
    pay(coffee:Coffee):void
}

export class Payment{
    paymentType : PaymentStrategy 
    constructor(paymentype:PaymentStrategy){
        this.paymentType = paymentype
    }
    processPayment(coffee:Coffee):void{
        this.paymentType.pay(coffee)
    }
    setPayment(paymentType:PaymentStrategy){
        this.paymentType = paymentType
    }
}