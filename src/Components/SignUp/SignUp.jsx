import { useState } from 'react';
import './SignUp.css'
import '../../App'

const SignUp = ({onRegister}) => {

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
      });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    const handleRegistration = () => {
        // Store user registration data in local storage
        onRegister(formData);

        setFormData({
            email: '',
            username: '',
            password: '',
          });
      };

    return (
        <div className="sign-up">
            <h3>Sign up</h3>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} id="" placeholder='email'/>
            <input type="text" name='username' value={formData.username} onChange={handleInputChange} placeholder="username"/>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} id="" placeholder="password"/>
            <button onClick={handleRegistration}>Sign up</button>
        </div>
    );
};

export default SignUp;