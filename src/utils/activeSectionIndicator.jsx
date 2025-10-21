import { useEffect } from "react";

const ActiveSectionIndicator = ({sections, top, mount, setMount}) => {

  useEffect(() => {
    //Function to determine the active section while scrolling
    const determineActiveSection = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= top && rect.bottom >= 10) {
            //Set the active link based on the section ID
            mount !== i && setMount(i)
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", determineActiveSection);

    //Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", determineActiveSection);
    };
  }, [sections]);
}

export default ActiveSectionIndicator