import { HttpClient } from '@angular/common/http';

({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  
getProducts() {
  return this
         .http
         .get(`${this.uri}`);
}

editProduct(id) {
  return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }
  
  
deleteProduct(id) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}


  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
}


}