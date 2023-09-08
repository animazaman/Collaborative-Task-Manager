import './SignIn.css'
import { useState } from 'react';

const SignIn = ({ onLogin }) => {

    const [formData, setFormData] = useState({
        email:'',
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

      const handleLogin = () => {
        onLogin(formData);

        // Clear the input fields
        setFormData({
        username: '',
        password: '',
        });
      };

    return (
        <div className='sign-in-container'>
            <h3>Sign in</h3>
            <input type="text" name='username' value={formData.username} onChange={handleInputChange} placeholder="username"/>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} id="" placeholder="password"/>
            <button onClick={handleLogin}>Sign in</button>
        </div>
    );
};

export default SignIn;