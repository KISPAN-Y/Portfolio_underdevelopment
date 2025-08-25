import { useState } from 'react';

const CopyButton = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <button
      onClick={copyToClipboard}
      style={{
        padding: '8px 12px',
        backgroundColor: copied ? '#4CAF50' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      {copied ? (
        <>
          <span>✓</span>
          Copied!
        </>
      ) : (
        <>
          <span>⎘</span>
          Copy
        </>
      )}
    </button>
  );
};

export default CopyButton;