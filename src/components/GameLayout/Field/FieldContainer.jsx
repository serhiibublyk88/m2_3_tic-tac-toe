import { FieldLayout } from "./FieldLayout";

export const FieldContainer = ({ field, currentPlayer, onCellClick }) => {
  return (
    <FieldLayout
      field={field}
      currentPlayer={currentPlayer}
      onCellClick={onCellClick}
    />
  );
};
