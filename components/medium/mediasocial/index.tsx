import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function MediaSocial() {
  return (
    <div className=' flex flex-col left-3 right-5 fixed mb-10 mx-3 bottom-0'>
      <ul>
        <li className='my-3  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
          <FaGithubSquare className='w-8 h-8 fill-[#FFD807] hover:opacity-70' />
        </li>
        <li className='my-3  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
          <FaInstagramSquare className='w-8 h-8 fill-[#FFD807] hover:opacity-70' />
        </li>
        <li className='my-3  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
          <FaLinkedin className='w-8 h-8 fill-[#FFD807] hover:opacity-70' />
        </li>
      </ul>
    </div>
  );
}
