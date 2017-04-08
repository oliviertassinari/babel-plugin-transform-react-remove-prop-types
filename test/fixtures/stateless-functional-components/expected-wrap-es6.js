const Foo1 = () => <div />;

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  foo: PropTypes.string
} : void 0;

const Foo2 = () => {
  return <div />;
};

process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  foo: PropTypes.string
} : void 0;

const Foo3 = function () {
  switch (true) {
    case true:
      if (true) {
        return <div />;
      } else {
        return <span />;
      }
      break;
  }
};

process.env.NODE_ENV !== "production" ? Foo3.propTypes = {
  foo: PropTypes.string
} : void 0;

function Foo4() {
  return <div />;
}

process.env.NODE_ENV !== "production" ? Foo4.propTypes = {
  foo: PropTypes.string
} : void 0;

function Foo5() {
  const bar5 = function () {
    return <div />;
  };

  return bar5();
}

process.env.NODE_ENV !== "production" ? Foo5.propTypes = {
  foo: PropTypes.string
} : void 0;

function Foo6() {
  var result = bar6();

  return result;

  function bar6() {
    return <div />;
  }
}

process.env.NODE_ENV !== "production" ? Foo6.propTypes = {
  foo: PropTypes.string
} : void 0;

function Foo7() {
  const shallow = {
    shallowMember() {
      return <div />;
    }
  };
  return shallow.shallowMember();
}

process.env.NODE_ENV !== "production" ? Foo7.propTypes = {
  foo: PropTypes.string
} : void 0;

function Foo8() {
  const obj = {
    deep: {
      member() {
        return <div />;
      }
    }
  };
  return obj.deep.member();
}

process.env.NODE_ENV !== "production" ? Foo8.propTypes = {
  foo: PropTypes.string
} : void 0;

const Foo9 = () => React.createElement("div", null);

process.env.NODE_ENV !== "production" ? Foo9.propTypes = {
  foo: PropTypes.string
} : void 0;

const Foo10 = () => {
  return React.createElement("div", null);
};

process.env.NODE_ENV !== "production" ? Foo10.propTypes = {
  foo: PropTypes.string
} : void 0;

const Foo11 = () => true && <div />;

process.env.NODE_ENV !== "production" ? Foo11.propTypes = {
  foo: PropTypes.string
} : void 0;
