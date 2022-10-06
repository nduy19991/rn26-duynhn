const item = [
    { name: 'Pizza Diavola',
      price: 7.99, 
      quantity: 1
    },

    { name: 'British Pizza', 
    price: 9.99, 
    quantity: 1
    },
]
const shipping = 2

function render() {
    let subtotal = 0;
    items.array.forEach(item => {
        subtotal += item.quantity * item.price
    });
    const total = subtotal +shipping
    
    $('sub-total').innertext = $$('subTotal')
    $('shipping').innertext = $$('shipping')
    $('total').innertext = $$('total')
}


