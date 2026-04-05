import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    private products = [
        {id:1, name:"Arjun", role:"MERN developer"},
        {id:2, name: "tom", role:"React"},
        {id:3, name:"heeral", role: "SAP "}
    ];
    getAllProducts(){  // method
        return this.products;
    }
    getProductsById(id:number){
            return this.products.find((product)=> product.id === id)
    }
}
