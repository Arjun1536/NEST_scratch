import { Controller, Get, Param, UseGuards} from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from '../gaurds/auth/auth.guard';
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get()
    @UseGuards(AuthGuard)
    getAllProductDetails(){
        return this.productService.getAllProducts()
    }
    @Get(':id') // dymanic Id taking
    getProductID(@Param('id')id:String){
        return this.productService.getProductsById(Number(id))
    }

}
