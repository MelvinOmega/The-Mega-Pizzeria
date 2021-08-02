$(document).ready(function(){
    var pizzaName= document.getElementById('pizzaname');
    var pizzaSize= document.getElementById('#pizzasize');
    var pizzaCrust= document.getElementById('pizzacrust');
    var pepperoni= document.getElementById('pepperoni').checked;
    var mushrooms= document.getElementById('mushrooms').checked;
    var onions= document.getElementById('onions').checked;
    var sausage= document.getElementById('sausage').checked;
    var bacon= document.getElementById('bacon').checked;
    var extraCheese= document.getElementById('extra-cheese').checked;
    var blackOlives= document.getElementById('black-olives').checked;
    var greenPeppers= document.getElementById('green-peppers').checked;
})

$(document).ready(function(){
    $("button.proceed").click(function(){
        let pizzaName= $(".name option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val()
        let pizzaTopping = [];
    })
})