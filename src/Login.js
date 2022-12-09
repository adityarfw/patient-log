import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState('');

  const submitForm = () => {
    const data = { email: email, password: password };
    setFormData([data]);
    console.log(formData);
  };

  return (
    <div className='login-form'>
      <h1>Sign In</h1>
      <form action='' onSubmit={submitForm} className='form-container'>
        <div className='form-content'>
          <div>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type='submit' className='submitButton'>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
