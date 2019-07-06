const email = prompt('Enter your e-mail.');
const minpaswlen = 5;
const minemaillen = 6;

if (email === '' || email === null) {
    alert('Canceled');
    } else if (email.length < minemaillen) {
    alert('I don\'t know any emails having name length less than 6 symbols');
    } else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {   
        let password = prompt('Enter password')

        if ( email === 'user@gmail.com' && password === 'UserPass' 
        || email === 'admin@gmail.com' && password === 'AdminPass') { 
        if (confirm('Do you want to change your password?')) {
            let oldpass = prompt('Enter old password')
                if (oldpass === password){
                    let newpass = prompt('Enter your new password')

                        if (newpass.length > minpaswlen ) {
                            let newpassconfirm = prompt('Confirm your new password')
            
                                if (newpass === newpassconfirm){
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }
                        } else {
                            alert('It’s too short password. Sorry.');
                    }  
                } else {   
                    alert('Canceled');
            }
        } else {
            alert('You have failed the change');
            } 
    }
    } else {
         alert('I don’t know you');
}

    


