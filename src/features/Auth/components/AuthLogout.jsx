import React from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  toast.success('Logout  successfully');
  actions.resetForm();
};
export default function AuthLogout(buttonProps) {
  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        className="btn btn-primary"
        {...buttonProps}
      >
        <FaArrowRightFromBracket />
        Log Out
      </button>
    </form>
  );
}
