import './SignIn.css'

const SignIn = () => {
    return (
        <div className='sign-in-container'>
            <h3>Sign in</h3>
            <input type="text" placeholder="username"/>
            <input type="password" name="" id="" placeholder="password"/>
            <button>Sign in</button>
        </div>
    );
};

export default SignIn;