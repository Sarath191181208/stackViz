const { useState, useEffect, useCallback, useRef } = React;
const { createRoot } = ReactDOM;

const COLORS = [
  "#fe5a31",
  "#fec031",
  "#20ab6f",
  "#31a2fe",
  "#fe3180",
  "#FF6712",
];

const root = createRoot(document.getElementById("root"));
root.render(<Main />);

function Main() {
  const { stack, stackAdd, stackPop } = useStack();
  return (
    <div className="screen">
      <div className="controls">
        <Inputbox onSubmitFn={(e) => stackAdd(e)} onMinus={stackPop} />
      </div>
      <div className="sim-container">
        <div className="stack-container">
          {stack.length > 0 ? (
            stack
              .slice()
              .reverse()
              .map((ele, index) => {
                return (
                  <div
                    className="stack-ele"
                    style={{
                      backgroundColor:
                        COLORS[(stack.length - index) % COLORS.length],
                    }}
                  >
                    {ele}
                  </div>
                );
              })
          ) : (
            <div className="center-container">
              <p className="helper-txt">
                Enter in the input box to add elements of a stack. Press pop to
                pop off the top most element
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
