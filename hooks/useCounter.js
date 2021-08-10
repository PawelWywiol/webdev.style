import { useEffect, useState } from "react";

const useCounter = (settings) => {
  const [data, setData] = useState({ ...settings, count: settings?.min || 0 });

  useEffect(() => {
    const next = () => {
      if (document.hidden) return;
      setData({
        ...settings,
        count:
          !data.max || data.count + 1 < data.max
            ? data.count + 1
            : data.min || 0,
      });
    };

    const id = window && window.setInterval(next, data.delay || 1000);

    return () => window && window.clearInterval(id);
  }, [settings]);

  return data.count;
};

export default useCounter;
