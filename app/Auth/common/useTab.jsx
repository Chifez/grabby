import { useState, useRef } from "react";

const useTab = () => {
  const [active, setActive] = useState("signin");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleToggleTab = (page) => {
    if (page == active) return;
    flatListRef.current.scrollToIndex({
      index: currentIndex === 0 ? 1 : 0,
      animated: true,
    });
    setCurrentIndex(currentIndex === 0 ? 1 : 0);
    return setActive(page);
  };

  return {
    active,
    setActive,
    currentIndex,
    setCurrentIndex,
    handleToggleTab,
    flatListRef,
  };
};

export default useTab;
