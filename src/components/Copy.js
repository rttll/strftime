import copy from 'copy-to-clipboard';
import { useState } from 'react';

export default function Copy(props) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    copy(props.message);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <span onClick={copyToClipboard} className='relative'>
      <span
        className={` ${
          copied ? 'opacity z-50 -translate-y-3' : 'translate-y-0 opacity-0 z-0'
        } absolute top-0 inline-block p-1 duration-100 px-2 text-xs text-white transition-all transform translate-x-1/2 bg-gray-800 rounded -left-1/2`}>
        Copied!
      </span>
      <span className='relative z-10'>{props.children}</span>
    </span>
  );
}
