// This is a JavaScript file

$(document).on("click","#alerta", function(){
  navigator.notification.alert("Minha mensagem",null,"Aviso:","Aceito");
});

$(document).on("click","#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex ==1){
      navigator.notification.alert("Escolheu a opção A");
    }else{
       navigator.notification.alert("Escolheu a opção B");
    }
  }
  navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#beep", function(){
  navigator.notification.beep(5);
});

$(document).on("click","#vibrar", function(){
  navigator.vibrate(5000);
});

function mostraMapa(lat, long){
   L.mapquest.key = 'qrnsjJnUpMSpQG4Os4XOpLwcvdB7hQwM';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 18
        });

        map.addControl(L.mapquest.control()); 
}

$(document).on("click","#locar", function(){
var onSuccess = function(position) {
  mostraMapa(position.coords.latitude, position.coords.longitude)
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});