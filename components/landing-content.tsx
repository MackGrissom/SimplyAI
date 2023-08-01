'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
      name: "Amanda",
      avatar: "A",
      title: "Marketing Specialist",
      description: "As a marketing specialist, UnifiedAI has been a game-changer for me. From generating advertisement copy snippets to creating captivating descriptions for our products, it has improved my content creation process. It's like having a dedicated team of developers, designers and googlers at my fingertips. Totally recommended!"
    },
    {
      name: "Max",
      avatar: "M",
      title: "Content Creator",
      description: "I couldn't believe how much time and effort this AI toolkit saved me. As a content creator, I used to struggle with writer's block and video editing, but now, the chatbot helps me brainstorm ideas, and the video and audio generators create stunning content effortlessly. My productivity has skyrocketed, and my audience loves the new engaging content!"
    },
    {
      name: "Sophia",
      avatar: "S",
      title: "Web Developer",
      description: "I use the code generator every single day. With that alone, this AI toolkit has exceeded my expectations. The code generation feature has become an essential part of my daily development workflow, enabling me to create complex code snippets in seconds. It's like having a jr dev with me at all times.."
    },
    {
      name: "David",
      avatar: "D",
      title: "UX/UI Designer",
      description: "I'm amazed by the versatility of this AI toolkit. As a UX/UI designer, I rely heavily on visual elements. The video and audio generation features allow me to create stunning multimedia components without the need for expensive software or external help. It's been a real game-changer for my design projects!"
    }
  ];

const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonials.map((item) => (
          <Card key={item.description} className="bg-[skyblue]/20 border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
            </div>
        </div>
    );
}

export default LandingContent;