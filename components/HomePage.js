import { useRef } from "react";

const Home = () => {
  const reRef = useRef();

  const emailInputRef = useRef();

  const registrationHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="flex flex-col justify-center min-h-screen w-full px-4 py-10 bg-cover bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col items-center">
        <div className="max-w-4xl card-body justify-center items-center">
          <h2 className="card-title text-center text-4xl">
            Hello, Developers !
          </h2>
          <div className="space-y-8">
            <p className="text-center text-xl">
              We are currently building this website for all the awesome
              JavaScript lovers. We'll soon add the content and make it
              available for you!
            </p>
            <p className="text-center text-xl font-bold">
              Get notified as soon as we launch the service by entering your
              email..!.
            </p>
          </div>
          <form className="flex w-full" onSubmit={registrationHandler}>
            <div className="pointer-events-auto w-3/5 mt-6 space-x-10 m-auto">
              <input
                type="email"
                id="email"
                placeholder="Your email"
                aria-label="Your email"
                ref={emailInputRef}
                className="input input-bordered focus-within:text-gray-600 rounded-full w-3/5"
              />
              <button className="btn btn-outline rounded-full">
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
