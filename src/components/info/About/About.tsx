import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSchool } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { CgLaptop } from 'react-icons/cg';
import { AiOutlineCaretDown } from 'react-icons/ai';

const About: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="center-col-xy gap-y-10 pt-[10vh] min-h-screen max-w-screen-lg mx-auto" id="about">
            <h1 className="text-2xl">
                {t('about.education.phrase')}
                {' '}
                <strong className="purple-underline">{t('about.education.decorated')}</strong>
            </h1>
            <div className="relative w-full border-2 border-walter rounded-lg p-2 flex flex-col gap-y-3 group">
                <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
                <h2 className="text-xl font-semibold space-x-2 center-row-y">
                    <FaSchool />
                    <span>
                        CECAM -
                        {' '}
                        {t('about.education.highschool.title')}
                    </span>
                </h2>
                <h3>{t('about.education.highschool.text')}</h3>
                <span className="font-medium">2015 - 2017</span>
            </div>
            <div className="relative w-full border-2 border-walter rounded-lg p-2 flex flex-col gap-y-3 group">
                <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
                <h2 className="text-xl font-semibold space-x-2 center-row-y">
                    <IoMdSchool />
                    <span>
                        UCA -
                        {' '}
                        {t('about.education.college.title')}
                    </span>
                </h2>
                <h3>{t('about.education.college.text')}</h3>
                <span className="font-medium">
                    2018 - 2024
                    {' '}
                    <small>
                        (
                        {t('about.education.college.catch')}
                        )
                    </small>
                </span>
            </div>
            <div className="relative w-full border-2 border-walter rounded-lg p-2 flex flex-col gap-y-3 group">
                <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
                <h2 className="text-xl font-semibold space-x-2 center-row-y">
                    <CgLaptop />
                    <span>
                        Other -
                        {' '}
                        {t('about.education.platzi.title')}
                    </span>
                </h2>
                <h3>{t('about.education.platzi.text')}</h3>
                <span className="font-medium">
                    {t('about.education.platzi.date')}
                </span>
            </div>
            <a href="#experience" className="relative my-4 tracking-tighter border-2 border-walter rounded-lg center-col-xy p-2 gap-2 group">
                <div className="rounded h-full w-0 absolute -z-10 bg-walter with-trans quick group-hover:w-full" />
                {t('about.continue')}
                <AiOutlineCaretDown className="animate-bounce" />
            </a>
        </div>
    );
};

export default About;
