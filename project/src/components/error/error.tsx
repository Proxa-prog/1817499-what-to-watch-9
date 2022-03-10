import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <p>404 Not Found</p>
      <Link to='/'>На главную</Link>
    </>
  );
}

export default Error;
