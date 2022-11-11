import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';

const Experience: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="center-col-xy gap-y-10 pt-[10vh] min-h-screen max-w-screen-lg mx-auto" id="experience">
            <h1 className="text-2xl">
                {t('experience.phrase')}
                {' '}
                <strong className="purple-underline">{t('experience.decorated')}</strong>
            </h1>
            <div className="relative w-full border-2 border-walter rounded-lg p-2 flex flex-col gap-y-3 group">
                <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
                <h2 className="text-xl font-semibold space-x-2 center-row-y">
                    <MdWork />
                    <span>
                        {t('experience.vincu.workplace')}
                    </span>
                </h2>
                <h3>{t('experience.vincu.position')}</h3>
                <p>{t('experience.vincu.description')}</p>
                <span className="font-medium">{t('experience.vincu.dates')}</span>
            </div>
            <div className="relative w-full border-2 border-walter rounded-lg p-2 flex flex-col gap-y-3 group">
                <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
                <h2 className="text-xl font-semibold space-x-2 center-row-y">
                    <MdWork />
                    <span>
                        {t('experience.elaniin.workplace')}
                    </span>
                </h2>
                <h3>{t('experience.elaniin.position')}</h3>
                <p>{t('experience.elaniin.description')}</p>
                <span className="font-medium">{t('experience.elaniin.dates')}</span>
            </div>
            <div className="relative w-full border-2 border-walter rounded-lg p-2 flex flex-col gap-y-3 group">
                <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
                <h2 className="text-xl font-semibold space-x-2 center-row-y">
                    <MdWork />
                    <span>
                        {t('experience.innroad.workplace')}
                    </span>
                </h2>
                <h3>{t('experience.innroad.position')}</h3>
                <p>{t('experience.innroad.description')}</p>
                <span className="font-medium">{t('experience.innroad.dates')}</span>
            </div>
            <div className="relative w-full border-2 border-walter rounded-lg p-2 flex flex-col gap-y-3 group">
                <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
                <h2 className="text-xl font-semibold space-x-2 center-row-y">
                    <MdWork />
                    <span>
                        {t('experience.resultier.workplace')}
                    </span>
                </h2>
                <h3>{t('experience.resultier.position')}</h3>
                <p>{t('experience.resultier.description')}</p>
                <span className="font-medium">{t('experience.resultier.dates')}</span>
            </div>
            <a href="#footer" className="relative my-4 tracking-tighter border-2 border-walter rounded-lg center-col-xy p-2 gap-2 group">
                <div className="rounded h-full w-0 absolute -z-10 bg-walter with-trans quick group-hover:w-full" />
                {t('experience.continue')}
                <AiOutlineCaretDown className="animate-bounce" />
            </a>
        </div>
    );
};

export default Experience;
