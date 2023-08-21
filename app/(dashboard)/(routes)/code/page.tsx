"use client";

import * as z from "zod";
import axios from "axios";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import ReactMarkdown from 'react-markdown'


import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty2 } from "@/components/ui/empty2";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';



const CodePage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post('/api/code', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
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

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="">
      <Heading
        title="Code Generator"
        description="Developers rejoice, backup has arrived."
        icon={Code}
        iconColor="text-green-500"
        bgColor="bg-black-500/10"
      />
      <div className="px-4 lg:px-8">
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-black/20">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty2 label="Add some code or ask a code related question." />
          )}
          <div className="flex flex-col-reverse gap-y-4" style={{ maxHeight: '400px', overflowY: 'auto' }} ref={messagesContainerRef}>
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-[skyblue]/20 border border-black/10" : "bg-",
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <div className="relative">
                  <ReactMarkdown
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg relative">
                          <pre {...props} />
                          {props.className && props.className.includes('content-management-systems') && (
                            <div className="absolute top-2 right-2">
                              <CopyToClipboard text={props.children[0] as string}>
                                <button className="bg-gray-300 hover:bg-gray-400 rounded p-1">
                                  Copy
                                </button>
                              </CopyToClipboard>
                            </div>
                          )}
                        </div>
                      ),
                      code: ({ node, ...props }) => {
                        const language = props.className ? props.className.replace('language-', '') : '';
                        return (
                          <SyntaxHighlighter language={language} style={okaidia} className="rounded-lg p-1">
                            {props.children}
                          </SyntaxHighlighter>
                        );
                      },
                    }}
                    className="text-sm overflow-hidden leading-7"
                  >
                    {message.content || ""}
                  </ReactMarkdown>
                </div>
              </div>
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
}

export default CodePage;