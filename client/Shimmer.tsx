export function ShimmerComments() {
  return <span className="shimmer short inline-block">&nbsp;</span>;
}

export function ShimmerPost() {
  return (
    <div>
      <span className="comments">
        <ShimmerComments />
      </span>
      <h3 className="shimmer med">&nbsp;</h3>
      <p className="shimmer content">&nbsp;</p>
      <p className="shimmer content">&nbsp;</p>
      <p className="shimmer content">&nbsp;</p>
    </div>
  );
}

export function Shimmer() {
  return (
    <div>
      <h2 className="shimmer short">&nbsp;</h2>

      <ShimmerPost />
      <ShimmerPost />
      <ShimmerPost />
      <ShimmerPost />
    </div>
  );
}
