export default function Share() {
  return (
    <button
      class="bg-green-400 p-[0.1rem] rounded-sm"
      onClick={() => {
        //@ts-ignore:
        if (navigator.share) {
          navigator.share({ url: location.href });
        } else navigator.clipboard.writeText(location.href);
      }}
    >
      share
    </button>
  );
}
