'use client'

import React, { useState, useRef, useEffect } from 'react';
import ClipboardJS from 'clipboard';
import * as z from "zod";
import axios from "axios";
import { Copy, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from "openai"; // Import ChatCompletionRequestMessage and ChatCompletionRequestMessageRoleEnum

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";
import clipboardCopy from "clipboard-copy";
import ChatBubble from '@/components/chat-bubble';

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [regenerateDisabled, setRegenerateDisabled] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const simulateTyping = async (message: string | undefined) => {
    if (message === undefined) {
      return; // Do nothing if message is undefined
    }
  
    setIsTyping(true);
  
    for (let i = 0; i < message.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 8)); // Adjust typing speed here (milliseconds)
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, prevMessages.length - 1), // Remove "isTyping" message
        { role: "bot" as ChatCompletionRequestMessageRoleEnum, content: message.substring(0, i + 1) }, // Add partial message as bot response
      ]);
    }
  
    setIsTyping(false);
  };

    

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = { role: "user" as ChatCompletionRequestMessageRoleEnum, content: values.prompt };
      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
        { role: "bot" as ChatCompletionRequestMessageRoleEnum, content: "Typing..." } as ChatCompletionRequestMessage, // Add "isTyping" message before the actual bot response
      ]);

      const response = await axios.post('/api/conversation', { messages: [...messages, userMessage] });
      simulateTyping(response.data.content); // Simulate typing for bot's response

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error('Something went wrong.');
      }
    } finally {
      router.refresh();
    }
  };

  // Create a ref for the messages container
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the messages container
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to copy the message content to the clipboard
  const copyToClipboard = (message: string) => {
    const clipboard = new ClipboardJS('.copy-button', {
      text: () => message
    });

    clipboard.on('success', (e) => {
      toast.success('Copied to clipboard');
      e.clearSelection();
    });

    clipboard.on('error', () => {
      toast.error('Failed to copy');
    });
  };

  const regenerateResponse = async () => {
    try {
      setRegenerateDisabled(true);

      const lastUserMessage = messages[messages.length - 2]; // Get the user's last message
      const response = await axios.post('/api/conversation', { messages: [lastUserMessage] });
      simulateTyping(response.data.content); // Simulate typing for the new bot response
    } catch (error) {
      toast.error('Failed to regenerate response.');
    } finally {
      setRegenerateDisabled(false);
    }
  };

  return (
    <div className="text-white font-bold">
      <div className='bg-[black]/80 rounded-lg'>
        <Heading
          title="Let's Talk"
          description="Learn, consult and grow alongside our most advanced conversation model."
          icon={MessageSquare}
          iconColor="text-[skyblue]"
          bgColor="bg-black-500/10"
        />
      </div>
      <div className="px-4 lg:px-8">
        <div className="space-y-4 mt-4">
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}

          {/* Wrap messages in a container with max height and overflow-y */}
          <div ref={messagesContainerRef} className="max-h-[60vh] overflow-y-auto space-y-4 pb-5">
            {messages.map((message, index) => (
              <ChatBubble key={index} message={message} />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 py-2 mx-2 left-[90] md:w-[63%] lg:w-[80%] w-[95%] ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              rounded-lg 
              border           
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
              text-black
              w-[93%]
              
            "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0 ">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent  "
                      disabled={isLoading}
                      placeholder="  Ex: What is a language model?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="col-span-12 lg:col-span-2 w-full bg-[#87ceeb] text-black border-[1px] border-white hover:text-white" type="submit" disabled={isLoading} size="icon">
              Generate
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConversationPage;
