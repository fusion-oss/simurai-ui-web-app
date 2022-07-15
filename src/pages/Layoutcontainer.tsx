interface LayoutContainerProps {
    children: JSX.Element;
}
export const LayoutContainer = (props: LayoutContainerProps) => {
    const { children } = props;
    return <>{children}</>
}