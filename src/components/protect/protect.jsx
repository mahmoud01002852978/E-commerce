import { Navigate } from 'react-router-dom';

export default function TemplateName(props) {
    if(localStorage.getItem("userToken")) {
        return props.children;
    } else {
        return <Navigate to="/login" />;
    }
}
