import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useOnClickOutside from 'use-onclickoutside';
import classnames from 'classnames';
import styles from './index.module.scss';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const arrayPaths = ['/'];

  const [onTop, setOnTop] = useState((!arrayPaths.includes(router.pathname) || isErrorPage) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

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

  const closeSearch = () => {
    setSearchOpen(false);
  }

  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={classnames(styles['app-header'], {
      [styles['site-header--fixed']]: !onTop
    })}>
      <div className={styles['container']}>
        <Link href="/">
          <a><h1 className={styles['app-logo']}>
            {/* <Logo /> */}
            E-Shop</h1></a>
        </Link>
        <nav ref={navRef} className={classnames(styles['app-nav'], {
          [styles['app-nav--open']]: menuOpen
        })}>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <a href="#">Inspiration</a>
          <a href="#">Rooms</a>
          <button className={classnames(styles['app-nav__btn'])}><p>Account</p></button>
        </nav>

        <div className={styles['app-header__actions']}>
          <button ref={searchRef} className={classnames(styles['search-form-wrapper'], {
            [styles['search-form--active']]: searchOpen,
          })}>
            <form className={styles['search-form']}>
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
              <input type="text" name="search" placeholder="Enter the product you are looking for" />
            </form>
            <i onClick={() => setSearchOpen(!searchOpen)} className="icon-search"></i>
          </button>
          <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
            </button>
          </Link>
          <Link href="/login">
            <button className={styles['app-header__btn-avatar']}><i className="icon-avatar"></i></button>
          </Link>
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
