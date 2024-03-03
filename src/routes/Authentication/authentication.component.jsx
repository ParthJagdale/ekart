



import SignInForm from '../../Component/sign-in-form/Sign-in-form.component';

import SignUpForm from '../../Component/sign-up-form/Sign-up-for.component';

import '../Authentication/authentication.styles.scss'
const Authentication= () => {


  return (

    <div className='authentication-container'>
     
  
<SignInForm/>     
   <SignUpForm/>
</div>
  );

  

  }
    
 


export default Authentication;