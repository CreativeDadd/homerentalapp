'use client';
import { useState } from 'react';

const RegisterPage = () => {
  // Declare state at the top level of the component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation or other logic if needed
    console.log(email, password);

    // Make a POST request to the registration API
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Handle the response from the API
    if (response.ok) {
      // Optionally show a success message or perform other actions after registration
      console.log('Registration successful');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <section>
      <h2 className="text-primary text-4xl text-center">Register</h2>
      <form className="block max-w-xs mx-auto mt-5" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        <button type="submit" className="bg-primary text-white w-full p-2 rounded">
          Register
        </button>
        <div className="text-secondary my-4 text-center">or login with provider</div>
        <button type="button" className="flex justify-center gap-2 items-center w-full p-2 border rounded">
          <img src="/googlelogo.png" width={20} height={20} alt="Google logo" />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;

