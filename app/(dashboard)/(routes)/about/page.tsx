'use client'
import { Heading } from "@/components/heading";
import { Building2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: 'Innovation',
    description:
      'We foster a culture of constant innovation, pushing the boundaries of AI technology to develop cutting-edge solutions that drive progress.',
  },
  {
    title: 'Empowerment',
    description:
      'We believe in empowering users with accessible and user-friendly AI tools, enabling them to take control of their work and achieve excellence.',
  },
  {
    title: 'Collaboration',
    description:
      'Collaboration is at the heart of what we do. We actively seek partnerships with AI providers, clients, and our own team members to create a thriving ecosystem of shared knowledge and growth.',
  },
  {
    title: 'Ethical Excellence',
    description:
      'We uphold the highest ethical standards in AI development, ensuring that our technologies benefit society, respect privacy, and adhere to responsible AI practices.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white/10">
      {/* ... Rest of your component */}
      <style jsx global>
        {`
          /* Hide the scrollbar for all scrollable elements */
          ::-webkit-scrollbar {
            width: 0.5em;
          }

          /* Hide scrollbar track */
          ::-webkit-scrollbar-track {
            background: transparent;
          }

          /* Hide scrollbar thumb */
          ::-webkit-scrollbar-thumb {
            background: transparent;
          }
        `}
      </style>
      <div className="bg-[black]/30 rounded-lg text-white mb-10">
        <Heading
          title="About Us"
          description="Learn about our values, goals & our team"
          icon={Building2}
          iconColor="text-[skyblue]"
          bgColor="bg-black-500/10"
        />
      </div>
      <div className="max-w-5xl mx-auto px-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
        <section className="bg-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-8 text-[skyblue]">Our Mission</h2>
            <p className="mt-4 text-xl text-white">
              At SimplyAI, our mission is to revolutionize work processes by providing a unified platform that harnesses the power of Artificial Intelligence (AI) tools, empowering individuals and teams to accomplish tasks faster, smarter, and with unparalleled efficiency. We are committed to simplifying complex workflows, enhancing productivity, and enabling innovation through the seamless integration of AI technologies.
            </p>
          </div>
        </section>
        <section className="bg-transparent py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Values content */}
            <section className="">
              <div className="container mx-auto px-4 mb-10">
                <h2 className="text-3xl font-semibold text-center mb-8 text-[skyblue]">Our Values</h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 rounded-lg p-6 shadow-lg text-center"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-[skyblue]/80">{value.title}</h3>
                      <p className="text-white">{value.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

          </div>
        </section>
        <section className="bg-transparent mb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8 text-[skyblue]">Join Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/ai2.png" // Replace with the actual image URL
                  alt="Join Our Team"
                  width={600} // Specify the width
                  height={400} // Specify the height
                  className="rounded-lg pb-10"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Are you passionate about AI and want to make a difference? Join our team of dedicated professionals who are shaping the future of work with AI technology.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We offer a dynamic and inclusive work environment, opportunities for growth, and a chance to be part of something big. Explore our current job openings and start your journey with us.
                </p>
                <a
                  href="/careers" // Replace with the actual careers page URL
                  className="text-[skyblue]/80 font-semibold hover:underline"
                >
                  Contact For Job Openings
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;