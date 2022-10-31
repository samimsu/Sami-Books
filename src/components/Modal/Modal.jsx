import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@assets/CloseIcon';

export default function Modal({ title, showModal, setShowModal, children }) {
  return (
    <>
      <div
        className={`${
          !showModal ? 'hidden' : 'block'
        } bg-black w-screen h-screen opacity-40 absolute inset-0`}
      />
      <div
        className={`${
          !showModal ? 'hidden' : 'flex'
        } flex flex-col border border-slate-500 border-2 mx-auto p-10 rounded-xl my-auto h-fit w-fit absolute inset-0 bg-white z-10`}
      >
        <button
          type="button"
          className="absolute right-2 top-2 bg"
          onClick={() => setShowModal(!showModal)}
        >
          <CloseIcon />
        </button>
        <div className="text-lg mb-2">{title}</div>
        {children}
      </div>
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
