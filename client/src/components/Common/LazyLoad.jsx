//External Import
const LazyLoad = () => {
  return (
    <div className="preloader">
      <div className="preloader__wrap">
        <svg className="spinner-container" viewBox="0 0 52 52">
          <circle
            className="path"
            cx="26px"
            cy="26px"
            r="20px"
            fill="none"
            strokeWidth="4px"
          />
        </svg>
        <div className="preloader__progress">
          <span style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default LazyLoad;
