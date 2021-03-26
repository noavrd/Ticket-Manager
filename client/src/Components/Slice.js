import React, { useState } from "react";

function Slice(props) {
  const [isSliced, setIsSliced] = useState(
    props.content.length <= props.maxChar ? false : true
  );
  const text = isSliced ? props.content.slice(0, props.maxChar) : props.content;

  return (
    <>
      {isSliced ? (
        <div>
          <p>
            {text}
            <span>...</span>
          </p>
          <button className="moreLess" onClick={() => setIsSliced(!isSliced)}>
            See more...
          </button>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          {!(props.content.length <= props.maxChar) && (
            <button className="moreLess" onClick={() => setIsSliced(!isSliced)}>
              See less...
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Slice;
