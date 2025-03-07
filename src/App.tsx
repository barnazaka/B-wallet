import React, { useState } from 'react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Placeholder for DID login
  };

  return (
    <div className="w-96 p-4 bg-gray-100 min-h-[400px] font-sans">
      <h1 className="text-xl font-bold text-center mb-4">Ontology DID Wallet</h1>
      {!isLoggedIn ? (
        <div className="flex flex-col items-center">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login with DID
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Use your decentralized identity to access Web3
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white p-3 rounded shadow">
            <h2 className="text-lg font-semibold">Wallet Dashboard</h2>
            <p>ONT Balance: 0 (Testnet)</p>
          </div>
          <div className="flex justify-between">
            <button className="bg-gray-300 px-3 py-1 rounded">Testnet</button>
            <button className="bg-gray-300 px-3 py-1 rounded">Mainnet</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;