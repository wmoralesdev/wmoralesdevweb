import classNames from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsGithub } from 'react-icons/bs';

const Navbar: FC = () => {
    const { i18n } = useTranslation();

    return (
        <nav className="navbar">
            <div className="w-32 bg-white bg-opacity-10 rounded-lg
            md:w-44"
            >
                <button
                    onClick={() => i18n.changeLanguage('en')}
                    type="button"
                    className={classNames('font-bold w-1/2 p-1 rounded-l with-trans quick md:text-xl', i18n.language === 'en' && 'bg-walter text-white')}
                >
                    EN
                </button>
                <button
                    onClick={() => i18n.changeLanguage('es')}
                    type="button"
                    className={classNames('font-bold w-1/2 p-1 rounded-r with-trans quick md:text-xl', i18n.language === 'es' && 'bg-walter text-white')}
                >
                    ES
                </button>
            </div>
            <a href="https://github.com/wmoralesdev/wmoralesdevweb/tree/develop" className="rounded-full with-trans quick group hover:bg-walter hover:text-white">
                <BsGithub className="text-3xl md:text-4xl" />
            </a>
        </nav>
    );
};

export default Navbar;
