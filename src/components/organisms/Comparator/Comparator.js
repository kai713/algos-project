import React, { useState, useEffect } from "react";
import "./Comparator.css";

export default function SortingComparison() {
  const [loading, setLoading] = useState(false);
  const [display1, setDisplay1] = useState(0);
  const [display2, setDisplay2] = useState(0);
  const [target1, setTarget1] = useState(0);
  const [target2, setTarget2] = useState(0);
  const [selectedCount, setSelectedCount] = useState(null);

  const handleCompare = () => {
    if (!selectedCount) return;

    setLoading(true);
    setDisplay1(0);
    setDisplay2(0);

    setTimeout(() => {
      const times = {
        10: [2, 3],
        100: [15, 18],
        1000: [120, 150]
      };

      const [time1, time2] = times[selectedCount];
      setTarget1(time1);
      setTarget2(time2);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!loading) {
      let frame;
      const duration = 500;
      const start = performance.now();

      const animate = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        setDisplay1(Math.floor(target1 * progress));
        setDisplay2(Math.floor(target2 * progress));
        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }
  }, [target1, target2, loading]);

  return (
    <div className="comparison-container">
      <h1 className="title">Comparison of Bubble Sort and Quick Sort</h1>
      <h3 className="choose">Choose the amount of elements:</h3>
      <div className="buttons-group">
        {[10, 100, 1000].map((count) => (
          <button
            key={count}
            onClick={() => setSelectedCount(count)}
            className={selectedCount === count ? "selected" : ""}
          >
            {count}
          </button>
        ))}
      </div>

      <button
        onClick={handleCompare}
        disabled={loading || !selectedCount}
        className="spin-button"
      >
        {loading ? <div className="spinner" /> : <div className="reload-icon">&#8635;</div>}
      </button>

      <div className="results">
        <div className="sort-block">
          <h3>Bubble Sort</h3>
          <div className="result-box">
            <div>{display1} ms</div>
          </div>
        </div>
        <div className="sort-block">
          <h3>Quick Sort</h3>
          <div className="result-box">
            <div>{display2} ms</div>
          </div>
        </div>
      </div>
    </div>
  );
}
