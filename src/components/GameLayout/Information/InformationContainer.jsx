import PropTypes from "prop-types";
import styles from "./InformationLayout.module.css";
import cursorX from "../../../assets/X.png";
import cursorO from "../../../assets/O.png";

export const InformationContainer = ({
  currentPlayer,
  isGameEnded,
  isDraw,
}) => {
  const getCursorStyle = () => {
    if (currentPlayer === "X") {
      return {
        cursor: `url(${cursorX}), auto`,
      };
    } else if (currentPlayer === "O") {
      return {
        cursor: `url(${cursorO}), auto`,
      };
    } else {
      return {
        cursor: "default",
      };
    }
  };

  return (
    <div className={styles.information}>
      {isDraw && <div className={styles.result}>Draw</div>}
      {!isDraw && isGameEnded && (
        <div className={styles.result}>
          Winner: {currentPlayer === "X" ? "X" : "O"}
        </div>
      )}
      {!isGameEnded && (
        <div className={styles.turn}>
          Turn:{" "}
          <span
            className={
              currentPlayer === "X" ? styles.currentPlayer : styles.player
            }
            style={getCursorStyle()}
          >
            {currentPlayer}
          </span>
        </div>
      )}
    </div>
  );
};

InformationContainer.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};
