import {
    Body,
    CurrentUser,
    Delete,
    ForbiddenError,
    Get,
    JsonController,
    NotFoundError,
    Param,
    Post,
    Put,
    QueryParam,
} from 'routing-controllers';
import {IProduct} from "@contract/api/IProduct";

@JsonController('/products')
export class ProductController {
    private storeList: IProduct[] = [
        {id: 1, title: "Apple", description: "Delicious Red Apple", count: 12},
        {id: 2, title: "Banana", description: "Yellow Banana", count: 10},
        {id: 3, title: "Potato", description: "Real Potato from Belarus", count: 100}
    ];
    @Get()
    public async getList(
    ) {
       return this.storeList;
    }

    @Get('/:id')
    public async getOne(
        @Param('id') id: string,
    ) {
        
    }
}
