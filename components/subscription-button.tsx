'use client'
import { motion } from 'framer-motion'
import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';

interface SubscriptionButtonProps {
    isPro: boolean;
}

export const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonProps) => {
    const [loading, setLoading] = useState(false)
    const onClick = async () => {
        try {
            setLoading(true)
            const response = await axios.get("/api/stripe")
            window.location.href = response.data.url;
        } catch (error) {
            console.log("BILLING_ERROR", error)
        } finally {
            setLoading(false)
        }
    }
    // isPro ? "primary" : ""}>
    // {isPro ? "Manage Subscription" : "upgrade"

    return (
        
        <Button
            className=''
            disabled={loading}
            onClick={onClick}
            variant={isPro ? "default" : "premium"}>
            {isPro ? "Manage Subscription" : "upgrade"}
            {!isPro && <Zap className='w-4 h-4 ml-2 fill-white' 
            />}

        </Button>

    )
}

