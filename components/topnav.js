import Link from "next/link"
export default function TopNav () {
  return (
    <div className='topnav'>
      <ul>
        <li>
        <Link href="/">
          <a>  Informacion 1</a>
        </Link>
        </li>
        <li> 
          <Link href="/pagina2">
            <a>  Informacion 2</a>
          </Link>
        </li>
        <li> 
          <Link href="/pagina3">
            <a>  Informacion 3</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
