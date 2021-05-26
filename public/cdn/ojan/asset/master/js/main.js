    var preloader = $('#preloader');
    $(window).on('load', function() {
        setTimeout(function() {
            preloader.fadeOut('slow', function() { $(this).remove();
         if (window.location.pathname == '/'){
            waktu();
            toast();
         }   
            });
        }, 300)
    });
     if (window.location.pathname == '/'){
    var ss = document.getElementsByTagName("li")
  for (aa of ss){
    aa.classList.remove("active");
  }
  document.getElementById('index').classList.add("active");
         }   
    if (window.location.pathname == '/list'){
      const query = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
if (query.type){
  var ss = document.getElementsByTagName("li")
  for (aa of ss){
    aa.classList.remove("active");
  }
  document.getElementById(query.type).classList.add("active");
}
    }
$(document).ready(function() {
     if (window.location.pathname == '/'){
    var ss = document.getElementsByTagName("li")
  for (aa of ss){
    aa.classList.remove("active");
  }
  document.getElementById('index').classList.add("active");
         }   
    if (window.location.pathname == '/list'){
      const query = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
if (query.type){
  var ss = document.getElementsByTagName("li")
  for (aa of ss){
    aa.classList.remove("active");
  }
  document.getElementById(query.type).classList.add("active");
}
    };
            $("#cekkeyform").submit(function(e) {
                $.ajax({
                    url: '//api.zeks.xyz/cekkey?apikey='+apikey.value,
                    type: 'GET',
                    beforeSend: function() {
$("#sbm").html(`<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
 Loading...`);
   $("#sbm").attr("disabled", "disabled");
    $("#ampikey").attr("disabled", "disabled");
                    },
                    success: async function(data, textStatus, jqXHR) {
                    try{
                        textnya.innerHTML = '<b>Limit Apikey</b>: '+ data.limit_key + '<br>' + '<b>Owner Username</b>: '+ data.username
            swal("Apikey valid!", 'Limit Apikey anda adalah '+ data.limit_key, "success");
            } catch (e){
            swal("Internal Server Error!", "", "error");
            }
            $("#sbm").html('Submit');
            $("#sbm").removeAttr("disabled", "disabled");
            $("#ampikey").removeAttr("disabled", "disabled");
                    }, error: () =>{
                    swal("Apikey Tidak Valid!", "", "error");
                    textnya.innerHTML = ''  
                    $("#sbm").html('Submit');
                   $("#sbm").removeAttr("disabled", "disabled");
                    $("#ampikey").removeAttr("disabled", "disabled");
                    }
                });
                e.preventDefault();
            });
        });
