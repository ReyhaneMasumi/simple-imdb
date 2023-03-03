// Main poster component

import joker from '../assets/images/joker.jpg';

function Poster() {
  return (
    <div className="flex-row-between main-poster">
      <div className="flex-col-between">
        <div>
          <div style={{ color: 'var(--primary)' }}>Trending</div>
          <h2 style={{ color: 'var(--light-1)' }}>JOKER</h2>
        </div>
        <div className="sub-title">24 stories</div>
      </div>
      <div
        className="img-poster"
        style={{ backgroundImage: `url(${joker})` }}
      ></div>
    </div>
  );
}

export default Poster;
