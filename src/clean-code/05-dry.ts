type Size= ''|'S'|'M'|'L'|'XL';
class product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}
    toString(){
        //NO DRY
        // if(this.name.length <= 0 ) throw Error('name is empty');
        // if(this.price <= 0 ) throw Error('price is zero');
        // if(this.size.length <= 0 ) throw Error('size is empty');
        //DRY
        this.checkPropertyValues();
        return `${this.name},${this.price},${this.size}`
    }
    checkPropertyValues(){
        let badValues = ["",'0','',null,undefined];
        for (const prop in this){
            let value = `${this[prop]}`;
            if(badValues.includes(value))
            throw Error(`${prop.toString()} is not inizialized correctly`); 
        }
        return true;
    }
}
(()=>{
    const bluePants = new product("Blue Large Pants",10,'XL')
    console.log(bluePants.toString());
})();