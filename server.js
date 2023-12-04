const signInButton = document.querySelector('.login .submit.signin');
  const signInButton2 = document.querySelector('.signUP .submit.signin');
  const signInButton21 = document.querySelector('.forget .submit.signin');
  const signInButton3 = document.querySelector('.login .forgetbtn');

  const fieldset1 = document.querySelector('.containLog .login fieldset');
  const fieldset2 = document.querySelector('.containLog .signUP fieldset');
  const fieldset3 = document.querySelector('.containLog .forget fieldset');

  signInButton.addEventListener('click', () => {
    fieldset1.style.marginTop = '-810px';
    fieldset2.style.marginTop = '-810px';
    fieldset3.style.marginTop = '-810px';

  });
  signInButton2.addEventListener('click', () => {
    fieldset1.style.marginTop = '10px';
    fieldset2.style.marginTop = '10px';
    fieldset3.style.marginTop = '10px';
  });
  signInButton21.addEventListener('click', () => {
    fieldset1.style.marginTop = '10px';
    fieldset2.style.marginTop = '10px';
    fieldset3.style.marginTop = '10px';
  });
  signInButton3.addEventListener('click', () => {
    fieldset1.style.marginTop = '-1800px';
    fieldset2.style.marginTop = '-1800px';
    fieldset3.style.marginTop = '-1800px';
  });

