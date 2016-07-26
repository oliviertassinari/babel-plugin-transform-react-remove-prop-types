"use strict";

var Foo1 = function Foo1() {
  return React.createElement("div", null);
};

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  foo: React.PropTypes.string
} : void 0;

var Foo2 = function Foo2() {
  return React.createElement("div", null);
};

process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  foo: React.PropTypes.string
} : void 0;

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

process.env.NODE_ENV !== "production" ? Foo3.propTypes = {
  foo: React.PropTypes.string
} : void 0;

function Foo4() {
  return React.createElement("div", null);
}

process.env.NODE_ENV !== "production" ? Foo4.propTypes = {
  foo: React.PropTypes.string
} : void 0;

function Foo5() {
  var bar5 = function bar5() {
    return React.createElement("div", null);
  };

  return bar5();
}

process.env.NODE_ENV !== "production" ? Foo5.propTypes = {
  foo: React.PropTypes.string
} : void 0;

function Foo6() {
  var result = bar6();

  return result;

  function bar6() {
    return React.createElement("div", null);
  }
}

process.env.NODE_ENV !== "production" ? Foo6.propTypes = {
  foo: React.PropTypes.string
} : void 0;

function Foo7() {
  var shallow = {
    shallowMember: function shallowMember() {
      return React.createElement("div", null);
    }
  };
  return shallow.shallowMember();
}

process.env.NODE_ENV !== "production" ? Foo7.propTypes = {
  foo: React.PropTypes.string
} : void 0;

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

process.env.NODE_ENV !== "production" ? Foo8.propTypes = {
  foo: React.PropTypes.string
} : void 0;

var Foo9 = function Foo9() {
  return React.createElement("div", null);
};

process.env.NODE_ENV !== "production" ? Foo9.propTypes = {
  foo: React.PropTypes.string
} : void 0;

var Foo10 = function Foo10() {
  return React.createElement("div", null);
};

process.env.NODE_ENV !== "production" ? Foo10.propTypes = {
  foo: React.PropTypes.string
} : void 0;
