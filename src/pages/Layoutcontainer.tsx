import { ToastContainer } from 'react-toastify';

interface LayoutContainerProps {
    children: JSX.Element;
}
export const LayoutContainer = (props: LayoutContainerProps) => {
    const { children } = props;

    return <>
        {children}
        <ToastContainer style={{width:"500px"}} />
    </>
}