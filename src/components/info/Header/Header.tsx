import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Header: FC = () => {
    const { t } = useTranslation();

    return (
        <header className="content center-col-xy">
            <div className="-mt-18">
                <h1 className="text-4xl">
                    {t('greeting')}
                    <br />
                    <strong className="purple-underline">Walter Morales</strong>
                </h1>
                <h2>{t('profession')}</h2>
                <a href="#about" className="relative my-4 tracking-tighter border-2 border-walter rounded-lg center-col-xy p-2 gap-2 group">
                    <div className="rounded h-full w-0 absolute -z-10 bg-walter with-trans quick group-hover:w-full" />
                    {t('more-about')}
                    <AiOutlineCaretDown className="animate-bounce" />
                </a>
            </div>
        </header>
    );
};

export default Header;
