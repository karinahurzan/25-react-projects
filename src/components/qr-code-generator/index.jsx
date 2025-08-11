import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(
      input.trim() === '' ? 'https://my-app-mu-ten-37.vercel.app/' : input
    );
  }

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div>
        <input
          onChange={e => setInput(e.target.value.trim())}
          type="text"
          name="qr-code"
          placeholder={
            qrCode === 'https://my-app-mu-ten-37.vercel.app/'
              ? 'https://my-app-mu-ten-37.vercel.app/'
              : 'Enter your value here'
          }
        />
        <button onClick={() => handleGenerateQrCode()} type="submit">
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
