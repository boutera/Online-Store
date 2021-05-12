import { Item } from "./item";

export class CartItem {
    id:string;
    name:string;
    imageurl:string;
    unitprice:number;
    quantity:number;
    constructor(item:Item){
        this.id=item.id;
        this.name=item.name;
        this.imageurl=item.imageurl;
        this.unitprice=item.unitprice;
        this.quantity=1;


    }
}
