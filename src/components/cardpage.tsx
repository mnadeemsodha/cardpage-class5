// pages/cards.tsx

export default function CardsPage() {
    return (
      <main className="flex justify-center items-center min-h-96 bg-gray-100">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 py-4">
          
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
  
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl text-teal-500 mb-4">❄️</div> {/* Icon */}
            <h3 className="text-lg font-semibold mb-2">Card 3</h3>
            <p className="text-gray-600">
              This is card 3 content.
            </p>
          </div>
          
        </section>
      </main>
    );
  }
  