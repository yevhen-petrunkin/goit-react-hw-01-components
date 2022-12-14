import css from './StatList.module.css';
import PropTypes from 'prop-types';
import StatData from '../StatData/StatData';

const StatList = ({ stats }) => {
  return (
    <ul className={css.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <StatData key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatList;
