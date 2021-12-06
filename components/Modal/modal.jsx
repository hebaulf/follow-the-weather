import { useState, useEffect, useRef } from 'react'

const Modal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  
}