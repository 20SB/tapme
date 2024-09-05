import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from './gql/queries';
import { ADD_COINS } from './gql/mutations';
import TapButton from './components/TapButton';

const USER_ID = 'user-1'; // Hardcoded for simplicity

function App() {
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { id: USER_ID },
  });
  const [addCoins] = useMutation(ADD_COINS);
  const [coins, setCoins] = useState<number>(0);

  useEffect(() => {
    if (data && data.getUser) {
      setCoins(data.getUser.coins);
    }
  }, [data]);

  const handleTap = async () => {
    try {
      await addCoins({ variables: { id: USER_ID, amount: 1 } });
      refetch(); // Refetch the user data to update the coin balance
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>TapMe Game</h1>
      <h2>Coins: {coins}</h2>
      <TapButton onTap={handleTap} />
    </div>
  );
}

export default App;
