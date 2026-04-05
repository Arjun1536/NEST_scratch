import { Controller, Get, Param} from '@nestjs/common';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get()
    getAllProductDetails(){
        return this.productService.getAllProducts()
    }
    @Get(':id') // dymanic Id taking
    getProductID(@Param('id')id:String){
        return this.productService.getProductsById(Number(id))
    }

}
