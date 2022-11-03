const MenuItem = (props) => {
  return (
    <div className="flex flex-col items-center w-full md:items-start">
      <div className="mb-5 font-bold text-white capitalize">{props.title}</div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        <a href className="capitalize text-grayishViolet hover:text-cyan">
          {props.first}
        </a>
        <a href className="capitalize text-grayishViolet hover:text-cyan">
          {props.second}
        </a>
        <a href className="capitalize text-grayishViolet hover:text-cyan">
          {props.third}
        </a>
        <a href className="capitalize text-grayishViolet hover:text-cyan">
          {props.fourth}
        </a>
      </div>
    </div>
  );
};
export default MenuItem;
