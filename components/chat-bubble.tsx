import clipboardCopy from "clipboard-copy";
import { UserAvatar } from "./user-avatar";
import { BotAvatar } from "./bot-avatar";
import { cn } from "@/lib/utils";
import { ChatCompletionRequestMessage } from "openai"; // Adjust the import path as needed

const handleCopyClick = (content: string) => {
    clipboardCopy(content);
};
interface Message {
    role: string; // Assuming role is a string, you can specify the actual type
    content: string; // Assuming content is a string
}

const ChatBubble = ({ message }: { message?: ChatCompletionRequestMessage }) => {
    if (!message || !message.content) {
        return null; // or render an empty component or placeholder if message is undefined or has no content
    }

    return (
        <div
            className={cn(
                "flex items-start",
                message.role === "user" ? "justify-end" : "justify-start"
            )}
        >
            <span className="pr-2">
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
            </span>
            <div
                className={cn(
                    "rounded-lg text-[white] p-3 max-w-[60%]",
                    message.role === "user"
                        ? "bg-[black]/70 bg-opacity-40 border border-black/10"
                        : "bg-[skyblue]/60 text-black"
                )}
            >
                <div className="flex flex-col">
                    {message.content.split("\n").map((line, idx) => (
                        <p key={idx} className="text-sm">
                            {line}
                        </p>
                    ))}
                </div>
                <button
                    onClick={() => message.content && handleCopyClick(message.content)}
                    className="text-xs text-gray-500 hover:text-gray-700 focus:outline-none mt-1"
                >
                    Copy
                </button>
            </div>
        </div>
    );
};
export default ChatBubble;