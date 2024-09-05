import React from 'react';

interface TapButtonProps {
  onTap: () => void;
}

const TapButton: React.FC<TapButtonProps> = ({ onTap }) => {
  return (
    <button
      onClick={onTap}
      style={{
        padding: '20px',
        fontSize: '24px',
        borderRadius: '50%',
        background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        animation: 'pulse 1s infinite',
      }}
    >
      Tap Me!
    </button>
  );
};

export default TapButton;
