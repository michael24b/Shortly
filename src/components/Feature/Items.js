const Items = (props) => {
  return (
    <div
      className={`relative flex flex-col ${props.mt} p-6 space-y-6 bg-white rounded-lg  md:w-1/3`}
    >
      {/* <!-- Image Positioning --> */}
      <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
        {/* <!-- Image Container For Background & Center --> */}
        <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
          <img src={props.img} alt="" />
        </div>
      </div>
      <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
        {props.title}
      </h5>
      <p className="text-center text-gray-400 md:text-left">{props.subtitle}</p>
    </div>
  );
};
export default Items;
