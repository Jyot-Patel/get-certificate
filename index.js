

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
$('#form').submit(function (e) {
    const namee = $('#name').val();
    if(!namee){
        alert('enter a name')
        
    }else{
    e.preventDefault();
    const name = $('#name').val();

    $('.ss').removeAttr('hidden');

    $('#formDiv').remove();

    console.log(name);

    const html = '<center>'+'<div class="asdf" style="width:800px;background-color:White; padding:20px; text-align:center; border: 10px solid #787878">'
    +'<div style = "width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878" >'
    +'<span style = "font-size:50px; font-weight:bold" >'+' Certificate of Completion</span>'
    +' <br>'+' <br>'
    +'<span style = "font-size:25px">'+'<i> This is to certify that </i>'+'</span>'
    +' <br><br>'
    +'<span style = "font-size:30px" >'+' <b> '+name+' </b>'+'</span>'
    +'<span style = "font-size:25px" >'+' <i> has completed the course </i>'+'</span>'
    +'<br>'+'<br>'
    +'<span style = "font-size:30px" > My Course </span>'+'<br><br>'
    +'<span style = "font-size:20px" > with score of'+'<b> 100 % </b>'+'</span >'
    +'<br><br><span style="font-size:25px"><i>'+today+'</i></span><br>'
    +'<img src="https://upload.wikimedia.org/wikipedia/en/9/9c/Salman_Khan_Official_Signature.jpg" style="height:150px;width:250px;float:right;margin-right:2rem;margin-top:2rem;" alt="Signature">'
    
    +'</div>'+'</div>'+'</center>';

    $('body').prepend(html);
    }
});
