import shipping from "../assets/shipping.png";
import payment from "../assets/payment.png";
import gift from "../assets/gift.png";
import returns from "../assets/return.png";

const servicesData = [
  {
    icon: shipping,
    title: "Worldwide Shipping",
    desc: "We offer worldwide shipping on all orders.",
  },
  {
    icon: payment,
    title: "24/7 Customer Support",
    desc: "Our support team is available 24/7 to assist you.",
  },
  {
    icon: gift,
    title: "Secure Payments",
    desc: "We ensure secure payment methods for your safety.",
  },
  {
    icon: returns,
    title: "Easy Returns",
    desc: "Hassle-free returns within 30 days of purchase.",
  },
];

const Services = () => {
  return (
    <div className="w-full bg-white py-16 px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="mb-5 w-16 h-16 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
