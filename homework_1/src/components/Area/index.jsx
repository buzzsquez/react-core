import React from 'react';
import styles from './style.module.css';

class Area extends React.Component {
  render() {
    return (
      <>
        <p className={styles.label}>{this.props.name}</p>
        <textarea
          ref={this.props.forwardRef}
          className={styles.textBlock}
          rows={this.props.rows}
          name={this.props.about}
          placeholder={this.props.name}
          maxLength="230"
        ></textarea>
      </>
    );
  }
}

export default Area;
