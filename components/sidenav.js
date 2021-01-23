import Link from "next/link"
export default function SideNav(){
    return(
        <div className='sidenav'>
            <ul>
            <ul>
        <li>
        <Link href="/">
          <a> Pagina1</a>
        </Link>
        </li>
        <li> 
          <Link href="/pagina2">
            <a>Pagina2</a>
          </Link>
        </li>
        <li> 
          <Link href="/pagina3">
            <a>Pagina3</a>
          </Link>
        </li>
      </ul>
            </ul>
        </div>
    )
}