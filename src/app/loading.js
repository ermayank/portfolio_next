const Loading = () => {
  return (
    <>
      <main>
        <div className="loader full-view-height">
          <div style={{ "--i": 1 }}></div>
          <div style={{ "--i": 2 }}></div>
          <div style={{ "--i": 3 }}></div>
          <div style={{ "--i": 4 }}></div>
        </div>
      </main>
    </>
  );
};

export default Loading;
