import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Header = () => {
    const {t} =  useTranslation();

    return(
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

            <div className="logo">
                <h1><a href="/">Dawood<span> Group</span></a></h1>
                
            </div>

            <nav id="navbar" className="navbar">
                <ul>
                    <li><a className="nav-link scrollto" href="#hero">{t('header_home')}</a></li>
                    <li><a className="nav-link scrollto" href="#about">{t("header_about")}</a></li>
                    <li><a className="nav-link scrollto" href="#services">{t("header_services")}</a></li>
                    <li><a className="nav-link scrollto " href="#products">{t("header_products")}</a></li>
                    <li><a className="nav-link scrollto" href="#team">{t("header_team")}</a></li>
                    <li><a className="nav-link scrollto" href="#contact">{t("header_contact")}</a></li>
                    <li className="dropdown"><a href="#lan"><span>{t("header_language")}</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li>
                            <a href="#en" onClick={() => i18next.changeLanguage('en')}>English</a>
                        </li>
                        <li><a href="#ar" onClick={() => i18next.changeLanguage('ar')}>عربى</a></li>
                        </ul>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            </div>
        </header>
    )
}

export default Header;