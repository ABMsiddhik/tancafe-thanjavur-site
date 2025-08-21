import React, { useState, useEffect } from 'react';
import { MapPin, Truck, Zap, ChevronRight, ChevronLeft } from 'lucide-react';

const DeliveryRadiusBadge = () => {
    const [pulseActive, setPulseActive] = useState(true);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPulseActive(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const toggleBadge = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="fixed top-1/3 right-6 transform -translate-y-1/2 z-50 flex items-center">
            <button
                onClick={toggleBadge}
                className="ml-2 bg-gradient-to-r from-[#7B3F00] to-[#5D2E00] p-2 rounded-full shadow-lg hover:bg-[#5D2E00] transition-all duration-300"
            >
                {isExpanded ? (
                    <ChevronRight className="w-5 h-5 text-[#FFD700]" />
                ) : (
                    <ChevronLeft className="w-5 h-5 text-[#FFD700]" />
                )}
            </button>
            {isExpanded ? (
                <div
                    className={`bg-gradient-to-br from-[#f5e6d3] to-[#e8d5c0] rounded-2xl shadow-2xl border border-[#d4b89c] p-5 min-w-64 transition-all duration-500 ease-in-out ${pulseActive ? 'animate-pulse' : ''
                        }`}
                >

                    {/* Header */}
                    <div className="flex items-center gap-3">
                        {/* Location icon */}
                        <div className="relative">
                            <div className="bg-gradient-to-r from-[#7B3F00] to-[#5D2E00] p-3 rounded-full shadow-lg">
                                <MapPin className="w-5 h-5 text-[#FFD700]" />
                            </div>
                            {/* Pulsing ring */}
                            <div className="absolute inset-0 bg-[#8B4513] rounded-full animate-ping opacity-30"></div>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-[#5D2E00] text-sm">Delivery Zone</h3>
                                <Truck className="w-4 h-4 text-[#D2691E]" />
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                <Zap className="w-3 h-3 text-[#D2691E]" />
                                <p className="text-xs text-[#7B3F00] font-medium">Online Delivery is Accepted Upto 15kms</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute -top-1 -right-1">
                        <div className="w-2 h-2 bg-[#8B4513] rounded-full animate-bounce"></div>
                    </div>
                    <div className="absolute -bottom-1 -left-1">
                        <div className="w-1 h-1 bg-[#D2691E] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            ) : (
                <div className="bg-gradient-to-br from-[#f5e6d3] to-[#e8d5c0] rounded-full shadow-2xl border border-[#d4b89c] p-2 transition-all duration-500 ease-in-out">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#8B4513]" />
                        <div className="absolute inset-0 bg-[#8B4513] rounded-full animate-ping opacity-30"></div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default DeliveryRadiusBadge;