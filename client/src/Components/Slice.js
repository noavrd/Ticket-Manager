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
          <span className="moreLess" onClick={() => setIsSliced(!isSliced)}>
            See more...
          </span>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          {!(props.content.length <= props.maxChar) && (
            <span className="moreLess" onClick={() => setIsSliced(!isSliced)}>
              See less...
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default Slice;
