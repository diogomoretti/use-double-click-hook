import { useState } from 'react';
import { useDoubleClick } from '@hooks/useDoubleClick';
import Logo from '@/logo.png';

export function DoubleClickDemo() {
  const [message, setMessage] = useState<string | null>(null);

  const handleDoubleClickSuccess = () => {
    setMessage('Double click detected!');
    setTimeout(() => setMessage(null), 2000);
  };

  const handleClick = useDoubleClick({
    onDoubleClick: handleDoubleClickSuccess,
    latency: 300
  });

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">
          <img src={Logo} alt="Logo" />
          <span>use-double-click</span>
        </h1>
        
        <div className="clickable-area" onClick={handleClick}>
          Double Click Here
        </div>

        {message && (
          <div className="message-flash">
            {message}
          </div>
        )}

        <p className="message">
          Try clicking twice quickly to trigger a double click
        </p>

        <p className="build-with">
          Build with 💙 by <a href="https://github.com/diogomoretti" target="_blank" rel="noreferrer">Diogo Moretti</a> • <a href="https://github.com/diogomoretti/use-double-click-hook" target="_blank" rel="noreferrer">View on GitHub</a>
        </p>
      </div>
    </div>
  );
}