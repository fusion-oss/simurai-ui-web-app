import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastWarning = (message: string) => {
    return toast.info(message, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false
    });
};

export class MessageService {
    static showToastMessage(message: string): void {
        showToastWarning(message);
    }
}
