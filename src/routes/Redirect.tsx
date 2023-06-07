import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { logIn } from '../slices/auth.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

function Redirect() {
  const location = useLocation();
  const dispatch = useDispatch()

  const token = new URLSearchParams(location.search).get('token');

  dispatch(logIn({ token: `Bearer ${token}` }));

  useEffect(() => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successfully logged in',
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      window.opener.location.reload(); // Reload the main window
      window.close();
    }, 2500);
  }, []);

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="div">
        <img className='w-28 h-28' src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="" />
        <h3 className='text-center font-bold'>Logged in</h3>
      </div>
    </div>
  );
}

export default Redirect;
