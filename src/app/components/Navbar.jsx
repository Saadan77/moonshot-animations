"use client";

import StaggeredMenu from '@/components/StaggeredMenu'

const Navbar = ({ onMenuStateChange }) => {
    const menuItems = [
        { label: 'Home', link: '/', ariaLabel: 'Go to Home' },
        { label: 'About', link: '/about-us', ariaLabel: 'Go to About' },
        { label: 'Portfolio', link: '/portfolio', ariaLabel: 'Go to Portfolio' },
        { label: 'Industries', link: '/industries', ariaLabel: 'Go to Industries' },
        { label: 'Services', link: '#services', ariaLabel: 'Go to Services' },
        { label: 'Contact', link: '/contact-us', ariaLabel: 'Go to Contact' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' },
        { label: 'Instagram', link: 'https://instagram.com' },
        { label: 'GitHub', link: 'https://github.com' }
    ];

    return (
        <StaggeredMenu
            position="left"
            colors={['#38BDF8', '#FA2889', '#FFD700', '#3E5FF9']}
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            logoUrl="/images/primary-logo.png"
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            isFixed={true}
            accentColor="#FA2889"
            onMenuOpen={() => onMenuStateChange?.(true)}
            onMenuClose={() => onMenuStateChange?.(false)}
        />
    );
};

export default Navbar;