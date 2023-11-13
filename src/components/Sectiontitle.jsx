/* eslint-disable react/prop-types */

const Sectiontitle = ({heading, subheading}) => {
    return (
        <div>
            <p className='text-amber-500 text-lg font-semibold text-center py-3'>{subheading}</p>
            <p className='px-[500px] my-2'><hr /></p>
            <p className='text-2xl font-bold text-black text-center'>{heading}</p>
            <p className='px-[500px] my-2 pb-12'><hr /></p>
        </div>
    );
};

export default Sectiontitle;