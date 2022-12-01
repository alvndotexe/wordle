export default function Share() {
  function handleClick() {
    const root = document.documentElement;
    root.style.setProperty("--visibility", "visible");
    setTimeout(() => {
      console.log("dissappeared");
      root.style.setProperty("--visibility", "hidden");
    }, 4000);
    if (navigator.share) {
      navigator.share({ url: location.href });
    } else navigator.clipboard.writeText(location.href);
  }

  return (
    <button
      class="bg-green-400 p-[0.1rem] rounded-sm relative share-button"
      onClick={handleClick}
    >
      share
    </button>
  );
}
