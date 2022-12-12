import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    const data = { email: email, password: password };
    setFormData([data]);
    console.log(formData);

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formData }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log('Submitted successfully'))
      .catch((error) => console.log('Form submit error', error));
  };

  return (
    <div className='container mt-3'>
      <h1 className='form-name'>Sign In</h1>
      <form action='' onSubmit={submitForm} className='form-container'>
        <div>
          <div className='mb-3 mt-3'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              className='form-control'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='submit-btn'>
            <button type='submit' className='btn btn-primary'>
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
