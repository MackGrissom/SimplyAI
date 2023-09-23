import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-white text-lg">
          {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
        </div>

<div className="text-white-foreground"> 
  Thanks for choosing SimplyAI. For customer support please &nbsp;
  <a href="mailto:support@simplyai.pro" className="text-[blue]/90  hover:underline">email us</a> &nbsp; or use the chatbot below. 
</div>

        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
    );
}

export default SettingsPage;
