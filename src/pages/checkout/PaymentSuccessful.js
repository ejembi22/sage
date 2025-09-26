

const PaymentSuccessful = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='success-container'>
      <div className='success-modal'>
        <button className='close-button' onClick={onClose}>
          <i className='bx bx-x'></i>
        </button>
        <p>Payment was successful!</p>
      </div>
    </div>
  )
}

export default PaymentSuccessful