import * as React from "react";
import classNames from 'classnames';
import logo from './../../static/logo.svg';
import styles from './styles.module.scss';
// import '../../static/styles.css';

export function Counter() {
  const [count, setCount] = React.useState(0);

  const wrapperClasses = classNames(
		'custom-my-class',
		styles.wrapper,
	);

  const onClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p className={wrapperClasses} >You clicked {count} times v6</p>
      <img src={logo} className="component-logo" alt="logo" />
      <button onClick={onClick}>Click me</button>
    </>
  );
}
