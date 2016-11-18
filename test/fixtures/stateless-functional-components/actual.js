const Foo1 = () => (
  <div />
);

Foo1.propTypes = {
  foo: React.PropTypes.string
};

const Foo2 = () => {
  return <div />;
};

Foo2.propTypes = {
  foo: React.PropTypes.string
};

const Foo3 = function() {
  switch(true) {
    case true:
      if (true) {
        return <div />;
      } else {
        return <span />;
      }
      break;
  }
};

Foo3.propTypes = {
  foo: React.PropTypes.string
};

function Foo4() {
  return <div />;
}

Foo4.propTypes = {
  foo: React.PropTypes.string
};

function Foo5() {
  const bar5 = function() {
    return <div />;
  }

  return bar5();
}

Foo5.propTypes = {
  foo: React.PropTypes.string
};

function Foo6() {
  var result = bar6();

  return result;

  function bar6() {
    return <div />;
  }
}

Foo6.propTypes = {
  foo: React.PropTypes.string
};

function Foo7() {
  const shallow = {
    shallowMember() {
      return <div />;
    }
  };
  return shallow.shallowMember();
}

Foo7.propTypes = {
  foo: React.PropTypes.string
};

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

Foo8.propTypes = {
  foo: React.PropTypes.string
};

const Foo9 = () => (
  React.createElement("div", null)
);

Foo9.propTypes = {
  foo: React.PropTypes.string
};

const Foo10 = () => {
  return React.createElement("div", null);
};

Foo10.propTypes = {
  foo: React.PropTypes.string
};

const Foo11 = () => (
  true && <div />
);

Foo11.propTypes = {
  foo: React.PropTypes.string
};
