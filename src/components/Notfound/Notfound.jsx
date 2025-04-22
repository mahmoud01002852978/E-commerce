import { React } from 'react';
import style from "./Notfound.module.css"

export default function TamplateName(){
    return     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for cannot be found.</p>
      <a href="/" className="text-lg font-medium underline hover:text-green-200">
        Go Back to Home
      </a>
    </div>
</div>
}
