import './SignIn.css'

const SignIn = () => {
    return (
        <div className='sign-in-container'>
            <div className='sign-in'>
                <input type="text" placeholder="username"/>
                <input type="password" name="" id="" placeholder="password"/>
            </div>
                <button>Sign in</button>
        </div>
    );
};

export default SignIn;