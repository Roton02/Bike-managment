 type PageHeadingProps = {
    title: string;      

};

const PageHeading = ({title}:PageHeadingProps) => {


    return (
        <div className="flex flex-col items-center justify-center py-4">
        <h1 className="text-4xl font-bold text-gray-900 uppercase border-b-4 border-primary pb-4 -mx-5">{title}</h1>

    </div>
    );
};

export default PageHeading;