import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CustomButton, TextInput } from "./";
import { footerLinks } from "./data";

const Footer = () => {
    return (
        <footer className='text-gray-700'>

            <div className=' border-t border-gray-200 py-4'>

                <div className='container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-center'>
                    <span className='inline-flex w-full justify-center'>
                        <a
                            href='https://www.facebook.com/profile.php?id=100095233157531'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-500 text-xl hover:text-blue-600 hover:scale-125 ease-in-out duration-300'
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href='https://twitter.com/desatandocons'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='ml-3 text-gray-500 text-xl hover:text-blue-500 hover:scale-125 ease-in-out duration-300'
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href='https://www.instagram.com/desatando.nudos.consultoria'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='ml-3 text-gray-500 text-xl hover:text-pink-600 hover:scale-125 ease-in-out duration-300'
                        >
                            <FiInstagram />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/fernandocoen/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='ml-3 text-gray-500 text-xl hover:text-blue-600 hover:scale-125 ease-in-out duration-300'
                        >
                            <FaLinkedinIn />
                        </a>
                    </span>
                </div>
            </div>

            <div className='bg-[#001a36]'>
                <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
                    <p className='text-gray-300 text-sm text-center sm:text-left'>
                        &copy; 2023 Desatando Nudos —
                        <Link
                            href='https://youtube.com'
                            className='text-[#1199e7] ml-1'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            @DesatandoNudos
                        </Link>
                    </p>

                    <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
                        Designed by JmauricioM
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
