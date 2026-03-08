import React, { useState } from "react";

const PricingCard = ({ tier, onHover }) => {
    const [pos, setPos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    const colors = {
        Starter: {
            gradient: "rgba(239, 68, 68, 0.25)",
            shadow: "hover:shadow-[0_0_150px_rgba(239,68,68,0.5)]",
            button: "group-hover:bg-red-500",
        },
        Pro: {
            gradient: "rgba(169, 248, 42, 0.25)",
            shadow: "hover:shadow-[0_0_150px_rgba(140,200,45,0.5)]",
            button: "group-hover:bg-lime-400",
        },
        Business: {
            gradient: "rgba(168, 85, 247, 0.25)",
            shadow: "hover:shadow-[0_0_150px_rgba(168,85,247,0.5)]",
            button: "group-hover:bg-purple-500",
        },
    };

    const style = colors[tier.name] || colors.Pro;

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => onHover(tier.name)}
            onMouseLeave={() => onHover(null)}
            className={`relative group w-full sm:max-w-[400px] lg:w-[350px] min-h-[550px] rounded-[10px] overflow-hidden cursor-pointer
                  transition-all duration-300 hover:-translate-y-2
                  bg-white shadow-md ${style.shadow}`}
        >
            {/* Desktop-only Glow Effect (Hidden on mobile/touch) */}
            <div
                className="absolute inset-0 pointer-events-none rounded-[10px] transition-all duration-300 opacity-0 lg:group-hover:opacity-100 hidden lg:block"
                style={{
                    background: `radial-gradient(
            400px circle at ${pos.x}% ${pos.y}%,
            ${style.gradient},
            transparent 100%
          )`,
                }}
            />

            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                    <span className="text-gray-500 font-medium">/mo</span>
                </div>

                <div className="h-px bg-gray-200 mb-8" />

                <ul className="space-y-4 mb-8 flex-1 text-left">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm font-semibold text-gray-700">
                            <span className="text-lime-500 font-bold">✓</span> {feature}
                        </li>
                    ))}
                </ul>

                <button
                    className={`w-full py-4 rounded-2xl font-bold
                     bg-[#111] text-white transition-all duration-300
                     ${style.button} group-hover:text-white
                     active:scale-95`}
                >
                    Join waitlist
                </button>
            </div>
        </div>
    );
};

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);
    const [hoveredTier, setHoveredTier] = useState(null);

    const tiers = [
        {
            name: "Starter",
            price: "29",
            features: [
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports",
            ],
        },
        {
            name: "Pro",
            price: "79",
            features: [
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Content suggestions",
                "Link optimization",
            ],
        },
        {
            name: "Business",
            price: "149",
            features: [
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports",
                "Content suggestions",
            ],
        },
    ];

    return (
        <section style={{ background: "#ffffffff" }} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">Pricing</h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Choose the right plan to meet your MADS needs and start optimizing today.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className="text-gray-500 font-medium">Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ${!isYearly ? 'bg-gray-300' :
                                hoveredTier === 'Starter' ? 'bg-red-500' :
                                    hoveredTier === 'Pro' ? 'bg-lime-400' :
                                        hoveredTier === 'Business' ? 'bg-purple-500' :
                                            'bg-[#111]'
                                }`}
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </button>
                        <span className="text-gray-900 font-semibold flex items-center gap-2">
                            Yearly <span className="text-[10px] bg-lime-100 text-lime-700 px-2 py-0.5 rounded-full uppercase">Save 20%</span>
                        </span>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-2 px-4">
                    {tiers.map((tier) => (
                        <PricingCard key={tier.name} tier={tier} onHover={setHoveredTier} />
                    ))}
                </div>
            </div>
        </section>
    );
}
