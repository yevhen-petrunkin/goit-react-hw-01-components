import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, children }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Statistics;
