

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

    const html = '<center>'+'<div class="asdf" style="width:800px; padding:20px; text-align:center; border: 10px solid #787878">'
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
    +'</div>'+'</div>'+'</center>';

    $('body').prepend(html);
    }
});