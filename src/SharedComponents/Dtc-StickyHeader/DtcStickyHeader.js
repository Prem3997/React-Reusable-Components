import React, { useRef, useEffect, useState } from "react";
import "./sticky.css";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const DtcStickyHeader = (props) => {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const sectionRefs = props.sectionRefs

  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const scrollPosition = window.scrollY + headerHeight;

    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
      return section
    });

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section);
    } else if (!selected && visibleSection) {
      setVisibleSection(undefined);
    }
  };

  useEffect(() => {

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);
  return (
    
        <div>
          <div className={props.position} ref={headerRef}>
            {sectionRefs.map((menu,i) =>
              <button key={i}
                type="button"
                className={`header_link ${visibleSection === menu.section ? "selected" : ""}`}
                onClick={() => {
                  scrollTo(menu.ref.current);
                }}
              >
                {menu.name}
              </button>
            )}
          </div>
        </div>
     
  );
}

export default DtcStickyHeader;
