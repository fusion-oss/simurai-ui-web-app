import './detailsTab.scss';
export const InfoRenderer: React.FC<any> = (props: any) => {
    const { data } = props;

    return <div className='panel scroller'>
        {
            data?.map((item: any, index: number) =>
                <div className='detail'><div>{item.key}</div><div> {item.value ?? '--'}</div></div>
            )
        }
    </div>

}