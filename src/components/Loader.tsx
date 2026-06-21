export default function Loader({ loaderOut }: { loaderOut: boolean }) {
  return (
    <div id="loader" className={loaderOut ? 'out' : ''}>
      <div className="loader-wordmark">Progressive <span>Trade</span> Syndicate</div>
      <div className="loader-bar-wrap"><div className="loader-bar"></div></div>
    </div>
  );
}
