
//Catch id 
function getId(elementId){
    return document.getElementById(elementId);
}

//phone function
function updateProductNumber ( product, price, isIncreasing){
    const productInput = getId(product+'-number');
    var productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) +1;
    }
    else if(productNumber > 0 ){
        productNumber = parseInt(productNumber) -1;
    }
    productInput.value = productNumber;
    //update product total
    getId(product+'-total').innerText = productNumber * price;

    //calculate total
    calculateTotal();
}
function getInputValue (product){
    const productInput =getId(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
    
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') *1219;
    const caseTotal = getInputValue('case') *59;
    const subTotal = phoneTotal+caseTotal;
    const tax = subTotal/10;
    const totalprice = subTotal+tax;
    //update on the html
    getId('sub-total').innerText=subTotal.toFixed(2);
    getId('tax-amount').innerText=tax.toFixed(2);
    getId('total-price').innerText=totalprice.toFixed(2);

}

// handel phone increase decrease events
getId('phone-plus').addEventListener('click', 
    function(){
            updateProductNumber('phone',1219, true);
});
getId('phone-minus').addEventListener('click', 
    function(){
            updateProductNumber('phone',1219, false);
}); 

// handel case increase decrease events
getId('case-plus').addEventListener('click', 
    function(){
            updateProductNumber('case',59, true);
});
getId('case-minus').addEventListener('click', 
    function(){
            updateProductNumber('case',59, false);
}); 






