import { useEffect, useRef } from "react";

const initial = {
  width: 0,
  height: 0,
  children: {
    count: 0,
    max: {
      width: 0,
      height: 0,
    },
    min: {
      width: 0,
      height: 0,
    },
    width: [],
    height: [],
  },
};

const useDimensions = () => {
  const ref = useRef();
  const dimensions = useRef(initial);

  const getDimmensions = (ref) => {
    let dimm = {
      width: 0,
      height: 0,
      children: {
        count: 0,
        max: {
          width: 0,
          height: 0,
          widthIndex: -1,
          heightIndex: -1,
        },
        min: {
          width: 1000000,
          height: 1000000,
          widthIndex: -1,
          heightIndex: -1,
        },
        width: [],
        height: [],
      },
    };

    const getSize = (element, type) => {
      return element.children.length === 1
        ? getSize(element.children[0], type)
        : element[type || ""];
    };

    for (let i = 0; i < ref?.current?.children?.length || 0; i++) {
      dimm.children.width.push(getSize(ref.current.children[i], "offsetWidth"));
      dimm.children.height.push(
        getSize(ref.current.children[i], "offsetHeight")
      );
    }

    for (let i = 0; i < ref?.current?.children?.length || 0; i++) {
      if (dimm.children.max.width < dimm.children.width[i]) {
        dimm.children.max.width = dimm.children.width[i];
        dimm.children.max.widthIndex = i;
      }
      if (dimm.children.max.height < dimm.children.height[i]) {
        dimm.children.max.height = dimm.children.height[i];
        dimm.children.max.heightIndex = i;
      }

      if (dimm.children.min.width > dimm.children.width[i]) {
        dimm.children.min.width = dimm.children.width[i];
        dimm.children.min.widthIndex = i;
      }
      if (dimm.children.min.height > dimm.children.height[i]) {
        dimm.children.min.height = dimm.children.height[i];
        dimm.children.min.heightIndex = i;
      }
    }

    return dimm;
  };

  useEffect(() => {
    let dimm = getDimmensions(ref);
    dimensions.current = dimm;
  }, [getDimmensions, ref]);

  return [ref, dimensions.current || initial];
};

export default useDimensions;
