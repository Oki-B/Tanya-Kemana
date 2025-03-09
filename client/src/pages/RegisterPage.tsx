import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "../config/axiosInstance";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios({
        method: "POST",
        url: "/register",
        data: { email, username, password },
      });
      navigate("/login?register=success");
    } catch (err: { response: { data: { message: string } } } | any) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (localStorage.access_token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-between gap-5 dark:bg-gray-800">
        {/* Background Image */}
        <div className="bg-login-image absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat h-screen">
          <img
            className="w-full h-screen object-cover opacity-90 blur"
            src="https://image.pollinations.ai/prompt/backgroundfrontpageforitinerarygeneratorwebsitefortraveling?width=1280&height=720&nologo=true"
            alt="backgroundImage"
          />
        </div>

        {/* Register Form */}
        <div className="mt-10 mx-5 sm:w-5/6 text-center">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Your Journey, Your Way
          </h1>
          <p className="mb-1 text-xl font-normal leading-none tracking-tight text-gray-500 dark:text-gray-400 md:text-2xl lg:text-3xl">
            Create Perfect Itineraries in Minutes!
          </p>
          <p className="mb-12 text-md font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-lg xl:px-48">
            Transform your travel dreams into reality with customized plans that
            fit your style and schedule!
          </p>

          <form
            className="mx-auto w-md rounded-lg border border-gray-200 bg-white py-6 px-10 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            onSubmit={handleSubmit}
          >
            {/* Form Title */}
            <h2 className="my-6 text-4xl font-semibold text-gray-600">
              Register
            </h2>

            {/* Email input */}
            {error && error.includes("email") ? (
              <div className="mb-5 text-left">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-red-500 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:placeholder-red-500 dark:border-red-500"
                  placeholder="example@mail.com"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  **{error}
                </p>
              </div>
            ) : (
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-xs dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="example@mail.com"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}

            {/* Username input */}
            {error && error.includes("username") ? (
              <div className="mb-5 text-left">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
                >
                  Your Username
                </label>
                <input
                  type="username"
                  id="username"
                  className="bg-gray-50 border border-red-500 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:placeholder-red-500 dark:border-red-500"
                  placeholder="username"
                  required={true}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  **{error}
                </p>
              </div>
            ) : (
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Username
                </label>
                <input
                  type="username"
                  id="username"
                  className="shadow-xs dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="username"
                  required={true}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}

            {/* Password input */}
            {error && error.includes("password") ? (
              <div className="mb-5 text-left">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-red-500 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:placeholder-red-500 dark:border-red-500"
                  placeholder="•••••••••"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  **{error}
                </p>
              </div>
            ) : (
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow-xs dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="•••••••••"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}

            {loading === true ? (
              <button
                disabled
                type="button"
                className="w-full flex justify-center py-2.5 px-5 me-2 text-sm font-medium text-white bg-gray-600 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            )}

            <div className="my-6 text-center">
              <p className="text-sm">
                Already have an account? click{" "}
                <Link to="/login" className="text-purple-700">
                  here
                </Link>{" "}
                to login
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="w-screen bg-white shadow-sm dark:bg-gray-900">
          <div className="mx-auto my-6 w-full lg:my-6">
            <span className="block text-sm text-gray-500 dark:text-gray-400 text-center">
              © 2025{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Syaoki Biek™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
