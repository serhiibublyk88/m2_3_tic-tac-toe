import PropTypes from "prop-types";
import styles from "./InformationLayout.module.css";

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className={styles.information}>
      {isDraw ? (
        <p className={styles.result}>Draw</p>
      ) : isGameEnded ? (
        <p className={styles.result}>Winner: {currentPlayer}</p>
      ) : (
        <p className={styles.currentPlayer}>Turn: {currentPlayer}</p>
      )}
    </div>
  );
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
