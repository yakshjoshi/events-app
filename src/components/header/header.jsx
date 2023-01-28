
import Link from 'next/link';
import Image from 'next/image';
export const Header = () => {
    return (

        <header>
        
        <div className='topNav'>
        <Image alt="logo" src={'/images/logo.png'} height={100} width={100}/>
        <nav>
            <ul>
                <li>
                <Link href='/'>Home
                </Link>
                </li>
                <li>
                <Link href='/about-us'>About Us</Link>
                </li>
                <li>
                <Link href="/events">Events</Link>
                </li>
            </ul>
          
          
          
          

        </nav>
        </div>
        
        <p className='title'>The Next.js Project</p>
      </header>

    );

}