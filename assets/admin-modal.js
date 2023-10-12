$(document).ready(function(){
    $('#user-login').click(function(){
      $('#login-modal-content').show();
      $('#register-modal-content').hide();
      $('#forgot-password-content').hide();  
    });

    $('#user-register').click(function(){
        $('#register-modal-content').show();
        $('#login-modal-content').hide();
        $('#forgot-password-content').hide();  
    });

    $('#forgot-password-button').click(function(){
        $('#register-modal-content').hide();
        $('#login-modal-content').hide();
        $('#forgot-password-content').show(); 
    });
    $('#create-account-button').click(function(){
        $('#register-modal-content').show();
        $('#login-modal-content').hide();
        $('#forgot-password-content').hide(); 
    });
    $('#login-button').click(function(){
        $('#register-modal-content').hide();
        $('#login-modal-content').show();
        $('#forgot-password-content').hide(); 
    });

});