import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <Image src="/images/logo.png" width={100} height={50} alt="AKQA" />
        </a>
      </Link>

      <style jsx>
        {`
          header {
            padding: 120px var(--gutter) 0;
          }
        `}
      </style>
    </header>
  )
}

export default Header;
