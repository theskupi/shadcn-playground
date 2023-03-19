import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Register() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: sessionData } = useSession();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encrypt the password using bcrypt
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Submit the registration form data
    // const res = await fetch('/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     nickname,
    //     email,
    //     password: hashedPassword,
    //   }),
    // });

    // if (res.ok) {
    //   window.location.href = '/profile';
    // }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  if (sessionData) {
    return <p>You are already signed in as {sessionData.user.email}</p>;
  }

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nickname">
              Nickname
            </label>
            <input
              className="border-2 border-gray-200 p-3 w-full rounded-lg"
              type="text"
              name="nickname"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="border-2 border-gray-200 p-3 w-full rounded-lg"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-gray-200 p-3 w-full rounded-lg"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full md:w-3/4"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link href="/auth/signin" className="text-gray-500 hover:text-gray-700">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}