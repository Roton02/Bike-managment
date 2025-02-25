import { useState } from "react";

const HelpFAQ = () => {
    const [activeTab, setActiveTab] = useState("whatYouShouldKnow");

    return (
        <div className=" mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold  mb-8 text-primary">Support & Help </h1>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-6 border-b pb-4">
                {[
                    { key: "whatYouShouldKnow", label: "What you should know" },
                    { key: "whatIsDIN", label: "What is a DIN?" },
                    { key: "howItWorks", label: "How it works" },
                    { key: "needHelp", label: "Need help?" },
                ].map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`text-lg font-semibold px-4 py-2 rounded-md ${
                            activeTab === key ? "bg-primary text-white" : "text-gray-700 hover:text-blue-600"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="text-xl leading-relaxed">
                {activeTab === "whatYouShouldKnow" && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Information About Our Electric Bikes</h2>
                        <p className="text-gray-700 mb-4">
                            Our electric bikes are designed for high performance, long-lasting battery life, and
                            eco-friendly transportation. Every model we offer comes with a warranty and complete support.
                        </p>
                        <div className="flex gap-6">
                            <div className="p-6 bg-blue-100 rounded-lg shadow">
                                <h3 className="text-2xl font-semibold text-blue-700 mb-2">What does Tier 1 coverage mean?</h3>
                                <p className="text-gray-600">
                                    Tier 1 bikes have the highest level of coverage, ensuring full warranty and support.
                                </p>
                            </div>
                            <div className="p-6 bg-red-100 rounded-lg shadow">
                                <h3 className="text-2xl font-semibold text-red-700 mb-2">What does Tier 2 coverage mean?</h3>
                                <p className="text-gray-600">
                                    Tier 2 bikes come with essential coverage, including limited warranty and service options.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "whatIsDIN" && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a DIN?</h2>
                        <p className="text-gray-700">
                            DIN stands for "Device Identification Number." Each of our electric bikes has a unique DIN
                            that helps with tracking, warranty services, and security registration.
                        </p>
                    </div>
                )}
                {activeTab === "howItWorks" && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-gray-700">
                            Our electric bikes operate using cutting-edge lithium-ion battery technology, providing long
                            battery life, smooth acceleration, and zero carbon emissions.
                        </p>
                    </div>
                )}
                {activeTab === "needHelp" && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
                        <p className="text-gray-700">
                            Contact our 24/7 support team at
                            <a href="tel:+1234567890" className="text-blue-600 font-bold ml-1">+1 234-567-890</a>
                            or email us at
                            <a href="mailto:support@electricbikes.com" className="text-blue-600 font-bold ml-1">
                                support@electricbikes.com
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HelpFAQ;
