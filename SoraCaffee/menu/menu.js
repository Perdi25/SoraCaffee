document.addEventListener('alpine:init', () => {
    Alpine.data('product', () => ({
        items:[
            {id:1,nama:'Americano',img: '1.jpg',price: 15000},
            {id:2,nama:'Exspreso',img: '3.jpg',price: 18000},
            {id:3,nama:'Caramel Mahito',img: '4.jpg',price: 20000},
            {id:4,nama:'Mocha',img: '5.jpg',price: 18000},
            {id:5,nama:'Ice Coffe',img: '6.jpg',price: 14000},
            {id:6,nama:'Black Coffe',img: '7.jpg',price: 10000},
            {id:7,nama:'Coffe Milk',img: '8.jpg',price: 20000},
            {id:8,nama:'Affogato Coffe',img: '9.jpg',price: 25000},
            {id:9,nama:'Cold Brew',img: '10.jpg',price: 20000},
        ]
    }));
    Alpine.store('cart',{
        items: [],
        total:0,
        jumlah:0,
        add(newitem){
            const cartitem = this.items.find((item) => item.id === newitem.id);

            if(!cartitem) {
                this.items.push({...newitem,jumlah: 1, total: newitem.price});
                this.jumlah++;
                this.total += newitem.price;
            } else{
                this.item = this.items.map((item)=> {
                    if ( item.id !== newitem.id) {
                        return item;
                    }else{
                        item.jumlah++;
                        item.total=item.price*item.jumlah;
                        this.jumlah++
                        this.total +=item.price;
                        return item
                    }
                })
            }
        },
        remove(id) {
            const cartitem = this.items.find((item)=>item.id===id)
            if(cartitem.jumlah>1) {
                this.items.map((item)=>{
                    if (item.id!==id){
                        return item
                    }else{
                        item.jumlah--;
                        item.total=item.price * item.jumlah;
                        this.jumlah--;
                        this.total -= item.price;
                        return item
                    }
                })
            }else if(cartitem.jumlah===1){
                this.items = this.items.filter((item)=>item.id!==id);
                this.jumlah--;
                this.total-=cartitem.price
            }
        }
    });
});
const number = (number) => {
 return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits:0}).format(
    number,
  );
}
