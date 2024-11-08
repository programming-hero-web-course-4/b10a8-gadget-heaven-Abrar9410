import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="text-5xl text-text1 text-center font-extrabold">Oops... Page Not Found</h1>
            <p className="text-center text-text2 text-xl">An error occurred. Don"t worry, you can go back</p>
            <div className="flex justify-center items-center gap-4">
                <button onClick={navigate(-1)} className="p-1 bg-gray-400 text-gray-600">Go Back</button>
                <button onClick={navigate('/')} className="p-1 bg-gray-400 text-gray-600">Go to Homepage</button>
            </div>
        </>
    );
};

export default ErrorPage;