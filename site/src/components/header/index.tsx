import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useOnClickOutside from 'use-onclickoutside';
import classnames from 'classnames';
import { useApp } from "../../hooks/app.hook";
import { UserRole } from "../../entities";
import styles from './index.module.scss';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const arrayPaths = ['/'];

  const [onTop, setOnTop] = useState((!arrayPaths.includes(router.pathname) || isErrorPage) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const { user } = useApp();

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  useOnClickOutside(navRef, closeMenu);

  return (
    <header className={classnames(styles['app-header'], {
      [styles['site-header--fixed']]: !onTop
    })}>
      <div className={styles['container']}>
        <Link href="/">
          <img src="/app-logo.png" className="w-[100px]"/>
        </Link>
        <nav ref={navRef} className={classnames(styles['app-nav'], {
          [styles['app-nav--open']]: menuOpen
        })}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/products">
            <a>Products</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

          <button className={classnames(styles['app-nav__btn'])}><p>Account</p></button>
        </nav>

        <div className={styles['app-header__actions']}>
          {user?._id ? (
            <>
              {user?.role === UserRole.admin && (
                <Link href="/admin-managment">
                  <button className="btn-admin-managment">
                    <i className='bx bxs-ghost' ></i>
                  </button>
                </Link>
              )}
              <Link href="/shopping-cart">
                <button className="btn-cart" onClick={() => router.push("/shopping-cart")}>
                  <i className='bx bxs-cart' ></i>
                </button>
              </Link>
              <Link href="/profile">
                <button className={styles['app-header__btn-avatar']}>
                  <i className="bx bxs-user"></i>
                </button>
              </Link>
            </>
          ) : (
          <Link href="/login">
            <button className={styles['app-header__btn-avatar']}>
              <i className="bx bx-log-in-circle"></i>
            </button>
          </Link>
          )}
          <button
            onClick={() => setMenuOpen(true)}
            className={styles['app-header__btn-menu']}>
            <i className={styles['btn-hamburger']}><span></span></i>
          </button>
        </div>
      </div>
    </header>
  )
};


export default Header;
