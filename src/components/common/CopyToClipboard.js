import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FiClipboard } from 'react-icons/fi';

const CopyToClipboard = ({ text }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyText = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            });
    };

    return (
        <Button variant="light" className="copy-button" onClick={copyText}>
            {isCopied ? 'Copied!' : <FiClipboard />}
        </Button>
    );
};

export default CopyToClipboard;
