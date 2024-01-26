import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10'>
            <img className='mx-auto mt-5' src="/logo.png" alt="Logo_not_found" />
            <p className="text-[18px] mt-5 text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className='mt-2 text-[#403F3F] font-medium'>
                {moment().format("dddd, ")}
                <span className='text-[#706F6F]'>{moment().format("MMMM D, YYYY")}</span>
            </p>
        </div>
    );
};

export default Header;