import { useState } from "react";
import Item from "./Item";

const container = [
  {
    id: 1,
    link: "https://frontendmentor.io",
    shorten: "https://rel.ink/k4IKyk",
    btnCol: "bg-cyan",
  },
  {
    id: 2,
    link: "https://twitter.com/frontendmentor",
    shorten: "https://rel.ink/gxOXp9",
    btnCol: "bg-darkViolet",
  },
  {
    id: 3,
    link: "https://linkedin.com/frontend-mentor",
    shorten: "https://rel.ink/gob3X9",
    btnCol: "bg-cyan",
  },
  {
    id: 4,
    link: "https://twitter.com/frontendmentor",
    shorten: "https://rel.ink/gxOXp9",
    btnCol: "bg-darkViolet",
  },
];

const Shorten = () => {
  const [curVal, setCurVal] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (curVal.trim().length === 0) {
      setError("Please enter something");
    } else {
      setError(null);
    }
  };

  const onChangeHandler = (e) => {
    setCurVal(e.target.value);
  };

  const containerItem = container.map((item) => (
    <Item key={item.id} id={item.id} link={item.link} shorty={item.shorten} />
  ));
  return (
    <section id="shorten" className="relative bg-gray-100">
      {/* <!-- Shorten Container --> */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* <!-- Form --> */}
        <form
          onSubmit={onSubmitHandler}
          id="link-form"
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            className={`${
              error && "border-red"
            } flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
            placeholder="Shorten a link here"
            id="link-input"
            value={curVal}
            onChange={onChangeHandler}
          />

          <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
            Shorten It!
          </button>

          {/* <!-- Error Message --> */}
          {error && (
            <div className="absolute left-7 bottom-3 text-red text-sm italic">
              {error}
            </div>
          )}
        </form>

        {/* <!-- Links --> */}

        <div className="flex flex-col items-center w-full space-y-4 p-6 rounded-lg ">
          {containerItem}
        </div>
      </div>
    </section>
  );
};
export default Shorten;
