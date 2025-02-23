import { Link } from "react-router";

export default function RegisterPage() {
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

        {/* User Form */}
        <div className="mt-10 w-5/6 text-center">
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

          <form className="mx-auto max-w-lg rounded-lg border border-gray-200 bg-white py-6 px-10 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            {/* Form Title */}
            <h2 className="my-6 text-4xl font-semibold text-gray-600">Register</h2>

            {/* Email input */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-xs dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="example@mail.com"
                required={true}
              />
            </div>

            {/* Username input */}
            <div className="mb-5">
              <label
                htmlFor="username"
                className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white"
              >
                Your username
              </label>
              <input
                type="username"
                id="username"
                className="shadow-xs dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="username"
                required={true}
              />
            </div>

            {/* Password input */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="•••••••••"
                className="shadow-xs dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required={true}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>

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
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
