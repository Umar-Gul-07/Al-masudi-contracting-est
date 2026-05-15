import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './include/Header'
import Footer from './include/Footer'
import useThemeRuntime from '../Utils/useThemeRuntime'
import { useLanguage } from '../Utils/Language'

const pageTitles = {
    en: {
        '/': 'Marbal Riyadh | Premium Tiles and Marble',
        '/about': 'About Us | Marbal Riyadh',
        '/events': 'Events | Marbal Riyadh',
        '/blogs': 'Blog | Marbal Riyadh',
        '/contact': 'Contact Us | Marbal Riyadh',
    },
    ar: {
        '/': 'ماربل الرياض | بلاط ورخام فاخر',
        '/about': 'من نحن | ماربل الرياض',
        '/events': 'الفعاليات | ماربل الرياض',
        '/blogs': 'المدونة | ماربل الرياض',
        '/contact': 'اتصل بنا | ماربل الرياض',
    }
}

function Base({ children }) {
    useThemeRuntime()
    const location = useLocation()
    const { language } = useLanguage()

    React.useEffect(() => {
        const localizedTitles = pageTitles[language] || pageTitles.en
        const title =
            localizedTitles[location.pathname] ||
            (location.pathname.startsWith('/blog-details/')
                ? (language === 'ar' ? 'تفاصيل المدونة | ماربل الرياض' : 'Blog Details | Marbal Riyadh')
                : location.pathname.startsWith('/event-single/')
                    ? (language === 'ar' ? 'تفاصيل الفعالية | ماربل الرياض' : 'Event Details | Marbal Riyadh')
                    : (language === 'ar' ? 'ماربل الرياض' : 'Marbal Riyadh'))

        document.title = title
    }, [language, location.pathname])

    return (
        <>
            <div id="google_translate_element" />
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading" />
                    <div id="loading-icon">
                        <img src="/images/loader.svg" alt="" />
                    </div>
                </div>
            </div>
            <Header />
            {children}
            <Footer />

        </>
    )
}

export default Base
