import { useEffect, useState } from "react";

const useWebFont = (fonts) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    import("webfontloader")
      .then((x) => x.default)
      .then((WebFont) => {
        WebFont.load({
          ...fonts,
          active: () => {
            setLoaded(true);
          },
          fontactive: (font) => {},
          timeout: 10000,
        });
      });
  }, [fonts]);

  return loaded;
};

export default useWebFont;
