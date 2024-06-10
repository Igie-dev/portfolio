type Props = {
  targetId: string;
  title: string;
};
export default function NavBtn({ targetId, title }: Props) {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementRect = targetElement.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;
      const elementLeft = elementRect.left + window.pageXOffset;
      const elementHeight = elementRect.height;
      const elementWidth = elementRect.width;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      window.scrollTo({
        top: elementTop - windowHeight / 2 + elementHeight / 2,
        left: elementLeft - windowWidth / 2 + elementWidth / 2,
        behavior: "smooth",
      });
    }
  };
  return (
    <button
      type="button"
      className={title === "Home" ? "active_nav" : ""}
      id="nav_link_btn"
      onClick={handleScroll}
      data-target-id={targetId}
    >
      {title}
    </button>
  );
}
