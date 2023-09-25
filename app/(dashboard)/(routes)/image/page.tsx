'use client'
import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, ImageIcon } from "lucide-react";
import { useForm, Control, UseFormReset  } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useProModal } from "@/hooks/use-pro-modal";

import { amountOptions, formSchema, resolutionOptions } from "./constants";

import ImageBrain from "@/components/animation/image-brain.";
import { ImageAnimation } from "@/components/ui/image-animation";

type FormValues = {
  prompt: string;
  amount: string;
  resolution: string;
  selectedPromptIndex: number;
};


// Define an array of enhanced prompts
const enhancedPrompts = [
  "Create images that capture the feeling of happiness and tranquility.",
  "Generate visuals that evoke a sense of mystery and nostalgia.",
  "Design scenes of futuristic cityscapes with towering skyscrapers.",
  "Illustrate serene landscapes of lush forests and tranquil lakes.",
  "Bring to life characters from a fantasy realm with unique appearances.",
  "Visualize mythical creatures that combine elements of different animals.",
  "Craft images of everyday objects transformed into works of art.",
  "Imagine vehicles with a futuristic twist, pushing the boundaries of design.",
  "Reimagine historical figures in a modern context with a touch of fantasy.",
  "Create scenes that blend elements of the past and the future.",
  "Generate dreamlike landscapes where reality blurs with the imaginary.",
  "Craft visuals that challenge the laws of physics and logic.",
  "Design images that juxtapose light and darkness, symbolizing balance.",
  "Combine opposing forces, like fire and water, in a harmonious way.",
  "Create images that blend the aesthetics of steampunk and cyberpunk.",
  "Visualize a world where fantasy and science fiction coexist.",
  "Generate visuals that showcase the interplay of different textures.",
  "Design objects that challenge expectations by using unconventional materials.",
  "Imagine scenarios where nature and advanced technology harmonize.",
  "Craft images that depict futuristic cities integrated seamlessly with natural elements.",
  // Add more prompts here
];



const PhotoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [photos, setPhotos] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
      selectedPromptIndex: 0,
    } as {
      prompt: string;
      amount: string;
      resolution: string;
      selectedPromptIndex: 0;
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos([]);

      const selectedPrompt = enhancedPrompts[(values as { prompt: string; amount: string; resolution: string; selectedPromptIndex: number; }).selectedPromptIndex];
      const updatedValues = { ...values, prompt: selectedPrompt };

      const response = await axios.post('/api/image', updatedValues);

      const urls = response.data.map((image: { url: string }) => image.url);

      setPhotos(urls);
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  }

  return (
    <div className="text-white">
      <Heading
        title="Image Generation (Beta)"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              rounded-lg 
              border 
              w-full 
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
            "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-6">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent text-black"
                      disabled={isLoading}
                      placeholder=" Ex: A 4k advertisement for a water bottle company in the swiss alps."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {amountOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {resolutionOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        




            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
              Generate
            </Button>
          </form>
        </Form>
        {isLoading && (
          <div className="p-20">
            <Loader />
          </div>
        )}
        {photos.length === 0 && !isLoading && (
        <ImageAnimation label='Please enter a prompt to generate an image..' />
          
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {photos.map((src) => (
            <Card key={src} className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  fill
                  alt="Generated"
                  src={src}
                />
              </div>
              <CardFooter className="p-2">
                <Button onClick={() => window.open(src)} variant="secondary" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoPage;