import copy from 'copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';

export default function useCopyToClipboard(resetInterval = null) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback((text) => {
        if (typeof text === "string" || typeof text == "number") {
            copy(text.toString());
            setIsCopied(true);
        }
        else {
            setIsCopied(false);
            console.error(`Cannot copy ${typeof text} tp clipboard, must be text or number`);
        }
    }, []);

    useEffect(() => {

        let timeout;
        if (isCopied && resetInterval) {
            timeout = setTimeout(() => setIsCopied(false), resetInterval);
        }
        return () => {
            clearTimeout(timeout);
        }
        
    },[isCopied, resetInterval])

    return [isCopied, handleCopy];

}