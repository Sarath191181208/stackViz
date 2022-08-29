const { useState } = React;

function useStack() {
  const [stack, setStack] = useState([]);

  const stackAdd = (ele) => {
    ele = ele.trim();
    if (ele === "" || ele == null) return;
    setStack([...stack, ele]);
  };

  const stackPop = (ele) => {
    let temp = stack.slice();
    let _ele = temp.pop();
    setStack((s) => temp);
    return _ele;
  };

  const stackPeek = () => {
    return stack[stack.length - 1];
  };

  return {
    stack,
    stackAdd,
    stackPop,
  };
}

export default useStack;
