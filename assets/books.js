 var books_prices = new Array();
 books_prices["Round6"]=20;
 books_prices["Round8"]=25;
 books_prices["Round10"]=35;
 books_prices["Round12"]=75;
 
 var book_prices= new Array();
 book_prices["None"]=0;
 book_prices["Maths"]=5;
 book_prices["AWA"]=10;
book_prices["English"]=10;

 
	 
	 
function getBooksPrice()
{  
    var consolePrice=0;
    var theForm = document.forms["cakeform"];
    var selectedconsole = theForm.elements["selectedconsole"];
    for(var i = 0; i < selectedconsole.length; i++)
    {
        if(selectedconsole[i].checked)
        {
            consolePrice = books_prices[selectedconsole[i].value];
            break;
        }
    }
    return consolePrice;
}

function getBookPrice()
{
    var bookPrice=0;
    var theForm = document.forms["cakeform"];                   
     var selectedgame = theForm.elements["game"];
     
    bookPrice = book_prices[selectedgame.value];

    return bookPrice;
}

function crackPrice()
{
    var crackPrice=0;
    var theForm = document.forms["cakeform"];
    var includecrack = theForm.elements["includecrack"];

    if(includecrack.checked==true)
    {
        crackPrice=5;
    }
    return crackPrice;
}

function versionPrice()
{
    var versionPrice=0;
    var theForm = document.forms["cakeform"];
    var includeversion = theForm.elements["includeversion"];
    if(includeversion.checked==true){
        versionPrice=20;
    }
    return versionPrice;
}
        
function calculateTotal()
{
    var cakePrice = sum(getBooksPrice(), getBookPrice() , crackPrice(), versionPrice());
    
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price of books: $"+cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}

function sum(first,second,third,fourth){
    if (!isNaN(first)>0 && !isNaN(second)>0 && !isNaN(third)>0 && !isNaN(fourth)>0)

    return first+second+third+fourth;
    else
    throw Error("only numbers are allowed");
}