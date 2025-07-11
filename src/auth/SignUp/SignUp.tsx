import { useForm } from "react-hook-form";
import { validateConfirmPassword, validatePassword, validateUsername } from "../../utils/validation";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
}
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const usernameError = validateUsername(data.username);
    if (usernameError) {
      setError("username", { message: usernameError.message });
    }

    const passwordError = validatePassword(data.password);
    if (passwordError) {
      setError("password", { message: passwordError.message });
    }

    const passwordConfirmError = validateConfirmPassword(data.password, data.confirmPassword);
    if (passwordConfirmError) {
      setError("confirmPassword", { message: passwordConfirmError.message });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
      <a
        href=""
        className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
      >
        <img src="/logo.png" className="mr-4 h-11" alt="Simple KYC Logo" />
        <span>Sign-up for Simple KYC</span>
      </a>
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create a Free Account
        </h2>
        <form
          className="mt-8 space-y-6"
          action="#"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your username
            </label>
            <input
              type="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="name@company.com"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message || "This field is required"}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message || "This field is required"}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message || "This field is required"}
              </p>
            )}
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-900 dark:text-white"
              >
                I accept the{" "}
                <a
                  href="#"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-primary-700 hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
function setCurrentUser(user: any) {
  throw new Error("Function not implemented.");
}
