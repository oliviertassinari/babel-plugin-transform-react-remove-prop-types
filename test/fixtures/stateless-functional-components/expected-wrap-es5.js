var Foo1 = function Foo1() {
  return React.createElement("div", null);
};

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

var Foo2 = function Foo2() {
  return React.createElement("div", null);
};

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

var Foo3 = function Foo3() {
  switch (true) {
    case true:
      if (true) {
        return React.createElement("div", null);
      } else {
        return React.createElement("span", null);
      }

      break;
  }
};

Foo3.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo4() {
  return React.createElement("div", null);
}

Foo4.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo5() {
  var bar5 = function bar5() {
    return React.createElement("div", null);
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
    return React.createElement("div", null);
  }
}

Foo6.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo7() {
  var shallow = {
    shallowMember: function shallowMember() {
      return React.createElement("div", null);
    }
  };
  return shallow.shallowMember();
}

Foo7.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo8() {
  var obj = {
    deep: {
      member: function member() {
        return React.createElement("div", null);
      }
    }
  };
  return obj.deep.member();
}

Foo8.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

var Foo9 = function Foo9() {
  return React.createElement("div", null);
};

Foo9.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

var Foo10 = function Foo10() {
  return React.createElement("div", null);
};

Foo10.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

var Foo11 = function Foo11() {
  return true && React.createElement("div", null);
};

Foo11.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

function Foo12(props) {
  return React.cloneElement(props.children);
}

Foo12.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};