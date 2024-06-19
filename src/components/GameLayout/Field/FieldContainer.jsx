import PropTypes from "prop-types";
import { FieldLayout } from "./FieldLayout";

export const FieldContainer = ({ field, onCellClick }) => {
  return <FieldLayout field={field} onCellClick={onCellClick} />;
};

FieldContainer.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};
