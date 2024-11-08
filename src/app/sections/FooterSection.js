export default function FooterSection() {
    return (
        <section className="flex flex-col items-center text-center py-8 bg-white">
            <div className="w-full max-w-screen-lg">
                {/* Contact Title */}
                <h2 className="text-lg font-medium mb-8">CONTACT</h2>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Left Column */}
                    <div className="flex flex-col items-center md:items-start text-sm">
                        <div className="mb-4 text-center md:text-left">
                            <p className="font-bold mb-2">ENQUIRIES</p>
                            <p>hello@zimogroup.org</p>
                        </div>

                        {/* Center Column - Logo and Company Info */}
                        <div className="flex flex-col items-center text-center md:items-start md:text-left mb-8">
                            {/* Logo */}
                            <div className="mb-4 flex flex-col items-center text-center">
                                <img src="/images/zemo-logo.png" alt="Zima Group Logo" className="h-22 w-50 mb-4" />
                                <img src="/images/zimo-logo-2.png" alt="Zima Group Logo" className="h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">ZIMO GROUP LIMITED</h3>
                            <p>71 - 75 Shelton Street Covent Garden London WC2H 9JQ England United Kingdom</p>
                            <p>zimogroup.org • hello@zimogroup.org</p>
                            <p>Registered in England 14383397</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center md:items-start text-sm">
                        <div className="mb-4">
                            <p className="font-bold mb-2">PROPERTY PROFESSIONALS / AGENTS</p>
                            <p>agent@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">ADVERTISING</p>
                            <p>advertising@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">SPONSORSHIP</p>
                            <p>sponsor@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PARTNERS</p>
                            <p>partners@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">LEGAL</p>
                            <p>legal@zimogroup.org</p>
                        </div>
                    </div>

                    {/* Additional Contact Options */}
                    <div className="flex flex-col items-center md:items-start text-sm">
                        <div className="mb-4">
                            <p className="font-bold">REAL ESTATE</p>
                            <p>realestate@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">CARS</p>
                            <p>cars@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">YACHTS</p>
                            <p>yachts@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">WATCHES</p>
                            <p>watches@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">JETS</p>
                            <p>jets@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PRIVATE ISLANDS</p>
                            <p>privateislands@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">DIAMONDS</p>
                            <p>diamonds@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">TRAVEL THE WORLD</p>
                            <p>ttw@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PRESS - UK</p>
                            <p>press-uk@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PRESS - EUROPE</p>
                            <p>press-eu@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PRESS - NORTH AMERICA</p>
                            <p>press-na@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PRESS - MIDDLE EAST</p>
                            <p>press-me@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PRESS - AFRICA</p>
                            <p>press-af@zimogroup.org</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">PRESS - CHINA/HONG KONG</p>
                            <p>press-ch@zimogroup.org</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-xs text-gray-500">
                    <p>ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.</p>
                    <p>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, England, United Kingdom.</p>
                </div>
            </div>
        </section>
    );
}

