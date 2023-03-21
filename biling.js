var removeItem = document.getElementsByClassName('btn-rem')

for (var i = 0; i < removeItem.length; i++){
    var button = removeItem[i]
    button.addEventListener('click', function(event){
        console.log('clicked')
        var buttonClicked = event.target
        buttonClicked.parentElement.removeItem
        updateCart
    })
}

function updateCart(){
    var cartItem = document.getElementsByClassName('card')[0]
    var cartRows = cartItem.getElementsByClassName('')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity-input')[0]
        var price = parseFloat( priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('total')[0].innerText = total
}