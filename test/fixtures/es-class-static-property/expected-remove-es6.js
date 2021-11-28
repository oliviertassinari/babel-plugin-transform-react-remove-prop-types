class Foo1 extends React.Component {
  render() {}

}

export default class Foo2 extends React.Component {
  render() {}

}

const componentFactory = () => {
  return class Foo3 extends React.Component {
    render() {}

  };
};
