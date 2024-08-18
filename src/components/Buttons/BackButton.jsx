import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className='btn btn-primary'
    >
      Back
    </button>
  );
}
export default BackButton;
