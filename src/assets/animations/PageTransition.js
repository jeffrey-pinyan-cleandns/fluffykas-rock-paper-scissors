export const pageTransition = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0
  }
}