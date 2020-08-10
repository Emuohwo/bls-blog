import React from 'react';
import Link from 'next/link';

const Navbar = () => (
    <nav className={ "navbar"}>
        <div className="navbar--logo-holder">
             <img src="/new-logo.png" alt="BetterLifesavings" className="navbar-logo" />
            {/* <span>BetterLifesavings</span> */}
        </div>
        <ul className="navbar--link">
            <li className="navbar--link-item">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className="navbar--link-item">
                <Link href="/blog/post">
                    <a>Add Post</a>
                </Link>
            </li>
            <li className="navbar--link-item">
                <Link href="/blog/test">
                    <a>new</a>
                </Link>
            </li>
        </ul>
    <style jsx>{`
        .navbar {
            background-color: green;
            color: #fff;
            display: flex;
            justify-content: space-between;
            padding: 2px 2%;
        }
        .navbar-logo {
            border-radius: 50%;
            margin-left: 2%;
        }
        @media screen and (max-width: 28rem) {
            .navbar-logo {
                width: 70px;
                height: auto;
            }
        }
        .navbar--link {
            display: flex;
            list-style: none;
            margin: 6px 0 0;
        }
        .navbar--link li {
            margin: 20px 2px -5px;
            padding: 4px 12px;
            border-bottom: 2px solid #fff; 
        }
    `}</style>
    </nav>
);

export default Navbar;
