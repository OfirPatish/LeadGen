import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Co",
    quote: "LeadGen Pro has transformed our lead generation process. We've seen a 200% increase in qualified leads!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    company: "Marketing Agency",
    quote: "The automation features have saved us countless hours. It's like having an extra team member.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mike Johnson",
    company: "E-commerce Store",
    quote: "The insights from the analytics dashboard have helped us optimize our campaigns for better ROI.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "John Doe",
    company: "Tech Co",
    quote: "LeadGen Pro has transformed our lead generation process. We've seen a 200% increase in qualified leads!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    company: "Marketing Agency",
    quote: "The automation features have saved us countless hours. It's like having an extra team member.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mike Johnson",
    company: "E-commerce Store",
    quote: "The insights from the analytics dashboard have helped us optimize our campaigns for better ROI.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Emily Davis",
    company: "Startup Inc",
    quote: "LeadGen Pro's intuitive interface and powerful features have made lead management a breeze.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Chris Lee",
    company: "Consulting Firm",
    quote: "We've been able to streamline our lead generation and focus on closing deals thanks to LeadGen Pro.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Brown",
    company: "Real Estate Co",
    quote: "The customer support team is fantastic! They helped us get up and running in no time.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "David Wilson",
    company: "Financial Services",
    quote:
      "LeadGen Pro has provided us with valuable insights that have significantly improved our marketing strategies.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Laura Martinez",
    company: "Healthcare Solutions",
    quote: "The lead scoring feature has been a game-changer for our sales team. It's like having a crystal ball.",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials: React.FC = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="testimonials" className={`py-16 ${colors.background}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-center ${colors.text}`}>What Our Customers Say</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={`${colors.secondary} p-6 rounded-lg shadow-md flex flex-col items-center h-full`}>
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                  <p className={`mb-4 italic ${colors.text}`}>"{testimonial.quote}"</p>
                  <p className={`font-semibold ${colors.text}`}>{testimonial.name}</p>
                  <p className={colors.accent}>{testimonial.company}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
