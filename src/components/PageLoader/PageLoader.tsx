import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className='lds-ellipsis'>
        <div />
        <div />
        <div />
        <div />
    </div>
);
