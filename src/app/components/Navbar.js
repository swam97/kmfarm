import Link from 'next/link';
import '../app/globals.css';


export default function Navbar() {
    return (
        <nav>
            <h1 className="title">KM Farm</h1>
            <div>

                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link>
                {/* <li><a href="/"><span>Home</span></a></li>
                <li><a href="/about"><span>About</span></a></li>
                <li><a href="/products"><span>Products</span></a></li>
                <li><a href="/contact"><span>Contact</span></a></li> */}
            </div>
        </nav>
    );
}
