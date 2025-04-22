import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export default function Verify() {
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validationSchema = yup.object().shape({
    code: yup.string().required('Code is required'),
  });

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
          code: values.code,
        })
        .then((res) => {
          setSuccessMessage('Code verified successfully');
          setApiError('');
        })
        .catch((err) => {
          setApiError('Invalid code or error occurred');
          setSuccessMessage('');
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto pt-32 lg:pt-24">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="code"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="code"
            className="block py-2.5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
            placeholder=" "
            required
          />
          <label htmlFor="code" className="absolute text-sm text-gray-500 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Verification Code
          </label>
          {formik.errors.code && formik.touched.code ? (
            <div className="p-4 mb-4 text-sm text-red-700 rounded-lg" role="alert">
              <span className="font-medium">{formik.errors.code}</span>
            </div>
          ) : null}
        </div>

        {apiError && (
          <div className="bg-slate-400 border rounded-lg my-3 border-spacing-9 border-red-600 text-red-600 p-5">
            {apiError}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-400 border rounded-lg my-3 border-spacing-9 border-green-600 text-green-600 p-5">
            {successMessage}
          </div>
        )}

        <div className="flex gap-5 items-center">
          <button type="submit" className="text-white bg-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Verify Code
          </button>
        </div>
      </form>
    </>
  );
}
