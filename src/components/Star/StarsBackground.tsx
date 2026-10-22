import { memo, useMemo } from "react";
import "./StarsBackground.css";

const StarsBackground = memo(() => {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        topOffset: `${Math.random() * 100}vh`,
        fallDelay: `-${Math.random() * 30}s`,
      })),
    []
  );

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={
            {
              "--top-offset": star.topOffset,
              "--fall-delay": star.fallDelay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
});

export default StarsBackground;
