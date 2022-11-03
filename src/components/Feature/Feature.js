import brand from "../../images/icon-brand-recognition.svg";
import detail from "../../images/icon-detailed-records.svg";
import cust from "../../images/icon-fully-customizable.svg";

import Items from "./Items";

const Feature = () => {
  return (
    <section id="features" className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7 md:pl-0">
        {/* <!-- Horizontal Line --> */}
        <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
        {/* <!-- Vertical Line --> */}
        <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

        {/* <!-- Boxes --> */}
        <Items
          img={brand}
          title="Brand Recognition"
          subtitle="Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content."
        />
        <Items
          img={detail}
          title="Detailed records"
          subtitle="Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions."
          mt="mt-24 md:mt-8"
        />
        <Items
          img={cust}
          title="Fully customizable"
          subtitle="Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement."
          mt="mt-24 md:mt-16"
        />
      </div>
    </section>
  );
};
export default Feature;
