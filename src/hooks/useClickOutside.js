import { useRef, useEffect } from "react";

export let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        console.log(e.target)
        handler();
      }
    }

    document.addEventListener("mousedown", maybeHandler)

    return () => {
      document.addEventListener("mosuedown", maybeHandler);
    }

  })

  return domNode;
}