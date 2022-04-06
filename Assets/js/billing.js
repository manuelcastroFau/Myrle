
   function changeText () {
    document.getElementById("c1").innerHTML= "Paid";
    document.getElementById("c2").innerHTML= "Paid";
  }
  function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'horizontal',
        label: 'paypal',
        tagline: false
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value":1400}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();

var form = document.getElementById("cards"),
    checkboxes = form.getElementsByTagName("input"),
    subtotal = document.getElementById("sub_total");
for(var i = 0; i <= checkboxes.length; i++){
    checkboxes[i].onchange = function(){
      var newsub_total = 0.0;
    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            newsub_total += parseInt(checkboxes[i].value);
        }
    }
    subtotal.innerHTML = "$" + newsub_total.toFixed(2);
    }
  }
 