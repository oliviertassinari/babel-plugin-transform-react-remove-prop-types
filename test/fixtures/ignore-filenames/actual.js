import { SomeComponent } from './SomeComponent';

const propTypes = {
  value: SomeComponent.propTypes.value,
};

export function AnotherComponent(props) {
  return <SomeComponent value={props.value} />;
}

AnotherComponent.propTypes = propTypes;
