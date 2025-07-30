function WelcomeText() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 text-black">
      <div className="text-center">
        <div className="fs-1 fw-bold">Welcome</div>
        <div className="fs-2">to</div>
        <div className="fw-bold gagalin" style={{ fontSize: "clamp(2rem, 10vw, 133px)" }}>
          INVENO
        </div>
      </div>
    </div>
  );
}

export default WelcomeText;
