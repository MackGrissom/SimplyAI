import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

interface Frequency {
    value: string;
    label: string;
    priceSuffix: string;
}

interface Tier {
    name: string;
    id: string;
    href: string;
    price: { monthly: string; annually: string };
    startingAt: string;
    description: string;
    features: string[];
    mostPopular: boolean;
}

const frequencies: Frequency[] = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers: Tier[] = [
    {
        name: 'Self-Starter Essentials',
        id: 'tier-freelancer',
        href: '#',
        startingAt: "Start", 
        price: { monthly: '$10', annually: '$100' },
        description: 'Designed to cater to individual users with lower usage requirements and budgets.',
        features: [
            "Single User",
            "Basic AI Models",
            "Limited Usage Quotas",
            "Template-Based Solutions",
            "Guided Tutorials",
            "Community Support"],
        mostPopular: true,
    },
    {
        name: 'Startup (Coming Soon!)',
        id: 'tier-startup',
        startingAt: "Grow", 
        href: '#',
        price: { monthly: 'tbd', annually: 'tbd' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            "Up to 10 users",
            "Advanced AI Models",
            "Higher Usage Quotas",
            "Customizable Workflows",
            "Priority Email Support",
            "Access to Beta Features"
        ],
        mostPopular: false,
    },
    {
        name: 'Enterprise (Coming Soon!)',
        id: 'tier-enterprise',
        startingAt: "Scale",
        href: '#',
        price: { monthly: 'tbd', annually: 'tbd' },
        description: 'Tailored to companies requiring dedicated support and advanced AI capabilities. Contact us for details.',
        features: [
            "Up to 100 Users",
            "Premium AI Models",
            "Custom AI Model Development",
            "Unlimited Usage Quotas",
            "Advanced Customization",
            "Dedicated Account Manager",
            "Early Access to New Features"
        ],
        mostPopular: false,
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function PricingExample() {
    const [frequency, setFrequency] = useState<Frequency>(frequencies[0]);

    return (
        <div className="bg-transparent py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-[skyblue]">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Pricing plans for teams of&nbsp;all&nbsp;sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                    Choose an affordable plan that’s packed with the best features for you or your teams needs.
                </p>
                <div className="mt-16 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
                    >
                        <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                        {frequencies.map((option) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={({ checked }) =>
                                    classNames(checked ? 'bg-[skyblue]' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'bg-white/5 ring-2 ring-[skyblue]' : 'ring-1 ring-white/10',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                                    {tier.name}
                                </h3>
                                    <span className='flex flex-col flex-wrap content-between justify-end items-end'>
                                <h4 className='text-md font-light leading-8 text-gray/60 pb-3 text-[skyblue]'> 
                                {tier.startingAt}
                                </h4>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-[skyblue] px-2.5 py-1 text-xs font-semibold leading-5 text-white ftlex-star">
                                        Most popular
                                    </p>
                                    
                                ) : null}
                                </span>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-[skyblue] text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                )}
                            >
                                Buy plan
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
