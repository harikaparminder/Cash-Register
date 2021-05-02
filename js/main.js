// GLOBAL VARIABLES
var arrProduct=new Array("Iphone","Ipad","Macbook","Hard Drive","Tablets");  // Saved Products
var arrPrice=new Array(1200.00,400.00,2000.00,40.99,500.00);  // Saved Products Prices

var sumOfA=0; // Sum of saved items
var sumOfB=0; // Sum of new added item

var enteredValue = document.getElementById("enteredValue").textContent; 
var newEnteredValue;  // For entered Value 


var arrTotalOfTheDay = new Array(); // Array of total

// FILL THE INPUTBOX IN THE LEFT SIDE PANEL 

function fnFillInputs()  // fnFillInputs Starts
{
    document.getElementById("choice0").value=arrProduct[0];
    document.getElementById("choice1").value=arrProduct[1];
    document.getElementById("choice2").value=arrProduct[2];
    document.getElementById("choice3").value=arrProduct[3];
    document.getElementById("choice4").value=arrProduct[4];
} // fnFillInpputs ends

// Transfer item  to inputBox from Saved Items when mouse hover 
function fnTransfer(prod) // fnTransfer Start
{  
  document.getElementById("item").value=arrProduct[prod];
  document.getElementById("price").value=arrPrice[prod];
}// fnTransfer End

// TRANSFER AN ITEM AND PRICE FROM LISTCHOICE TO INPUTBOX
function fnItemTransfer() // fnItemTransfer Start
{
  var itemOfDropoDown = document.getElementById("lstChoices");  // Left Combobox
  var moveItem=itemOfDropoDown.options[itemOfDropoDown.selectedIndex].text; // new Added Item 
  var movePrice=itemOfDropoDown.options[itemOfDropoDown.selectedIndex].value; // new Added items price
  document.getElementById("item").value = moveItem.trim();
  document.getElementById("price").value = movePrice.trim();
  itemOfDropoDown.selectedIndex = 0; // 1 = option 2
} // fnItemTransfer End


function fn1()
{
    newEnteredValue =enteredValue + "1";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
  
}

function fn2()
{
    newEnteredValue =enteredValue + "2";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn3()
{
    newEnteredValue =enteredValue + "3";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn4()
{
    newEnteredValue =enteredValue + "4";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn5()
{
    newEnteredValue =enteredValue + "5";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn6()
{
    newEnteredValue =enteredValue + "6";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn7()
{
    newEnteredValue =enteredValue + "7";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn8()
{
    newEnteredValue =enteredValue + "8";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn9()
{
    newEnteredValue =enteredValue + "9";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fn0()
{
    newEnteredValue =enteredValue + "0";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fnDot()
{
    newEnteredValue =enteredValue + ".";
    document.getElementById("enteredValue").textContent = newEnteredValue;
    enteredValue=newEnteredValue;
}

function fnQty()
{
 document.getElementById("qty").value=enteredValue;
 document.getElementById("enteredValue").textContent="";
 enteredValue="";

}

function fn$()
{
 document.getElementById("price").value=enteredValue;
 document.getElementById("enteredValue").textContent=null;
 enteredValue="";
}

function fnDelete()
{
 
  document.getElementById("item").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";

}

//BUTTON OK 
function fnOk()  // fnOk() Start
  {
   var item = document.getElementById("item").value; // item variable
   var price = document.getElementById("price").value; // item price
   var qty = document.getElementById("qty").value; // quantity

  //Defining variables of right side combobox
   billDetail = document.getElementById("billDetail");
   addBillDetail = document.createElement("option");

  var itemBool = true;
    
  /**Verification */
  if(item=="")
  {
    itemBool=false;
    alert("Please Select or Enter Any Item");
    return false;
  }

  else if(isNaN(price))
  {
    itemBool=false;
    alert("Please enter proper price, It should be in real Number.");
    return false;
  }

  else if(price<=0)
  {
    itemBool=false;
    alert("Please enter positive price");
    return false;
  }

  else if(isNaN(qty))
  {
    itemBool=false;
    alert("Please enter proper quantity");
    return false;
  }

  else if(qty=="")
  {
    itemBool=false;
    alert("Please enter quantity");
    return false;
  }
  

/*Verifing that item is exist in arrylist or not and getting subtotal and tax...*/
  for(var i=0; i<arrProduct.length; i++)
  {

    if(item==arrProduct[i])
    {

      itemBool=false;

      var ansA=0;
      ansA=qty*price;

     //add item into bill combolist
      addBillDetail.innerHTML=item.trim()+ " " + qty.trim() + " x " + price.trim() + " = " + ansA;
      addBillDetail.value=ansA; // ans will go into value (it wil be usefull in fnRemove())

     //old biil item will stay into bill
      billDetail.appendChild(addBillDetail);

      sumOfA=sumOfA+ansA;//SUM OF saved  items in bill

      fnTotal();
      
      return true;
       
    }

  }
        
  if (itemBool=true)
  {

    //Defining a variable of leftside comboBox
    var choices = document.getElementById("lstChoices");
    var addItem=document.createElement("option");

    //adding new item into arryProduct abd arryPrice
    arrProduct.push(item.trim());
    arrPrice.push(price.trim());

    //Adding items in list box(LeftSide)
    addItem.innerHTML=item.trim();
    addItem.value=price.trim();

    //keep old products in the list
    choices.appendChild(addItem);

    var ansB=0
    ansB=qty*price;     

    //add item into bill combolist (Right)
    addBillDetail.innerHTML=item.trim()+ " " + qty.trim() + " x " + price.trim() + " = " + ansB;
    addBillDetail.value=ansB;// ans will go into value (it wil be usefull in fnRemove())
    
    //old biil item will stay into bill
    billDetail.appendChild(addBillDetail);

    sumOfB=sumOfB+ansB;   

    fnTotal();
     
  }  

} //fnOk End


function fnConfirmOrder() //fnConfirmOrder Startr
{
  var addTPS=document.createElement("option");  //var for adding final details in billDetails.
  addTPS.style.color = "red";
  addTPS.style.wordSpacing = "50px";
  addTPS.innerHTML="TPS : " + "$" +TPS.toFixed(2);
  billDetail.appendChild(addTPS);
  
  var addTVQ=document.createElement("option");  //var for adding final details in billDetails.
  addTVQ.style.color = "red";
  addTVQ.style.wordSpacing = "50px";
  addTVQ.innerHTML="TVQ : " + "$" +TVQ.toFixed(2);
  billDetail.appendChild(addTVQ);
  
  var addTotal=document.createElement("option");  //var for adding final details in billDetails.
  addTotal.style.color = "red";
  addTotal.style.wordSpacing = "50px";
  addTotal.innerHTML="TOTAL : " + "$" +totalWithTax.toFixed(2);
  

  billDetail.appendChild(addTotal);

  document.getElementById("billDetail").disabled = true;
  
  
  arrTotalOfTheDay.push(totalWithTax); // Adding total in array


}//fnConfirmOrder finish


function fnRemoveItem() // fnRemove Item Start
{
  
  try
  {
    var selectedProd = billDetail.options[billDetail.selectedIndex];  //var of selected product from bill
    var selectedProdValue=selectedProd.value; // geeting an amount of selected product
    billDetail.remove(selectedProd);  ///removing selected item from the bill

    var newSum = sumOfA-selectedProdValue; // var for update total after removing an item
    sumOfA=newSum;
    
    fnTotal();
  }
  catch
  {
    alert("Select an item that you want to remove \n");
  }
}//fnRemove Item End

// Total of bill
function fnTotal()  //fnTotal Start
{

        sum = sumOfA+sumOfB; //subtotal 
        TPS = (sumOfA+sumOfB)*0.05;
        TVQ = (sumOfA+sumOfB)*0.09975;
        totalWithTax = sum+TPS+TVQ; //global

      document.getElementById("subTotalPrice").innerHTML=sum.toFixed(2); //SubTotal
      document.getElementById("TPS").textContent=TPS.toFixed(2); //TPS tax
      document.getElementById("TVQ").textContent= TVQ.toFixed(2); //TVQ Tax
      document.getElementById("totalWithTax").textContent=totalWithTax.toFixed(2); //Total With Tax

} //fnTotal End

function fnNewOrder(){  //fnFNewOreder Start
  document.getElementById("item").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
  document.getElementById('billDetail').innerText = null;

  // it is necessary to erase an old values of total.
  sumOfA = 0;
  sumOfB = 0;

  fnTotal();

} //fnFNewOrder End

function fnTotalOfTheDay()
{
  //sum of an arry
  var totalOfTheDay = 0;

  for(var i = 0; i<arrTotalOfTheDay.length; i++)
  {
    totalWithTax = totalOfTheDay+arrTotalOfTheDay[i];
    document.getElementById("totalOfTheDayAns").value=totalWithTax.toFixed(2);
  }
  
}









