// pages/cards.tsx

export default function CardsPage1() {
    return (
      <nav className="flex justify-center items-center min-h-150 bg-blue-100">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4 py-10">
          
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl text-teal-500 mb-4">☁️</div> {/* Icon */}
            <h3 className="text-lg font-semibold mb-2">Card 1</h3>
            <p className="text-gray-600">
              This is card 1 content
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="bg-teal-500 text-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🌤️</div> {/* Icon */}
            <h3 className="text-lg font-semibold mb-2">Card 2</h3>
            <p>
              This is card 2 content
            </p>
          </div>
           
        </section>
      </nav>
    );
  }
  