const Foo1 = () => <div />;

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

const Foo2 = () => {
  return <div />;
};

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

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

Foo3.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo4() {
  return <div />;
}

Foo4.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo5() {
  const bar5 = function () {
    return <div />;
  };

  return bar5();
}

Foo5.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo6() {
  var result = bar6();
  return result;

  function bar6() {
    return <div />;
  }
}

Foo6.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo7() {
  const shallow = {
    shallowMember() {
      return <div />;
    }

  };
  return shallow.shallowMember();
}

Foo7.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

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

Foo8.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

const Foo9 = () => React.createElement("div", null);

Foo9.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

const Foo10 = () => {
  return React.createElement("div", null);
};

Foo10.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

const Foo11 = () => true && <div />;

Foo11.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo12(props) {
  return React.cloneElement(props.children);
}

Foo12.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};
const Foo13 = React.memo(() => true && <div />);
Foo13.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};
