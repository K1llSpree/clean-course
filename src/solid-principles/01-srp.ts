(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductService{
        getProduct( id : number ){
           return console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct( product: Product ){
           return console.log('Guardando en base de datos', product );
        }
    }
    
    class ProductBloc {
        private notificationSender: NotificationsSender;
        private productService: ProductService;

        constructor(notificationsSender: NotificationsSender, productService: ProductService){
            this.notificationSender = notificationsSender;
            this.productService = productService;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
        notifyClients(){
            this.notificationSender.notifyClients();
        }

    }
    class NotificationsSender{
        private mainEmailSender: string = 'Alfredothe37@gmail.com';

        sendEmail (emailList: string[], template:string){
            console.log('enviando correo',template,this.mainEmailSender,emailList);
        }

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
    }

    class CartBloc{
        private itemsInCart: Object[] = [];
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }


    const notifier = new NotificationsSender();
    const productBloc = new ProductBloc(notifier,new ProductService());
    const cartBloc = new CartBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();