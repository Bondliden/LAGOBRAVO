import SectionHeading from "@/components/ui/section-heading";

export default function Casino() {
  const tableGames = [
    {
      name: "Blackjack",
      tables: "12 Tables"
    },
    {
      name: "Roulette",
      tables: "8 Tables"
    },
    {
      name: "Poker",
      tables: "6 Tables"
    },
    {
      name: "Baccarat",
      tables: "4 Tables"
    }
  ];

  return (
    <section id="casino" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sophisticated Casino"
          subtitle="Sophisticated gaming experience with VIP lounges and professional dealers."
          className="text-white"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Elegant casino interior" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">World-Class Gaming Experience</h3>
            <p className="text-xl text-gray-300 mb-8">Where Fortune Meets Luxury</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Table Games</h4>
                <p className="text-sm text-gray-400">Classic games including Blackjack, Poker, Roulette, and Baccarat with professional dealers.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Slot Machines</h4>
                <p className="text-sm text-gray-400">State-of-the-art slot machines featuring the latest games and progressive jackpots.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">VIP Lounges</h4>
                <p className="text-sm text-gray-400">Exclusive high-limit gaming areas with private dealers and premium amenities.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Responsible Gaming</h4>
                <p className="text-sm text-gray-400">Committed to providing a safe and responsible gaming environment for all guests.</p>
              </div>
            </div>
            
            <div className="bg-primary/20 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
              <div className="space-y-2 text-sm">
                <p>Monday - Thursday: 6:00 PM - 2:00 AM</p>
                <p>Friday - Saturday: 6:00 PM - 4:00 AM</p>
                <p>Sunday: 6:00 PM - 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gaming Tables */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tableGames.map((game, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl text-center">
              <h4 className="text-xl font-serif font-bold mb-2">{game.name}</h4>
              <p className="text-gray-300">{game.tables}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
