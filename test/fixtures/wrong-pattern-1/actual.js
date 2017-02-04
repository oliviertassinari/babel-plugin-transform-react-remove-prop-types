import { pick } from 'lodash';
import SomeComponent1, { propTypes as someComponentPropTypes } from './SomeComponent1';
import SomeComponent2 from './SomeComponent2';

export function AnotherComponent1(props) {
  const passedProps = pick(props, Object.keys(someComponentPropTypes));
  return <SomeComponent1 {...passedProps} />;
}

export function AnotherComponent2(props) {
  const passedProps = pick(props, Object.keys(SomeComponent2.propTypes));
  return <SomeComponent2 {...passedProps} />;
}
